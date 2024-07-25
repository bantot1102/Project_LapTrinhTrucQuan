import Image from "next/image";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";

export default function Home() {
  let sum = 0;
  for (let i = 0; i <= 10; i++) {
    sum += 1;
  }
  const message = `Sum from 1 to 10 = ${sum}`;
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <TaskList />
      </div>
    </div>
  );
}
