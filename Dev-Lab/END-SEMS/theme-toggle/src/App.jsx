import { useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{
      backgroundColor: isDark ? "black" : "white",
      color: isDark ? "white" : "black",
      height: "100vh",
      padding: "20px",
    }}>
      <h1>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>

      <button onClick={() => setIsDark(!isDark)}>
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default App;