'use client';
import React from 'react';
import HomeBanner from '@/components/organisms/HomeBanner';
import Description from '@/components/organisms/Description';
import OrderForm from '@/components/organisms/OrderForm';

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Description />
      <OrderForm />
    </>
  );
}
