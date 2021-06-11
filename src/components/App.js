import React, { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handlePress(e) {
    const todoObj = {
      completed: false,
      title: query,
    };
    if (e.key === "Enter") {
      setTodos([...todos, todoObj]);
      setQuery("");
    }
  }

  return (
    <div className="App">
      <h1>TODO</h1>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={query}
        onChange={handleChange}
        onKeyPress={handlePress}
      />
      {todos.map((todo) => (
        <>
          <div
            onClick={() => (todo.completed = !todo.completed)}
            className={todo.completed ? "completed" : ""}
          >
            {todo.title}
          </div>
        </>
      ))}
    </div>
  );
}

export default App;
