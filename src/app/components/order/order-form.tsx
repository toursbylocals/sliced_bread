"use client";

import { FormEvent, useState } from "react";
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { Order } from "@/lib/interfaces/Order";
import { OrderFormData } from "@/lib/interfaces/OrderFormData";
import { generateOrderDetails } from "@/lib/utils/generateOrderDetails";
import OrderFormFields from "./order-form-fields";
import OrderConfirmation from "./order-confirmation";
import { useIsClient } from "@/hooks/useIsClient";

const OrderForm = () => {
  // create state and setter functions for order state
  const [order, setOrder] = useState<Order | null>(null);
  const isClient = useIsClient();

  // Define fields dynamically
  const fields = [
    {
      label: "Your Name (Optional)",
      name: "name",
      placeholder: "How should we address you?",
    },
    {
      label: "Quantity (Optional)",
      name: "quantity",
      type: "number",
      min: 1,
      placeholder: "How many would you like?",
    },
    {
      label: "City",
      name: "city",
      isRequired: true,
      placeholder: "Enter your city",
    },
    {
      label: "State/Province",
      name: "stateProvince",
      isRequired: true,
      placeholder: "Enter your state or province",
    },
    {
      label: "Country",
      name: "country",
      isRequired: true,
      placeholder: "Enter your country",
    },
  ];

  // handler to work on form submission

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // initiate prevent default to handle case of default form submission

    event.preventDefault();

    // set up form data object to collect information entered in the form

    const formData = new FormData(event.currentTarget);

    // get order data from form using formData

    const orderData: OrderFormData = {
      name: (formData.get("name") as string) || undefined,
      quantity: formData.get("quantity")
        ? Number(formData.get("quantity"))
        : undefined,
      city: formData.get("city") as string,
      stateProvince: formData.get("stateProvince") as string,
      country: formData.get("country") as string,
    };

    // if there is an error, return as a failsafe in the event the nextui validation fails,however it is sufficient;
    if (!orderData.city || !orderData.stateProvince || !orderData.country) {
      return;
    }

    // generate a new order using the generate orderDetails utility function
    const newOrder = generateOrderDetails(orderData);
    // set state tothe generated order

    setOrder(newOrder);

    // store in local storage

    localStorage.setItem(`order-${newOrder.id}`, JSON.stringify(newOrder));
  };

  if (order) {
    return <OrderConfirmation order={order} />;
  }
  // Don't render the form during SSR
  if (!isClient) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Experience Jarritos</h2>
          <p className="mt-2 text-default-600">
            No payment required - just tell us where to send your drinks
          </p>
        </div>
        <Card>
          <CardHeader className="flex-col gap-3">
            <h3 className="text-xl font-semibold">Make an Order</h3>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-6">
              <OrderFormFields fields={fields} />
              <Button
                type="submit"
                // color="primary"
                size="lg"
                className="w-full bg-black text-white"
                endContent={<BiSolidRightArrowCircle className="h-4 w-4" />}
              >
                Get it!
              </Button>
              <p className="text-center text-sm text-default-500">
                <span className="text-red-400">*</span> Required fields
              </p>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;
