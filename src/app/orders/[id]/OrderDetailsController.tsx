"use client";

import React from "react";
import OrderDetailsView from "./OrderDetailsView";
import useOrderDetails from "@/hooks/useOrderDetails";

export default function OrderDetailsController({ id }: { id: string }) {
  const { orderDetails, isLoading, error } = useOrderDetails(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !orderDetails) {
    return <div>Error: {error}</div>;
  }

  return <OrderDetailsView id={id} orderDetails={orderDetails} />;
}
