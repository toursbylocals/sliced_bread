"use server";

import { OrderSchema } from "@/schemas/orderSchema";
import { prisma } from "@/lib/prisma";
import { generateOrderId } from "@/lib/idGenerator";
import { getCountryAndRegionName } from "@/lib/country-region-matcher";

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
    username: formData.get("username"),
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
    ...validatedData.data,
    ...getCountryAndRegionName(validatedData.data.country, validatedData.data.region)
  };

  try {
    await prisma.order.create({
      data: order
    });

    return { orderId, message: "OK" };
  } catch (e: unknown) {
    let errorMessage = "Unknown error";

    if (e instanceof Error) {
      errorMessage = e.message;
    } else if (typeof e === "string") {
      errorMessage = e;
    }

    return { orderId: null, message: "Error", errors: { _db: [errorMessage] } };
  }
}
