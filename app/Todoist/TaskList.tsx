const TaskList = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h1 className="text-2xl font-bold">Today</h1>
      <ul className="mt-4">
        <li className="p-2 border-b flex justify-between">
          <span>Công việc 1</span>
          <span>Làm công việc 1</span>
        </li>
      </ul>
      <div className="mt-4 p-4 border rounded">
        <h2 className="text-xl font-bold">Add Task</h2>
        <input
          type="text"
          placeholder="Task name"
          className="w-full p-2 mt-2 rounded border"
        />
        <div className="flex items-center mt-4">
          <button className="bg-blue-500 text-white p-2 rounded">Today</button>
          <button className="ml-2 p-2 border rounded">Priority</button>
          <button className="ml-2 p-2 border rounded">Reminders</button>
        </div>
        <div className="mt-4">
          <button className="bg-gray-500 text-white p-2 rounded">Cancel</button>
          <button className="bg-red-500 text-white p-2 rounded ml-2">
            Add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
