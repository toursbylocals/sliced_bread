'use client';
import type { OrderDetailsType } from '@/api/order/details/[order]';
import { OrderDetails } from '@/components/OrderDetails';
import { OrderForm } from '@/components/OrderForm';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const pathName = usePathname();
  const urlSearchParams = useSearchParams();

  const [orderDetails, setOrderDetails] = useState<OrderDetailsType>();

  const updateToken = (token: string) => {
    const searchParams = new URLSearchParams();
    searchParams.set('token', token);
    if (pathName) {
      router.push(`${pathName}?${searchParams}`);
    }
  };

  const token = urlSearchParams?.get('token');

  useEffect(() => {
    if (token) {
      fetch(`/api/order/details/${token}`)
        .then((res) => res.json())
        .then((data) => {
          setOrderDetails(data.data);
        });
    }
  }, [token]);

  if (orderDetails || token) {
    return <OrderDetails orderDetails={orderDetails} />;
  }

  return <OrderForm updateToken={updateToken} />;
}
