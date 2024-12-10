"use client";

import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";

export default function OrderList() {
  const [orders, setOrders] = useState<any[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const baseUrl =
          process.env.NODE_ENV === "production"
            ? process.env.PUBLIC_BASE_URL
            : "http://localhost:3000";

        const response = await fetch(`${baseUrl}/api/order/all`);

        if (!response.ok) {
          if (response.status === 404) {
            setMessage("No orders found.");
            return;
          }
          throw new Error(`Failed to fetch orders: ${response.statusText}`);
        }

        const data = await response.json();

        setOrders(data);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      }
    };

    fetchOrders();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (message) {
    return <p className="text-gray-600">{message}</p>;
  }

  if (orders.length === 0) {
    return <p className="text-gray-600">No orders available.</p>;
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
