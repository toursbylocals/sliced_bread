"use client";

import { useParams } from "next/navigation";
import OrderDetails from "@/components/OrderDetails";

export default function OrderPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!id) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-500 font-bold text-xl">
          Error: Order ID not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-900">
        Order Details
      </h1>
      <div className="w-full max-w-4xl">
        <OrderDetails orderId={id} />
      </div>
    </div>
  );
}
