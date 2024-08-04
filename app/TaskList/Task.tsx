// components/TaskItem.js
import React from "react";

const TaskItem = () => {
  return (
    <div className="flex items-center p-4 bg-white shadow rounded-md mb-4">
      <div className="w-4 h-4 border-2 border-blue-500 rounded-full flex-shrink-0"></div>
      <div className="ml-4 flex-1">
        <p className="text-lg font-medium">Review my day and plan ahead</p>
        <div className="flex items-center text-gray-500 text-sm">
          <p className="mr-2">📅 26 Jul 17:00</p>
          <p className="mr-2">⏰</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-500">My work 🎯 / Routines 🔄</div>
      </div>
    </div>
  );
};

export default TaskItem;
