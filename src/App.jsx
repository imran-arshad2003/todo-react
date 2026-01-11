import { useState } from "react";
import "./App.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, todo.trim()]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-purple-600">
          Todo App
        </h1>

        {/* Input Section */}
        <div className="flex gap-2 mt-6">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a todo"
            className="flex-1 border-2 border-gray-300 px-4 py-2 rounded-lg outline-none focus:border-purple-500"
          />
          <button
            onClick={addTodo}
            className="bg-purple-500 hover:bg-purple-700 text-white px-5 rounded-lg font-semibold"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="mt-6 space-y-3">
          {todos.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg"
            >
              <span className="text-gray-700">{item}</span>
              <button
                onClick={() => deleteTodo(index)}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-center text-gray-400 mt-6">
            No todos yet 
          </p>
        )}
      </div>
    </div>
  );
}
