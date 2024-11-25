"use client";

import { useForm } from "react-hook-form";
import { useActionState, useEffect, useState } from "react";
import { OrderFormServerState, placeOrder } from "@/app/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { OrderSchema } from "@/schemas/orderSchema";
import { MAX_ORDER_AMOUNT } from "@/app/consts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import RegionSelect from "@/components/ui/regionSelect";
import CountrySelect from "@/components/ui/countrySelect";
import Link from "next/link";

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

export const OrderForm = () => {
  // Hack to enable form usage without client-side JavaScript
  const [jsOnClient, setJsOnClient] = useState(false);

  useEffect(() => {
    setJsOnClient(true);
  }, []);
  // end

  const router = useRouter();
  const [serverState, formAction] = useActionState(placeOrder, initialOrderFormServerState);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
  const country = form.watch("country");

  useEffect(() => {
    setIsDialogOpen(Boolean(serverState.orderId));
  }, [serverState]);

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent automation-id="confirmation-modal">
          <DialogTitle className="sr-only">Order success dialog</DialogTitle>
          <DialogDescription className="sr-only">
            Your order number is {serverState.orderId}
          </DialogDescription>
          <h3 className="text-2xl mb-4">Order placed!</h3>
          <p className="text-xl mb-4">Your order number is {serverState.orderId}</p>
          <Button
            automation-id="go-to-details"
            onClick={() => {
              router.push(`/order-details/${serverState.orderId}`);
            }}
          >
            Go to order details
          </Button>
        </DialogContent>
      </Dialog>
      <Form {...form}>
        <p className="font-medium mb-2">
          {!jsOnClient && serverState.orderId ? (
            <>
              <span className="mr-2">Order created</span>
              <Link
                href={`/order-details/${serverState.orderId}`}
                className="text-primary hover:text-blue-400"
              >
                details
              </Link>
            </>
          ) : null}
        </p>
        <form action={formAction} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Name <span className="text-gray-400">(optional)</span>
                </FormLabel>
                <FormControl>
                  <Input className="mb-2" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <Input className="mb-2" type="number" min={1} max={MAX_ORDER_AMOUNT} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                {jsOnClient ? (
                  <>
                    <FormControl>
                      <CountrySelect
                        whitelist={["US", "CA", "BR"]}
                        priorityOptions={["CA", "US", "BR"]}
                        {...field}
                      ></CountrySelect>
                    </FormControl>
                    <Input className="hidden" type="text" {...field} />
                  </>
                ) : (
                  <Input type="text" {...field} />
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Region / Province</FormLabel>
                {jsOnClient ? (
                  <>
                    <FormControl>
                      <RegionSelect countryCode={country} {...field}></RegionSelect>
                    </FormControl>
                    <Input className="hidden" type="text" {...field} />
                  </>
                ) : (
                  <Input type="text" {...field} />
                )}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input className="mb-2" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-[0.8rem] font-medium text-destructive mb-2">
            {serverState.errors?._db ? serverState.errors._db : null}
          </p>
          <Button
            automation-id="submit-button"
            className="block  mb-2 w-full"
            type="submit"
            disabled={jsOnClient && !form.formState.isValid}
          >
            Hydrate Me!
          </Button>
          <p className="text-sm text-center">
            <Link href={"/policy"} target={"_blank"} className="text-gray-400 hover:text-gray-500">
              Privacy Policy
            </Link>
          </p>
        </form>
      </Form>
    </>
  );
};

export default OrderForm;
