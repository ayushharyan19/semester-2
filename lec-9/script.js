const container = document.getElementById("container");

function printLog(message) {
    const p = document.createElement("p");
    p.textContent = message;
    container.appendChild(p);
}

document.querySelector("#grandparent").addEventListener("click", () => {
    printLog("Grandparent Clicked");
});

document.querySelector("#parent").addEventListener("click", () => {
    printLog("Parent Clicked");
});

document.querySelector(".btn").addEventListener("click", () => {
    printLog("Button Clicked");
});