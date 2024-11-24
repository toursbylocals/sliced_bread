"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { OrderFormServerState, placeOrder } from "@/app/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderSchema } from "@/schemas/orderSchema";
import { MAX_ORDER_AMOUNT } from "@/app/consts";

interface OrderFormData {
  username: string;
  quantity: number;
  city: string;
  region: string;
  country: string;
}

export const initialOrderFormServerState: OrderFormServerState = {
  orderId: null,
  message: "N/A"
};

export default function OrderForm() {
  // Hack to enable form usage without client-side JavaScript
  const [jsOnClient, setJsOnClient] = useState(false);

  useEffect(() => {
    setJsOnClient(true);
  }, []);
  // end

  const router = useRouter();
  const [serverState, formAction] = useActionState(placeOrder, initialOrderFormServerState);
  const form = useForm<OrderFormData>({
    mode: "onChange",
    defaultValues: {
      username: "",
      quantity: 1,
      city: "",
      region: "",
      country: ""
    },
    resolver: zodResolver(OrderSchema),
    errors: serverState.errors
  });

  useEffect(() => {
    if (serverState.message === "OK") {
      router.push(`/order-details/${serverState.orderId}`);
    }
  }, [serverState]);

  return (
    <>
      <form action={formAction}>
        <input
          className="block border-black border mb-2"
          type="text"
          {...form.register("username")}
        />

        <input
          className="block border-black border mb-2"
          type="number"
          min={1}
          max={MAX_ORDER_AMOUNT}
          {...form.register("quantity")}
        />
        <p className="text-red-500 text-sm mb-2">
          {Array.isArray(form.formState.errors.quantity)
            ? form.formState.errors.quantity.map((msg, index) => (
                <span key={index}>
                  {msg}
                  <br />
                </span>
              ))
            : form.formState.errors.quantity?.message}
        </p>

        <input className="block border-black border mb-2" type="text" {...form.register("city")} />
        <p className="text-red-500 text-sm mb-2">
          {Array.isArray(form.formState.errors.city)
            ? form.formState.errors.city.map((msg, index) => (
                <span key={index}>
                  {msg}
                  <br />
                </span>
              ))
            : form.formState.errors.city?.message}
        </p>

        <input
          className="block border-black border mb-2"
          type="text"
          {...form.register("region")}
        />
        <p className="text-red-500 text-sm mb-2">
          {Array.isArray(form.formState.errors.region)
            ? form.formState.errors.region.map((msg, index) => (
                <span key={index}>
                  {msg}
                  <br />
                </span>
              ))
            : form.formState.errors.region?.message}
        </p>

        <input
          className="block border-black border mb-2"
          type="text"
          {...form.register("country")}
        />
        <p className="text-red-500 text-sm mb-2">
          {Array.isArray(form.formState.errors.country)
            ? form.formState.errors.country.map((msg, index) => (
                <span key={index}>
                  {msg}
                  <br />
                </span>
              ))
            : form.formState.errors.country?.message}
        </p>

        <p className="text-red-500 text-sm mb-2">
          {serverState.errors?._db ? serverState.errors._db : null}
        </p>
        <button
          className="block border-black border mb-2 p-2 disabled:bg-gray-200"
          type="submit"
          disabled={jsOnClient && !form.formState.isValid}
        >
          Hydrate Me!
        </button>
      </form>
    </>
  );
}
