import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import ProductDescription from "./ProductDescription";
import OrderFormContainer from "./OrderFormContainer";
import OrderConfirmationDialog from "./OrderConfirmationDialog";
import { z } from "zod";
import { formSchema } from "@/lib/schemas";

interface HomeViewProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
  onSubmit: (values: z.infer<typeof formSchema>) => Promise<void>;
  isDialogOpen: boolean;
  orderConfirmation: string | null;
  onCloseDialog: () => void;
  onViewOrderDetails: () => void;
  error: string | null;
  isSubmitting: boolean;
}

export default function HomeView({
  form,
  onSubmit,
  isDialogOpen,
  orderConfirmation,
  onCloseDialog,
  onViewOrderDetails,
  error,
  isSubmitting,
}: HomeViewProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-5xl font-bold mb-6 text-center">
        Elixir of Eternity
      </h1>
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div className="flex flex-col md:flex-row gap-8">
        <ProductDescription />
        <OrderFormContainer
          form={form}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
        />
      </div>

      <OrderConfirmationDialog
        isOpen={isDialogOpen}
        orderConfirmation={orderConfirmation}
        onClose={onCloseDialog}
        onViewOrderDetails={onViewOrderDetails}
      />
    </div>
  );
}
