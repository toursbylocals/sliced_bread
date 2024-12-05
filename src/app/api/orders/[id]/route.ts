import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Order from "@/models/Order";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  await dbConnect();

  try {
    const {id} = await params
    const order = await Order.findById(id);

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch {
    return NextResponse.json(
      { error: "Error fetching order" },
      { status: 500 },
    );
  }
}
