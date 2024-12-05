import React from "react";
import { UseFormReturn } from "react-hook-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { formSchema } from "@/lib/schemas";

interface OrderFormContainerProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  onSubmit: (values: z.infer<typeof formSchema>) => Promise<void>;
  isSubmitting: boolean;
}

const OrderFormContainer: React.FC<OrderFormContainerProps> = ({
  form,
  onSubmit,
  isSubmitting,
}) => (
  <div className="md:w-1/2">
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Place Your Order</h2>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name (optional)" {...field} />
              </FormControl>
              <FormDescription>
                If left blank, we'll assign you a unique anonymous name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Quantity (optional)"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                If not specified, we'll choose a surprise quantity for you!
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stateProvince"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="State/Province" {...field} />
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
              <FormControl>
                <Input placeholder="Country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Placing Order..." : "Get Your Elixir Now!"}
        </Button>

        <p className="text-sm text-center mt-4">
          By placing your order, you agree to our{" "}
          <Link href="/privacy-policy" className="text-blue-500 hover:underline">
            Privacy Policy
          </Link>.
        </p>
      </form>
    </Form>
  </div>
);

export default OrderFormContainer;
