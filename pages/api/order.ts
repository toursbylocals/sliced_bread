import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

export type ApiOrderResponseData = {
  data: {
    token: string;
  };
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiOrderResponseData>,
) {
  const token = jwt.sign(req.body, process.env.JWT_SECRET);

  res
    .status(200)
    .json({ data: { token }, message: 'Successfully ordered drinks.' });
}
