import { generateOrderId } from "@/lib/idGenerator";

export interface OrderFormServerState {
  orderId: string | null;
  message: "N/A" | "OK";
}

export const initialOrderFormServerState: OrderFormServerState = {
  orderId: null,
  message: "N/A"
};

export async function placeOrder(
  _: OrderFormServerState,
  formData: FormData
): Promise<OrderFormServerState> {
  const orderId = generateOrderId();

  const order = {
    orderId,
    name: formData.get("name"),
    quantity: formData.get("quantity"),
    city: formData.get("city"),
    region: formData.get("region"),
    country: formData.get("country")
  };

  console.log(order);

  return { orderId, message: "OK" };
}
