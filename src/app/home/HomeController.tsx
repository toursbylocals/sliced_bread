"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import HomeView from "./HomeView";
import { useCreateOrder } from "@/hooks/useCreateOrder";
import { urls } from "@/lib/urls";
import { formSchema } from "@/lib/schemas";

export default function HomeController() {
  const [orderConfirmation, setOrderConfirmation] = useState<string | null>(
    null,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      quantity: "",
      city: "",
      stateProvince: "",
      country: "",
    },
  });

  const { createOrder, isSubmitting, error } = useCreateOrder();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const processedValues = {
      ...values,
      name: values.name,
      quantity: values.quantity ? parseInt(values.quantity, 10) : null,
    };

    const orderResponse = await createOrder(processedValues);

    if (orderResponse) {
      setOrderConfirmation(orderResponse.id);
      setIsDialogOpen(true);
    }
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    form.reset();
  };

  const handleViewOrderDetails = () => {
    if (orderConfirmation) {
      router.push(urls.orders.details(orderConfirmation));
    }
  };

  return (
    <HomeView
      form={form}
      onSubmit={onSubmit}
      isDialogOpen={isDialogOpen}
      orderConfirmation={orderConfirmation}
      error={error}
      isSubmitting={isSubmitting}
      onViewOrderDetails={handleViewOrderDetails}
      onCloseDialog={handleCloseDialog}
    />
  );
}
