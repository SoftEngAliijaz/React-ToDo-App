import React from "react";

export default function TodoItem() {
  return (
    <li className="flex items-center justify-between p-3 bg-white border border-gray-300 rounded-md">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
        />
        <span className="ml-3 text-gray-700">Sample todo item</span>
      </div>
      <div className="space-x-2">
        <button className="text-sm text-blue-500 hover:text-blue-700">
          Edit
        </button>
        <button className="text-sm text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
    </li>
  );
}
