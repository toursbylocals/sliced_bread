'use server';

import { prisma } from '@/lib/prisma';

const generateRandomString = (length: number): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const result = new Array(length);
  const charactersLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * charactersLength);

    result[i] = characters[randomIndex];
  }

  return result.join('');
};

const generateOrderId = async (callback: (orderId: string) => void) => {
  const prefix = `CB-`;
  const orderSize = 6;

  const orderId = generateRandomString(orderSize);

  const isDuplicate = await prisma.order.findUnique({
    where: {
      id: prefix + orderId,
    },
  });

  if (isDuplicate) {
    generateOrderId(callback);
  } else {
    callback(prefix + orderId);
  }
};

export const createOrder = async ({
  name,
  quantity,
  city,
  state,
  country,
}: {
  name: string;
  quantity: string;
  city: string;
  state: string;
  country: string;
}): Promise<{
  name: string;
  quantity: number;
  city: string;
  state: string;
  country: string;
  id: string;
  created_at: Date;
}> =>
  new Promise((resolve) => {
    generateOrderId(async (orderId) => {
      resolve(
        await prisma.order.create({
          data: {
            id: orderId,
            name,
            quantity: Number(quantity),
            city,
            state,
            country,
          },
        }),
      );
    });
  });

export const getOrder = async ({ id }: { id: string }) =>
  // insert into database to product a order
  prisma.order.findUnique({
    where: {
      id,
    },
  });
