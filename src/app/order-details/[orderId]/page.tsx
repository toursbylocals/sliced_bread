import React from "react";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;

  if (!orderId) {
    redirect("/404");
  }

  return (
    <>
      <section className="container px-4 mx-auto">
        <h2>Order Details</h2>
        <p className="leading-6">OrderId: {orderId}</p>
      </section>
    </>
  );
}
