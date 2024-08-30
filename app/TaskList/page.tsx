import React, { useState } from "react";
import CustomDatePicker from "../CustomDatePicker/page";
import TaskItem from "./Task";
import Link from "next/link";

interface Task {
  taskName: string;
  description: string;
  date?: Date;
}

interface TaskListProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, addTask, removeTask }) => {
  const [taskName, setTaskName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const addItem = () => {
    if (taskName.trim() && description.trim()) {
      const dateToUse = selectedDate ?? new Date();
      addTask({ taskName, description, date: dateToUse });
      setTaskName("");
      setDescription("");
      setSelectedDate(null);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow relative">
      <h1 className="text-2xl font-bold">Today</h1>
      <div className="mt-4 p-4 border rounded">
        <h2 className="text-xl font-bold">Add Task</h2>
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          className="w-full p-2 mt-2 rounded border"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <h2 className="text-xl font-bold">Description</h2>
        <input
          type="text"
          placeholder="Description"
          value={description}
          className="w-full p-2 mt-2 rounded border"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="mt-4">
          <CustomDatePicker
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </div>
        <div className="mt-4">
          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={addItem}
          >
            Add task
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded ml-2"
            onClick={() => {
              setTaskName("");
              setDescription("");
              setSelectedDate(null);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        {tasks.map((item, index) => (
          <TaskItem
            key={index}
            taskName={item.taskName}
            description={item.description}
            date={item.date}
            onRemove={() => removeTask(index)}
          />
          // <Link href={"/item/" + item.taskName + item.description + item.date}>
          //   <div>
          //     <TaskItem
          //       key={index}
          //       taskName={item.taskName}
          //       description={item.description}
          //       date={item.date}
          //       onRemove={() => removeTask(index)}
          //     />
          //   </div>
          // </Link>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
