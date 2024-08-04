"use client";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-white w-64 min-h-screen shadow-md">
      <div className="p-4 border-b">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div className="ml-4">
            <div className="text-lg font-bold">User name</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <button className="w-full text-left p-2 rounded hover:bg-gray-200">
          Add task
        </button>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded border"
          />
        </div>
        <nav className="mt-4">
          <ul>
            <li className="p-2 rounded hover:bg-gray-200">
              <a href="#">
                Inbox <span className="ml-2 text-gray-500">3</span>
              </a>
            </li>
            <li className="p-2 rounded hover:bg-gray-200">
              <a href="#">
                Today <span className="ml-2 text-gray-500">1</span>
              </a>
            </li>
            <li className="p-2 rounded hover:bg-gray-200">
              <a href="#">Upcoming</a>
            </li>
            <li className="p-2 rounded hover:bg-gray-200">
              <a href="#">Filters & Labels</a>
            </li>
          </ul>
        </nav>
        <div className="mt-4">
          <h2 className="text-lg font-bold">My Projects</h2>
          <ul>
            <li className="p-2 rounded hover:bg-gray-200">
              <a href="#">
                Home <span className="ml-2">🏡</span>
              </a>
            </li>
            <li className="p-2 rounded hover:bg-gray-200">
              <a href="#">
                My work <span className="ml-2">🎯</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <button className="w-full text-left p-2 rounded hover:bg-gray-200">
            Add a team
          </button>
        </div>
        <div className="mt-4">
          <button className="w-full text-left p-2 rounded hover:bg-gray-200">
            Browse templates
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
