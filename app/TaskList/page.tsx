'use client';
import { useState } from "react";
import TaskItem from "./Task";
const TaskList = () => {
const [items, setItems] = useState(["task 1", "task 2"])
const [taskName, setTaskName] = useState("")

  return (
    <div className="bg-white p-4 rounded shadow">
      <h1 className="text-2xl font-bold">Today</h1>
      <div className="mt-4 p-4 border rounded">
        <h2 className="text-xl font-bold">Add Task</h2>
        <input
          type="text"
          placeholder="Task name"
          className="w-full p-2 mt-2 rounded border"
        />
        <h2 className="text-xl font-bold">Description</h2>
        <input
          type="text"
          placeholder="Description"
          className="w-full p-2 mt-2 rounded border"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <div className="flex items-center mt-4">
          <button className="bg-blue-500 text-white p-2 rounded">Today</button>
          <button className="ml-2 p-2 border rounded">Priority</button>
          <button className="ml-2 p-2 border rounded">Reminders</button>
        </div>
        <div className="mt-4">
          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={() => setItems((pre) => [...pre, "new item"])}
          >
            Add task
          </button>
          <button className="bg-red-500 text-white p-2 rounded ml-2">
            Cancel
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        {items.map((item) => (
          // <TaskItem taskName={item} Des={""} />
          <TaskItem />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
