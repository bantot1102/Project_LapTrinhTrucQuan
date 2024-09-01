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
  const [completedTasks, setCompletedTasks] = useState<number>(0);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const markTaskComplete = (index: number) => {
    removeTask(index); // Xóa task khỏi danh sách
    setCompletedTasks(completedTasks + 1); // Tăng số lượng task hoàn thành
  };

  const removeAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="flex">
      <Sidebar taskCount={tasks.length} completedTaskCount={completedTasks} />
      <div className="flex-1 p-6">
        <TaskList
          tasks={tasks}
          addTask={addTask}
          removeTask={removeTask}
          markTaskComplete={markTaskComplete}
          removeAllTasks={removeAllTasks}
        />
      </div>
    </div>
  );
}
