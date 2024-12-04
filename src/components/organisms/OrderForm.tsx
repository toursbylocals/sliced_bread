/* eslint-disable max-lines-per-function */

'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { GridContainer } from '../atoms/GridContainer';
import { Input } from '../atoms/Input';
import { Typography } from '../atoms/Typography';
import Link from 'next/link';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '../atoms/Button';
import { useState } from 'react';
import { useOrderPopupStore } from '@/stores/popup';
import { motion } from 'motion/react';

const ORDER_SCHEMA = z.object({
  name: z.string(),
  quantity: z.string().regex(/^[0-9]*$/, { message: '*Numbers only' }),
  city: z.string().min(1, { message: '*Required' }),
  state: z.string().min(1, { message: '*Required' }),
  country: z.string().min(1, { message: '*Required' }),
});

type OrderInputs = z.infer<typeof ORDER_SCHEMA>;

export default function OrderForm({
  createOrder,
}: {
  createOrder: ({
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
  }) => Promise<{
    name: string;
    quantity: number;
    city: string;
    state: string;
    country: string;
    id: string;
    created_at: Date;
  }>;
}) {
  const [loading, setLoading] = useState(false);
  const { open } = useOrderPopupStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OrderInputs>({
    defaultValues: {
      quantity: '1',
    },
    resolver: zodResolver(ORDER_SCHEMA),
  });

  // simulate real case for calling api
  const TIME_DELAY = 1000;
  const onSubmit: SubmitHandler<OrderInputs> = async (data) => {
    setLoading(true);
    const order = await createOrder({
      name: data.name || 'No Name',
      quantity: data.quantity || '1',
      city: data.city,
      state: data.state,
      country: data.country,
    });

    // simulate real case for calling api
    setTimeout(() => {
      open({
        id: order.id,
        title: 'Order has been placed!',
        description: `Remember your order id <br/><br/><strong>${order.id}</strong>`,
      });

      reset();

      setLoading(false);
    }, TIME_DELAY);
  };

  return (
    <section className="flex h-screen w-full flex-col justify-center bg-primary-300">
      <GridContainer className="relative py-16">
        <motion.div
          className="col-span-full mb-8 text-center"
          initial={{ opacity: 0, translateY: '-10%' }}
          whileInView={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <Typography variant="heading1" color="text-secondary-100">
            Taste it now
          </Typography>
        </motion.div>

        <motion.div
          className="col-span-full flex flex-col gap-8 lg:col-span-6 lg:col-start-2 xl:col-start-4"
          initial={{ opacity: 0, translateY: '-10%' }}
          whileInView={{
            opacity: 1,
            translateY: 0,
          }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <Link href="/privacy">
            <Typography variant="link" color="text-primary-100">
              How do we use your information?
            </Typography>
          </Link>

          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              placeholder="Your Name"
              errors={errors}
              {...register('name')}
            />

            <Input
              placeholder="Quantity"
              type="number"
              errors={errors}
              {...register('quantity')}
            />
            <Input
              placeholder="City"
              errors={errors}
              {...register('city', { required: true })}
            />
            <Input
              placeholder="State/Province"
              errors={errors}
              {...register('state', { required: true })}
            />
            <Input
              placeholder="Country"
              errors={errors}
              {...register('country', { required: true })}
            />

            <Button type="submit" loading={loading}>
              <span>Get it!</span>
            </Button>
          </form>
        </motion.div>
      </GridContainer>
    </section>
  );
}
