import React from "react";
import OrderForm from "@/components/OrderForm";
import HeroBlock from "@/components/HeroBlock";

export default function Home() {
  return (
    <>
      <section className="container px-4 mx-auto max-w-[1200px] mt-16">
        <HeroBlock />
      </section>
      <section className="flex justify-center items-center min-h-[900px] order-section">
        <div className="min-w-[400px] bg-background px-8 py-4 rounded">
          <h2 className="text-2xl font-bold mb-4">Your Journey Starts Here</h2>
          <OrderForm />
        </div>
      </section>
    </>
  );
}
