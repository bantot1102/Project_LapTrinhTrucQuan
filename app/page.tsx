import Image from "next/image";

export default function Home() {
  let sum = 0;
  for (let i = 0; i <= 10; i++){
    sum += 1;
  }
  const message = `Sum from 1 to 10 = ${sum}`
  return (
    <div className="text-red-500">
      <h1>Welcome to the app!</h1>
      <p>{message}</p>
    </div>
  );
}
