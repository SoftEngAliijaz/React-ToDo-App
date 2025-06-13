import React from "react";

const TodoItem = ({ todo, toggleComplete, startEdit, deleteTodo }) => {
  return (
    <>
      <li
        className={`flex items-center justify-between p-3 border rounded-md ${
          todo.completed
            ? "bg-red-50 border-red-500"
            : "bg-white border-gray-300"
        }`}
      >
        <div className="flex   items-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
          />
          <span
            className={`ml-3 ${
              todo.completed ? "line-through text-red-400" : "text-gray-700"
            }`}
          >
            {todo.text}
          </span>
        </div>
        <div className="space-x-2">
          <button
            onClick={() => startEdit(todo.id)}
            className="text-sm  text-blue-500 hover:text-blue-700"
          >
            Edit
          </button>
          <button
            onClick={() => {
              if (confirm("Are you sure you want to delete this?")) {
                deleteTodo(todo.id);
                alert("Deletion process is successfull");
              } else {
                alert("Deletion process is cancelled");
              }
            }}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};

export default TodoItem;
