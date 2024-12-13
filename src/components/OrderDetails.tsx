import type { FC } from 'react';

import type { ApiOrderDetails } from '@/api/order/details/[order]';
import Link from 'next/link';

export type OrderDetailsProps = {
  orderDetails: ApiOrderDetails | undefined;
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
      <div className="space-y-4 mb-8">
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
      <Link className="text-blue-600" href={'/'}>
        Go back to order form {'>'}
      </Link>
    </>
  );
};
