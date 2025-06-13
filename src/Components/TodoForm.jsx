import React from "react";

const TodoForm = () => {
  return (
    <>
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Add a new task..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add
        </button>
      </div>
    </>
  );
};

export default TodoForm;
