import React, { useState } from "react";

interface TaskItemProps {
  taskName: string;
  description: string;
  date?: Date;
  onComplete: () => void;
  onUpdate: (newTask: {
    taskName: string;
    description: string;
    date?: Date;
  }) => void; // Thêm props onUpdate để cập nhật task
}

const TaskItem: React.FC<TaskItemProps> = ({
  taskName,
  description,
  date,
  onComplete,
  onUpdate,
}) => {
  const [clickCount, setClickCount] = useState(0);
  const [isEditing, setIsEditing] = useState(false); // State để theo dõi việc sửa task
  const [editedTaskName, setEditedTaskName] = useState(taskName);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedDate, setEditedDate] = useState(date);

  const handleClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount >= 2) {
        onComplete();
        return 0;
      }
      return newCount;
    });
  };

  const handleSave = () => {
    onUpdate({
      taskName: editedTaskName,
      description: editedDescription,
      date: editedDate,
    });
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col p-4 bg-white border-2  shadow rounded-md mt-6">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
            className="w-full p-2 mb-2 rounded border"
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="w-full p-2 mb-2 rounded border"
          />
          <input
            type="date"
            value={editedDate ? editedDate.toISOString().split("T")[0] : ""}
            onChange={(e) =>
              setEditedDate(
                e.target.value ? new Date(e.target.value) : undefined
              )
            }
            className="w-full p-2 mb-2 rounded border"
          />
          <div className="m-2">
            <button
              className="bg-green-500 text-white p-2 rounded w-24"
              onClick={handleSave}
            >
              Lưu
            </button>
            <button
              className="bg-gray-500 text-white p-2 rounded ml-2 w-24"
              onClick={() => setIsEditing(false)}
            >
              Hủy
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center">
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
          </div>
          <div className="mt-4">
            <button
              className="bg-[#f9e427] text-black p-2 rounded"
              onClick={() => setIsEditing(true)}
            >
              Chỉnh sửa
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
