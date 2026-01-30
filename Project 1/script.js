const API_KEY = "16416a2822a04067a0042906262301";
const BASE_URL = "https://api.weatherapi.com/v1/current.json";

const input = document.getElementById("nav-input");
const searchBtn = document.getElementById("searchBtn");
const statusMsg = document.getElementById("statusMsg");

const tempEl = document.getElementById("temp");
const cityEl = document.getElementById("city");
const timeEl = document.getElementById("time");
const dayEl = document.getElementById("day");
const dateEl = document.getElementById("date");
const iconImg = document.getElementById("icon");
const conditionEl = document.getElementById("condition");

function setStatus(message, type = "info") {
  statusMsg.textContent = message;
  statusMsg.className = "status " + type;
}

function formatDateParts(localtimeStr) {
  // WeatherAPI returns "YYYY-MM-DD HH:MM"
  const dt = new Date(localtimeStr.replace(" ", "T"));
  const optionsTime = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const timeStr = dt.toLocaleTimeString("en-GB", optionsTime);
  const dayStr = dt.toLocaleDateString("en-GB", { weekday: "long" });
  const dateStr = dt.toLocaleDateString("en-GB").replace(/\//g, "."); // DD.MM.YYYY

  return { timeStr, dayStr, dateStr };
}

async function fetchWeather(query) {
  if (!query) {
    setStatus("Please enter a city or place name.", "error");
    return;
  }

  setStatus("Fetching weather...", "info");

  const url =
    BASE_URL + `?key=${API_KEY}&q=${encodeURIComponent(query)}&aqi=no`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      if (res.status === 400 || res.status === 404) {
        setStatus("Location not found. Try another name.", "error");
      } else if (res.status === 401) {
        setStatus("API key problem. Check your WeatherAPI key.", "error");
      } else {
        setStatus(`Error ${res.status}. Please try again.`, "error");
      }
      return;
    }

    const data = await res.json();
    if (!data.location || !data.current) {
      setStatus("Unexpected response from API.", "error");
      return;
    }

    renderWeather(data);
    setStatus(`Showing weather for "${data.location.name}".`, "success");
  } catch (err) {
    setStatus("Network error. Check your internet connection.", "error");
  }
}

function renderWeather(data) {
  const loc = data.location;
  const cur = data.current;

  const { timeStr, dayStr, dateStr } = formatDateParts(loc.localtime);

  tempEl.textContent = Math.round(cur.temp_c) + " °C";
  cityEl.textContent = loc.name;
  timeEl.textContent = timeStr;
  dayEl.textContent = dayStr;
  dateEl.textContent = dateStr;

  conditionEl.textContent = cur.condition.text;
  const iconUrl = "https:" + cur.condition.icon;
  iconImg.src = iconUrl;
  iconImg.alt = cur.condition.text;
  iconImg.style.display = "block";
}

function handleSearch() {
  const q = input.value.trim();
  fetchWeather(q);
}

searchBtn.addEventListener("click", handleSearch);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch();
});

// initial example
fetchWeather("London");