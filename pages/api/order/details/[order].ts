import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

export type ApiOrderDetails = {
  city: string;
  country: string;
  customerName: string;
  numberOfDrinks: number;
  orderId: string;
  provinceState: string;
};

export type ApiOrderDetailsResponseDataType = {
  data: ApiOrderDetails;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiOrderDetailsResponseDataType>,
) {
  const { order } = req.query;

  const orderDetails = jwt.decode(order as string);

  res.status(200).json({
    data: orderDetails as ApiOrderDetails,
    message: 'Successfully retrieved order.',
  });
}
