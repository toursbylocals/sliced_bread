import type { FC } from 'react';

import type { OrderDetailsType } from '@/api/order/details/[order]';

export type OrderDetailsProps = {
  orderDetails: OrderDetailsType | undefined;
};

export const OrderDetails: FC<OrderDetailsProps> = ({ orderDetails }) => {
  if (!orderDetails) {
    return <>Order not found.</>;
  }

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Order Summary
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Order ID:</span>
          <span className="text-gray-800">{orderDetails.orderId}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Customer Name:</span>
          <span className="text-gray-800">{orderDetails.customerName}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">City:</span>
          <span className="text-gray-800">{orderDetails.city}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Province/State:</span>
          <span className="text-gray-800">{orderDetails.provinceState}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Country:</span>
          <span className="text-gray-800">{orderDetails.country}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold text-gray-600">Number of Drinks:</span>
          <span className="text-gray-800">{orderDetails.numberOfDrinks}</span>
        </div>
      </div>
    </>
  );
};
