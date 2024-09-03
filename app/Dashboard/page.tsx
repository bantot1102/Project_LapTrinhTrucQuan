import { useState } from "react";
import Sidebar from "../Sidebar/page";
import TaskList from "../TaskList/page";

export interface Task {
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
    removeTask(index);
    setCompletedTasks(completedTasks + 1);
  };

  const updateTask = (index: number, newTask: Task) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? newTask : task));
    setTasks(updatedTasks);
  };

  const removeAllTasks = () => {
    setTasks([]);
  };

  const handleSearch = (task: Task) => {
    alert(
      `Task found:\nName: ${task.taskName}\nDescription: ${
        task.description
      }\nDate: ${task.date?.toLocaleString()}`
    );
  };

  return (
    <div className="flex">
      <Sidebar
        taskCount={tasks.length}
        completedTaskCount={completedTasks}
        tasks={tasks}
        onSearch={handleSearch}
      />
      <div className="flex-1 p-6">
        <TaskList
          tasks={tasks}
          addTask={addTask}
          removeTask={removeTask}
          markTaskComplete={markTaskComplete}
          updateTask={updateTask}
          removeAllTasks={removeAllTasks}
        />
      </div>
    </div>
  );
}
