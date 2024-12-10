import { readOrdersFromFile, writeOrdersToFile } from "@/utils/fileStorage";
import { Order } from "@/types/order";

export async function POST(req: Request) {
  const body = await req.json();
  const id = Math.random().toString(36).substr(2, 9);
  const confirmationNumber = `CONF-${id.toUpperCase()}`;

  const order: Order = {
    id,
    name: body.name,
    quantity: body.quantity,
    city: body.city,
    state: body.state,
    country: body.country,
    confirmationNumber,
  };

  const orders = readOrdersFromFile();

  orders[id] = order;

  writeOrdersToFile(orders);

  return new Response(JSON.stringify({ id }), { status: 201 });
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id) {
    return new Response(JSON.stringify({ error: "Order ID is required" }), {
      status: 400,
    });
  }

  const orders = readOrdersFromFile();
  const order = orders[id];
  if (!order) {
    return new Response(JSON.stringify({ error: "Order not found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(order), { status: 200 });
}
