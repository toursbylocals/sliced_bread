import { NextResponse } from "next/server";
import { z } from "zod";

import dbConnect from "../../../lib/mongoose";
import Order, { IOrder } from "../../../models/Order";
import { generateRandomName, generateRandomQuantity } from "../../../lib/utils";

const MAX_RANDOM_NAME_NUMBER = 1000;
const MIN_RANDOM_QUANTITY = 1;
const MAX_RANDOM_QUANTITY = 10;

const orderSchema = z.object({
  name: z.string().optional().nullable(),
  quantity: z.number().optional().nullable(),
  city: z.string().min(1, "City is required"),
  stateProvince: z.string().min(1, "State/Province is required"),
  country: z.string().min(1, "Country is required"),
});

type OrderInput = z.infer<typeof orderSchema>;

function mapOrderToResponse(order: IOrder) {
  return {
    id: order._id.toString(),
    name: order.name,
    quantity: order.quantity,
    city: order.city,
    stateProvince: order.stateProvince,
    country: order.country,
    createdAt: order.createdAt,
  };
}

export async function POST(req: Request) {
  await dbConnect();

  try {
    const body: OrderInput = await req.json();
    const validatedData = orderSchema.parse(body);
    const order = createOrder(validatedData);
    const savedOrder = await order.save();
    const response = mapOrderToResponse(savedOrder);

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return handleError(error);
  }
}

function createOrder(validatedData: OrderInput) {
  return new Order({
    name:
      validatedData.name && validatedData.name.length > 0
        ? validatedData.name
        : generateRandomName(MAX_RANDOM_NAME_NUMBER),
    quantity:
      (validatedData.quantity && validatedData.quantity !== 0) ??
      generateRandomQuantity(MIN_RANDOM_QUANTITY, MAX_RANDOM_QUANTITY),
    city: validatedData.city,
    stateProvince: validatedData.stateProvince,
    country: validatedData.country,
  });
}

function handleError(error: unknown) {
  if (error instanceof z.ZodError) {
    return NextResponse.json(
      { error: "Invalid input", details: error.errors },
      { status: 400 },
    );
  }

  return NextResponse.json(
    { error: "Failed to create order" },
    { status: 500 },
  );
}
