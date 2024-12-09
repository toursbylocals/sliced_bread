import { Order } from "@/types/order";
import React from "react";

interface OrderCardProps {
  order: Order;
  keyProp?: string;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, keyProp }) => {
  return (
    <div
      key={keyProp}
      className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto"
      data-testid="order-card"
    >
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
        Order ID: {order.id}
      </h2>
      <div className="space-y-6">
        <div className="flex justify-between text-lg">
          <span className="font-medium text-gray-700">Name:</span>
          <span className="text-gray-900 font-semibold">
            {order.name || "Not Provided"}
          </span>
        </div>
        <div className="flex justify-between text-lg">
          <span className="font-medium text-gray-700">Quantity:</span>
          <span className="text-gray-900 font-semibold">
            {order.quantity || "Not Specified"}
          </span>
        </div>
        <div className="flex justify-between text-lg">
          <span className="font-medium text-gray-700">City:</span>
          <span className="text-gray-900 font-semibold">{order.city}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span className="font-medium text-gray-700">State:</span>
          <span className="text-gray-900 font-semibold">{order.state}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span className="font-medium text-gray-700">Country:</span>
          <span className="text-gray-900 font-semibold">{order.country}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span className="font-medium text-gray-700">Conf. #:</span>
          <span className="text-gray-900 font-semibold">
            {order.confirmationNumber}
          </span>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 text-lg"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
