"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Spinner,
} from "@nextui-org/react";
import { GoPackage } from "react-icons/go";
import { Order } from "@/lib/interfaces/Order";
import Link from "next/link";
import { useIsClient } from "../../../hooks/useIsClient";

interface OrderConfirmationProps {
  order: Order;
}

const OrderConfirmation = ({ order }: OrderConfirmationProps) => {
  const isClient = useIsClient();
  const [orderURL, setOrderURL] = useState("");

  useEffect(() => {
    if (isClient) {
      // Compute URL only on the client side
      setOrderURL(`${window.location.origin}/orders/${order.id}`);
    }
  }, [isClient, order.id]);

  if (!isClient) {
    // Simulate SSR fallback
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="lg" />
        <p>[Order URL will be generated]</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="flex-col gap-3 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10">
            <GoPackage className="w-8 h-8 text-success" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">Order Confirmed!</h2>
            <p className="text-default-600">
              Thank you
              {order.name ? ` ${order.name}` : ` ${order.generatedName}`} for
              your order.
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="text-center">
          <div className="space-y-4">
            <div>
              <p className="font-medium">Order Details:</p>
              <p>Confirmation Number: {order.confirmationNumber}</p>
              <p>
                Quantity: {order.quantity || order.generatedQuantity} drinks
              </p>
              <p>
                Location: {order.city}, {order.stateProvince}, {order.country}
              </p>
            </div>
            <Divider />
            <div>
              <p className="text-sm text-default-500">
                View your order anytime at:
                <br />
                {orderURL ? (
                  <Link href={orderURL} className="text-primary underline">
                    {orderURL}
                  </Link>
                ) : (
                  <span>[Order URL will be generated]</span>
                )}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default OrderConfirmation;
