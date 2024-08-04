import { useState } from "react";

export default function TaskItem(
  // params: { n: string }
  //   { n }: { n: string }
  { name, age , updateFunc}: { name: string; age: number; updateFunc: ()=> void }
) {
  const [done, setDone] = useState(false);

  return (
    <div className="flex flex-row items-stretch">
      <div className={done ? "line-through" : ""}>{name}</div>
      <button className="p-1 bg-green-400" onClick={() => {setDone(true); updateFunc()}}>
        V
      </button>
    </div>
  );
}
