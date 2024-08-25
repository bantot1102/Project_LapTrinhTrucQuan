import React from "react";

interface TaskItemProps {
  taskName: string;
  description: string;
  date?: Date; // Có thể là Date hoặc không có
  onRemove: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  taskName,
  description,
  date,
  onRemove,
}) => {
  const formatDate = (date?: Date) => {
    if (!date) return "";
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex items-center p-4 bg-white shadow rounded-md mb-4">
      <input
        type="checkbox"
        className="w-6 h-6 rounded-full border-2 border-gray-300 mr-2 appearance-none checked:bg-blue-500 checked:border-transparent focus:outline-none"
        onChange={onRemove}
      />
      <div className="ml-4 flex-1">
        <p className="text-lg font-medium">{taskName}</p>
        <div className="text-gray-500 text-sm">
          <p>{description}</p>
          {date && <p>{formatDate(date)}</p>}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-500">My work 🎯 / Routines 🔄</div>
      </div>
    </div>
  );
};

export default TaskItem;
