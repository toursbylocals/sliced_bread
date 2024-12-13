import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

export type OrderResponseData = {
  data: {
    token: string;
  };
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OrderResponseData>,
) {
  const token = jwt.sign(req.body, process.env.NEXT_PUBLIC_JWT_SECRET);

  res
    .status(200)
    .json({ data: { token }, message: 'Successfully ordered drinks.' });
}
