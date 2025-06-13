import React from "react";
import { TodoForm, TodoItem, TodoStats } from "./components";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">TODO App</h1>

          <TodoForm />

          <ul className="space-y-2">
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </ul>

          <TodoStats />
        </div>
      </div>
    </>
  );
}

export default App;
