import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { dateFormatter } from "@/lib/dateFormatter";
import { Table, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function Page({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;

  const order = await prisma.order.findFirst({
    where: {
      orderId
    }
  });

  if (!order) {
    redirect("/404");
  }

  return (
    <>
      <section className="container px-4 mx-auto  max-w-[1200px]">
        <Link href={"/"} className="flex items-center text-muted-foreground text-sm mb-2">
          <ChevronLeft className="h-4 w-4 opacity-50 mr-1" />
          Back
        </Link>
        <h2 className="text-3xl text-primary font-bold mb-8">Order Details</h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Field</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>{order.orderId}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>User name</TableCell>
              <TableCell>{order.username}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Quantity</TableCell>
              <TableCell>{order.quantity}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>
                {order.country}, {order.region}, {order.city}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Created at</TableCell>
              <TableCell>{dateFormatter(order.createdAt)}</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </section>
    </>
  );
}
