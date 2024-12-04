import React from "react";
import Link from "next/link";
import { urls } from "@/lib/urls";

export interface OrderDetailsViewProps {
  id: string;
  orderDetails: {
    name: string;
    quantity: number;
    city: string;
    stateProvince: string;
    country: string;
    createdAt: string;
  };
}

export default function OrderDetailsView({
  id,
  orderDetails,
}: OrderDetailsViewProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Order Details</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-xl mb-4">
          Order ID: <span className="font-semibold">{id}</span>
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Customer Name:</p>
            <p className="font-semibold">{orderDetails.name}</p>
          </div>
          <div>
            <p className="text-gray-600">Quantity:</p>
            <p className="font-semibold">{orderDetails.quantity}</p>
          </div>
          <div>
            <p className="text-gray-600">City:</p>
            <p className="font-semibold">{orderDetails.city}</p>
          </div>
          <div>
            <p className="text-gray-600">State/Province:</p>
            <p className="font-semibold">{orderDetails.stateProvince}</p>
          </div>
          <div>
            <p className="text-gray-600">Country:</p>
            <p className="font-semibold">{orderDetails.country}</p>
          </div>
          <div>
            <p className="text-gray-600">Order Date:</p>
            <p className="font-semibold">
              {new Date(orderDetails.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-green-600 font-semibold mb-2">
            Your Elixir of Eternity is on its way!
          </p>
          <p className="text-gray-600">
            Thank you for your order. We're excited for you to experience the
            magic!
          </p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <Link href={urls.home()} className="text-blue-500 hover:underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
