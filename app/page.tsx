'use client';

import Sidebar from "./Sidebar/page";
import TaskList from "./TaskList/page";
export default function Page() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <TaskList />
        </div>
      </div>
    </>
  );
}