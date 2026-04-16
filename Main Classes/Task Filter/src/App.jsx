import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Practice map()', completed: true },
    { id: 3, text: 'Understand filter()', completed: true },
    { id: 4, text: 'task 4', completed: false },
    { id: 5, text: 'new-task', completed: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('All');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: inputValue.trim(), completed: false }]);
    setInputValue('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const removeTask = (id, e) => {
    e.stopPropagation();
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true;
  });

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="canvas-card">
      {/* Top Nav */}
      <nav className="top-nav">
        <span className="nav-link"></span>
        <span className="nav-link"></span>
        <span className="brand">TASKDOÑO</span>
        <span className="nav-link"></span>
        <span className="nav-link"></span>
      </nav>

      {/* Body */}
      <div className="card-body">
        {/* Left: Graphic */}
        <div className="left-col">
          <div className="starburst">
            <div className="starburst-sub">銀河バイト</div>
            <div className="starburst-main">GALAXY<br/>FILTER</div>
          </div>
          <div className="oval-bg">
            <img src="/burger.png" alt="Funky Burger" className="burger-img" />
          </div>
          <div className="sparkle s1">✦</div>
          <div className="sparkle s2">✦</div>
          <div className="sparkle s3">✧</div>
        </div>

        {/* Right: App */}
        <div className="right-col">
          <h1 className="headline">BIGGER<br/>THAN YOU THOUGHT.<br/>SMALLER THAN<br/>YOU THINK</h1>

          <form className="input-row" onSubmit={handleAddTask}>
            <input
              type="text"
              placeholder="Enter task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>

          <div className="filter-row">
            {['All', 'Completed', 'Pending'].map((f) => (
              <button
                key={f}
                className={filter === f ? 'active' : ''}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <p className="summary">Total: {tasks.length} | Completed: {completedCount}</p>

          <ul className="task-list">
            {filteredTasks.map((task) => (
              <li
                key={task.id}
                className={`task-item ${task.completed ? 'done' : ''}`}
                onClick={() => toggleTask(task.id)}
              >
                <span className="chk"></span>
                <span className="txt">{task.text}</span>
                <button className="del" onClick={(e) => removeTask(task.id, e)}>&times;</button>
              </li>
            ))}
            {filteredTasks.length === 0 && (
              <li className="empty">Nothing here yet.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
