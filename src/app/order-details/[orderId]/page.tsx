import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { dateFormatter } from "@/lib/dateFormatter";

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
      <section className="container px-4 mx-auto">
        <h2 className="text-2xl">Order Details</h2>

        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Order ID</td>
              <td>{order.orderId}</td>
            </tr>
            <tr>
              <td>User name</td>
              <td>{order.username}</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>{order.quantity}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                {order.country}, {order.region}, {order.city}
              </td>
            </tr>
            <tr>
              <td>Created at</td>
              <td>{dateFormatter(order.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}
