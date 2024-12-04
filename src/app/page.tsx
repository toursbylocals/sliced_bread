import React from 'react';
import HomeBanner from '@/components/organisms/HomeBanner';
import Description from '@/components/organisms/HomeDescription';
import OrderForm from '@/components/organisms/OrderForm';
import { createOrder } from './api/order';

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Description />
      <OrderForm createOrder={createOrder} />
    </>
  );
}
