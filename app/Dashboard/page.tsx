import { useState } from "react";
import Sidebar from "../Sidebar/page";
import TaskList from "../TaskList/page";

interface Task {
  taskName: string;
  description: string;
  date?: Date;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="flex">
      <Sidebar taskCount={tasks.length} />
      <div className="flex-1 p-6">
        <TaskList tasks={tasks} addTask={addTask} removeTask={removeTask} />
      </div>
    </div>
  );
}
