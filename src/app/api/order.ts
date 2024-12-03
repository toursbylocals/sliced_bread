'use server';
import { prisma } from '@/lib/prisma';

const generateRandomString = (length: number): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const result = new Array(length);
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result[i] = characters[randomIndex];
  }

  return result.join('');
};

const generateOrderId = async (): Promise<string> => {
  const prefix = `CB-`;

  while (true) {
    const orderId = generateRandomString(6);

    if (
      await prisma.order.findUnique({
        where: {
          id: prefix + orderId,
        },
      })
    ) {
      continue;
    }

    return prefix + orderId;
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
}) => {
  try {
    // insert into database to product a order
    return await prisma.order.create({
      data: {
        id: await generateOrderId(),
        name,
        quantity: +quantity,
        city,
        state,
        country,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const getOrder = async ({ id }: { id: string }) => {
  try {
    // insert into database to product a order
    return await prisma.order.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    throw error;
  }
};
