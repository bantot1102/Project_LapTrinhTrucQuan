"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const param: { name: string } = useParams();
  return <div>{decodeURIComponent(param.name)}</div>;
}
