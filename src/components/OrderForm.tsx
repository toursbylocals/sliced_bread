"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { initialOrderFormServerState, placeOrder } from "@/app/actions";

interface OrderFormData {
  name: string;
  quantity: number;
  city: string;
  region: string;
  country: string;
}

export default function OrderForm() {
  const router = useRouter();
  const [serverState, formAction] = useActionState(placeOrder, initialOrderFormServerState);
  const form = useForm<OrderFormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      quantity: 1,
      city: "",
      region: "",
      country: ""
    }
  });

  useEffect(() => {
    if (serverState.message === "OK") {
      router.push(`/order-details/${serverState.orderId}`);
    }
  }, [serverState]);

  return (
    <>
      <form action={formAction}>
        <input className="block border-black border mb-2" type="text" {...form.register("name")} />
        <input
          className="block border-black border mb-2"
          type="number"
          {...form.register("quantity")}
        />
        <input className="block border-black border mb-2" type="text" {...form.register("city")} />
        <input
          className="block border-black border mb-2"
          type="text"
          {...form.register("region")}
        />
        <input
          className="block border-black border mb-2"
          type="text"
          {...form.register("country")}
        />

        <button className="block border-black border mb-2 p-2" type="submit">
          Hydrate Me!
        </button>
      </form>
    </>
  );
}
