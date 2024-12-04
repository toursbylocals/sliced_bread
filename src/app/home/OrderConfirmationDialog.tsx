import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface OrderConfirmationDialogProps {
  isOpen: boolean;
  orderConfirmation: string | null;
  onClose: () => void;
  onViewOrderDetails: () => void;
}

const OrderConfirmationDialog: React.FC<OrderConfirmationDialogProps> = ({
  isOpen,
  orderConfirmation,
  onClose,
  onViewOrderDetails,
}) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order Confirmed!</DialogTitle>
        <DialogDescription>
          Your order has been successfully placed. Your order number is:{" "}
          {orderConfirmation}
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="sm:justify-start">
        <Button type="button" variant="secondary" onClick={onClose}>
          Order More
        </Button>
        <Button type="button" onClick={onViewOrderDetails}>
          View Order Details
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default OrderConfirmationDialog;
