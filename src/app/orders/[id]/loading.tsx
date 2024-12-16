"use client";

import { Card, CardBody, Spinner } from "@nextui-org/react";

const Loading = () => (
  <div className="container mx-auto px-4 py-12">
    <Card className="max-w-2xl mx-auto">
      <CardBody className="flex items-center justify-center py-8">
        <Spinner label="Loading order details..." />
      </CardBody>
    </Card>
  </div>
);

export default Loading;
