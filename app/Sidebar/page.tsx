import React, { useState } from "react";
import { Task } from "../Dashboard/page"; // Import kiểu Task từ Dashboard

interface SidebarProps {
  taskCount: number;
  completedTaskCount: number;
  tasks: Task[];
  onSearch: (task: Task) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  taskCount,
  completedTaskCount,
  tasks,
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const foundTask = tasks.find(
      (task) =>
        task.taskName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (foundTask) {
      onSearch(foundTask);
    } else {
      alert("Không tìm thấy task nào phù hợp");
    }
  };
  return (
    <div className="bg-[#FCFAF8] w-64 min-h-screen shadow-md">
      <div className="p-4 border-b">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="ml-4">
            <div className="text-lg font-bold">VẠN KIỆT</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <button className="w-full text-left p-2 rounded hover:bg-[#FFEFE5]">
          Add task
        </button>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            className="w-full p-2 rounded border"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
        </div>
        <nav className="mt-4">
          <ul>
            <li className="p-2 rounded hover:bg-[#FFEFE5]">
              <a href="#">
                Today <span className="ml-2 text-gray-500">{taskCount}</span>
              </a>
            </li>
            <li className="p-2 rounded hover:bg-[#FFEFE5]">
              <a href="#">
                Complete{" "}
                <span className="ml-2 text-gray-500">{completedTaskCount}</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-4">
          <h2 className="text-lg font-bold">My Projects</h2>
          <ul>
            <li className="p-2 rounded hover:bg-[#FFEFE5]">
              <a href="#">
                Home <span className="ml-2">🏡</span>
              </a>
            </li>
            <li className="p-2 rounded hover:bg-[#FFEFE5]">
              <a href="#">
                My work <span className="ml-2">🎯</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
