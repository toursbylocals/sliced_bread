import { useEffect, useState } from "react";
import { OrderDetailsViewProps } from "@/app/orders/[id]/OrderDetailsView";

async function getOrderDetails(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch order");
  }

  return res.json();
}

export default function useOrderDetails(id: string) {
  const [orderDetails, setOrderDetails] = useState<
    OrderDetailsViewProps["orderDetails"] | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrderDetails() {
      try {
        const details = await getOrderDetails(id);

        setOrderDetails(details);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchOrderDetails();
  }, [id]);

  return { orderDetails, isLoading, error };
}
