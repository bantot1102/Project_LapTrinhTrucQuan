import { useState } from "react";

export default function TaskItem(
  // params: { n: string }
  //   { n }: { n: string }
  { taskName, Des }: { taskName: string; Des: string }
) {
  const [done, setDone] = useState(false);

  return (
    <div className="flex flex-row items-stretch">
      <div className={done ? "line-through" : ""}>{taskName} {Des}</div>
      <button className="p-1 bg-green-400" onClick={() => setDone(true)}>
        V
      </button>
    </div>
  );
}
