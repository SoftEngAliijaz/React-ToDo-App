import React from "react";

const TodoStats = ({ todos }) => {
  const completedCount = todos.filter((todo) => todo.completed).length;
  return (
    <>
      <div className="underline mt-4 text-sm text-gray-500">
        {completedCount} of {todos.length} tasks are completed
      </div>
    </>
  );
};

export default TodoStats;
