"use server";

import { generateOrderId } from "@/lib/idGenerator";
import { OrderSchema } from "@/schemas/orderSchema";

export interface OrderFormServerState {
  orderId: string | null;
  message: "N/A" | "OK" | "Error";
  errors?: { [key: string]: string[] };
}

export async function placeOrder(
  _: OrderFormServerState,
  formData: FormData
): Promise<OrderFormServerState> {
  const validatedData = OrderSchema.safeParse({
    name: formData.get("name"),
    quantity: formData.get("quantity"),
    city: formData.get("city"),
    region: formData.get("region"),
    country: formData.get("country")
  });

  if (!validatedData.success) {
    return { orderId: null, message: "Error", errors: validatedData.error.flatten().fieldErrors };
  }

  const orderId = generateOrderId();

  const order = {
    orderId,
    ...validatedData.data
  };

  console.log(order);

  return { orderId, message: "OK" };
}
