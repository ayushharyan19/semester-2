import { useState } from 'react';

// ✅ Child component
function CharacterDisplay({ count }) {
  return (
    <p>Characters Typed: {count}</p>
  );
}

// ✅ Parent component
function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Live Character Counter</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <CharacterDisplay count={text.length} />
    </div>
  );
}

export default App;