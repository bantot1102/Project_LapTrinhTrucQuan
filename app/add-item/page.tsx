"use client";
import Link from "next/link";
import { useState } from "react";
import TaskItem from "./task";

export type Item = {
    name: string;
    age: number;
}

type CountFnc = () => void;

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);
  const [count, setCount] = useState(0);

  const updateFunc = ()=> {setCount(count+1)}

  return (
    <div>
        Total click: {count}
      <button
        className="bg-blue-500 p-4"
        onClick={() => {
          setItems((prev) => [
            ...prev,
            { name: `task ${prev.length + 1}`, age: 3 },
          ]);
        }}
      >
        Add item
      </button>

      <div className="flex flex-col items-start min-w-28">
        {items.map((item) => (
          <Link href={'/item/' + item.name}>
            <div className="p-4 border-2">
              <TaskItem name={item.name} age={item.age} 
              updateFunc = {updateFunc}/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}