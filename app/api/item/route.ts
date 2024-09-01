import { kv } from "@vercel/kv";

export async function POST(request: Request) {
  const params = await request.json();
  console.log(params);
  kv.set("items", params.items);
  return Response.json("SUCCESS");
}

export async function GET() {
  const items = await kv.get("items");
  return Response.json(items);
}
