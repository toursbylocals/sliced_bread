import { readOrdersFromFile } from "@/utils/fileStorage";

export async function GET(req: Request) {
  const orders = readOrdersFromFile();

  if (Object.keys(orders).length === 0) {
    return new Response(JSON.stringify({ error: "No orders found" }), {
      status: 404,
    });
  }

  const allOrders = Object.values(orders);
  return new Response(JSON.stringify(allOrders), { status: 200 });
}
