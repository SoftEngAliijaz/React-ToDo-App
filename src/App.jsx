import React, { useState } from "react";
import useLocalStorage from "./Hooks/useLocalStorage";
import { TodoForm, TodoItem, TodoStats } from "./Components";

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const addTodo = () => {
    if (input.trim() === "") return;

    if (editId) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: input,
          completed: false,
        },
      ]);
    }
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setInput(todoToEdit.text);
    setEditId(id);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">TODO App</h1>

          <TodoForm
            input={input}
            setInput={setInput}
            addTodo={addTodo}
            editId={editId}
          />

          <ul className="space-y-2">
            {todos.length === 0 ? (
              <li className="text-gray-500 text-center py-4">
                No tasks yet. Add one above!
              </li>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggleComplete={toggleComplete}
                  startEdit={startEdit}
                  deleteTodo={deleteTodo}
                />
              ))
            )}
          </ul>

          {todos.length > 0 && <TodoStats todos={todos} />}
        </div>
      </div>
    </>
  );
}
