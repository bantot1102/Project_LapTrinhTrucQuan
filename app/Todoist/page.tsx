import Sidebar from "./Sidebar";
import TaskList from "./TaskList";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <TaskList />
      </div>``
    </div>
  );
}
