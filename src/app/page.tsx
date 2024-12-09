"use client";

import React, { useState } from "react";
import Image from "next/image";
import OrderForm from "@/components/OrderForm";
import Modal from "@/components/Modal";
import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = async (formData: any) => {
    try {
      const response = await fetch(`/api/order/temp-id`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to place order: ${response.statusText}`);
      }

      const { id } = await response.json();
      window.location.href = `/order/${id}`;
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center px-6">
      <div className="max-w-5xl text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
          Heaven&apos;s Elixir
        </h1>
        <p className="text-lg text-gray-700 font-bold font-serif">
          A drink like no other, crafted to perfection, delivering unmatched
          flavor and refreshment. Heaven&apos;s Elixir is not just a beverage,
          it&apos;s an experience.
        </p>
      </div>

      <div>
        <ImageCarousel />
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 text-lg"
      >
        Place Your Order
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-gray-900 w-full max-w-xl bg-white rounded-xl p-12">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
            Place Your Order
          </h2>
          <OrderForm onSubmit={handleFormSubmit} />
        </div>
      </Modal>
    </div>
  );
}
