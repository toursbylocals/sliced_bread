"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";
import '../../app/i18n';
import { Suspense } from 'react'

interface OrderDetails {
  _id: string;
  name: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
  product: string;
  quantity: number;
}

function Order() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
 
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    async function fetchOrder() {
      if (orderId) {
        const res = await fetch(`/api/orders?orderId=${orderId}`);
        const data = await res.json();
        
        setOrderDetails(data);
      }
    }
    fetchOrder();
  }, [orderId]);

  if (!orderDetails) return <p>Loading...</p>;
  
  return (
    <section className="flex items-center justify-center h-screen">
    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Request details</h1>
      <p>Order id: {orderDetails._id}</p>
      <p>Name: {orderDetails.name}</p>
      <p>City: {orderDetails.address.city}</p>
      <p>State/Province: {orderDetails.address.state}</p>
      <p>Country: {orderDetails.address.country}</p>
      <p>Quantity: {orderDetails.quantity}</p>
    </div>
  </section>
  
  );
}

export default function Home() {  
  return (
    <Suspense>
     <Order/>
   </Suspense>    
  );
}
