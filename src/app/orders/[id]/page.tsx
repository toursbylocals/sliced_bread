"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Spinner,
} from "@nextui-org/react";
import { Order } from "@/lib/interfaces/Order";
import { GoPackage } from "react-icons/go";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { BiLeftArrowCircle } from "react-icons/bi";

const OrderPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const orderData = localStorage.getItem(`order-${id}`);

      if (orderData) {
        setOrder(JSON.parse(orderData));
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner color="primary" size="lg" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto">
          <CardBody className="text-center py-8">
            <h2 className="text-2xl font-bold">Order Not Found</h2>
            <p className="mt-2 text-default-600">
              We couldn&apos;t find the order you&apos;re looking for.
            </p>
            <Button
              onPress={() => router.push("/")}
              className="mt-4 bg-primaryGreen text-white"
            >
              Return Home
            </Button>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="flex-col gap-3 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10">
            <GoPackage className="w-8 h-8 text-success" />
          </div>
          <h2 className="text-2xl font-bold">Order Details</h2>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className="space-y-4 text-center">
            <p className="text-default-600">
              Order placed by: {order.name || order.generatedName}
            </p>
            <div className="space-y-2">
              <p className="font-medium">Order Information:</p>
              <p>Confirmation Number: {order.confirmationNumber}</p>
              <p>
                Quantity: {order.quantity || order.generatedQuantity} drinks
              </p>
              <p>
                Shipping to: {order.city}, {order.stateProvince},{" "}
                {order.country}
              </p>
              <p>
                Order Date: {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="mt-4 text-center">
              <Link href="/" passHref>
                <Button
                  startContent={<BiLeftArrowCircle className="h-4 w-4" />}
                  className="bg-primaryGreen text-white"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default OrderPage;
