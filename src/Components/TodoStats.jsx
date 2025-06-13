import React from "react";

const TodoStats = ({ todos }) => {
  const completedCount = todos.filter((todo) => todo.completed).length;
  return (
    <>
      <div className="mt-4 text-sm text-gray-500">
        {completedCount} of {todos.length} tasks completed
      </div>
    </>
  );
};

export default TodoStats;
