import React from "react";
import { Order } from "@/lib/interfaces/Order";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

// Orders Table Component
const OrdersTable: React.FC<{
  orders: Order[];
  onRowClick: (id: string) => void;
}> = ({ orders, onRowClick }) => {
  if (orders.length === 0) {
    return <p className="text-center py-4 text-gray-500">No orders found.</p>;
  }

  return (
    <Table aria-label="Order List Table">
      <TableHeader>
        <TableColumn>Order ID</TableColumn>
        <TableColumn>Order Name</TableColumn>
        <TableColumn>Confirmation Number</TableColumn>
        <TableColumn>Quantity</TableColumn>
        <TableColumn>City</TableColumn>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow
            key={order.id}
            onClick={() => onRowClick(order.id)}
            className="cursor-pointer"
          >
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.name || order.generatedName}</TableCell>
            <TableCell>{order.confirmationNumber}</TableCell>
            <TableCell>{order.quantity || order.generatedQuantity}</TableCell>
            <TableCell>{order.city}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrdersTable;
