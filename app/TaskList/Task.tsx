import React, { useState } from "react";
import Link from "next/link";
interface TaskItemProps {
  taskName: string;
  description: string;
  date?: Date;
  onRemove: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  taskName,
  description,
  date,
  onRemove,
}) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount >= 2) {
        onRemove(); // Xóa task nếu nhấp 2 lần
        return 0; // Reset số lần nhấp để không xóa lần tiếp theo
      }
      return newCount;
    });
  };

  return (
    <div className="flex items-center p-4 bg-white shadow rounded-md mb-4">
      <input
        type="checkbox"
        className="w-6 h-6 rounded-full border-2 border-gray-300 mr-2 appearance-none checked:bg-blue-500 checked:border-transparent focus:outline-none"
        onChange={handleClick}
      />
      <div className="ml-4 flex-1">
        <p className="text-lg font-medium">{taskName}</p>
        <div className="text-gray-500 text-sm">
          <p>{description}</p>
          {date && (
            <p>
              {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-sm text-gray-500">
          My work 🎯 / Routines 🔄
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
