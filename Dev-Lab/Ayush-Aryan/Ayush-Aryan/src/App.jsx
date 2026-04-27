import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (todo === "") return;
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <h2>Todo App</h2>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo..."
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;