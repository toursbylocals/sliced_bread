"use client";

import React from "react";
import { useEffect, useState } from "react";
import OrderCard from "./OrderCard";

interface OrderDetailsProps {
  orderId: string;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderId }) => {
  const [orderDetails, setOrderDetails] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const baseUrl =
          process.env.NODE_ENV === "production"
            ? process.env.PUBLIC_BASE_URL
            : "http://localhost:3000";

        const response = await fetch(`${baseUrl}/api/order/${orderId}`);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch order details: ${response.statusText}`
          );
        }

        const data = await response.json();
        setOrderDetails(data);
      } catch (error: any) {
        console.error("Error fetching order details:", error.message);
        setError(error.message || "An error occurred while fetching data.");
        setOrderDetails(null);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-red-500 font-bold text-2xl">{error}</p>
      </div>
    );
  }

  if (!orderDetails) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-2xl">Loading...</p>
      </div>
    );
  }

  return <OrderCard order={orderDetails} />;
};

export default OrderDetails;
