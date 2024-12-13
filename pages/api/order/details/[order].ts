import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

export type OrderDetailsType = {
  city: string;
  country: string;
  customerName: string;
  numberOfDrinks: number;
  orderId: string;
  provinceState: string;
};

export type OrderDetailsResponseDataType = {
  data: OrderDetailsType;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrderDetailsResponseDataType>,
) {
  const { order } = req.query;

  const orderDetails = jwt.decode(order as string);

  res.status(200).json({
    data: orderDetails as OrderDetailsType,
    message: 'Successfully retrieved order.',
  });
}
