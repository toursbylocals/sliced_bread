"use client";

import OrderList from "@/components/OrderList";

export default function AllOrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-900">Order List</h1>
      <div className="w-full max-w-4xl">
        <OrderList />
      </div>
    </div>
  );
}
