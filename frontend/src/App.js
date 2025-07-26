import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const gettodos = async() => {
      const response = await fetch(
        `http://localhost:5000/api/todos`,
        { method: "GET" },
      );
      const todos = await response.json();
      setTodos(todos);
    };

    gettodos();

  }, []);

  return (
    <div className="App">
      <h1>Task Manager</h1>

      <div>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <div key = {todo._id} className = "todos">
                <p>{todo.task}</p>
                <p>{todo.status ? "completed" : "pending" }</p>
              </div>
            ))
          ):(
            <div>
              <p>No todos found</p>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
