import { CreateOrderInput, OrderResponse } from "@/app/types/order";
import { useState } from "react";

const sendRequest = async (orderData: CreateOrderInput) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error("Failed to create order");
  }

  return response;
};

export const useCreateOrder = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createOrder = async (
    orderData: CreateOrderInput,
  ): Promise<OrderResponse | null> => {
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await sendRequest(orderData);
      const data: OrderResponse = await response.json();

      return data;
    } catch {
      setError("An error occurred while placing your order. Please try again.");

      return null;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { createOrder, isSubmitting, error };
};
