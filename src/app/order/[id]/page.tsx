import { getOrder } from '@/app/api/order';
import { GridContainer } from '@/components/atoms/GridContainer';
import { Typography } from '@/components/atoms/Typography';
import { redirect } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';

export default async function OrderDetail({
  params: id,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await getOrder(await id);

  if (!data) {
    redirect('/');
  }

  return (
    <GridContainer className="gap-y-8">
      <Typography
        variant="heading1"
        color="text-primary-400"
        className="col-span-full mb-8"
      >
        ChaBliss
      </Typography>

      <Link className="col-span-full" href="/">
        <Button color="light" className="mb-8">
          <Icon icon="majesticons:chevron-left" width="24" height="24" />
          <span>Back to Home</span>
        </Button>
      </Link>

      <div className="col-span-1"></div>

      <div className="col-start-2 col-end-12">
        <Typography
          variant="heading3"
          color="text-primary-400"
          className="mb-3"
        >
          Order Number:
        </Typography>

        <Typography variant="description" color="text-primary-400">
          {data.id}
        </Typography>
      </div>

      <div className="col-span-1"></div>

      <div className="col-span-1"></div>

      <div className="col-start-2 col-end-12">
        <Typography
          variant="heading3"
          color="text-primary-400"
          className="mb-3"
        >
          Status:
        </Typography>

        <Typography variant="description" color="text-primary-400">
          {data.status}
        </Typography>
      </div>

      <div className="col-span-1"></div>

      <div className="col-span-1"></div>

      <div className="col-start-2 col-end-6">
        <Typography
          variant="heading3"
          color="text-primary-400"
          className="mb-3"
        >
          Customer Name:
        </Typography>

        <Typography variant="description" color="text-primary-400">
          {data.name}
        </Typography>
      </div>

      <div className="col-start-7 col-end-12">
        <Typography
          variant="heading3"
          color="text-primary-400"
          className="mb-3"
        >
          Quantity:
        </Typography>

        <Typography variant="description" color="text-primary-400">
          {data.quantity}
        </Typography>
      </div>

      <div className="col-span-1"></div>

      <div className="col-span-1"></div>

      <div className="col-start-2 col-end-5">
        <Typography
          variant="heading3"
          color="text-primary-400"
          className="mb-3"
        >
          City:
        </Typography>

        <Typography variant="description" color="text-primary-400">
          {data.city}
        </Typography>
      </div>

      <div className="col-start-5 col-end-8">
        <Typography
          variant="heading3"
          color="text-primary-400"
          className="mb-3"
        >
          State/Province:
        </Typography>

        <Typography variant="description" color="text-primary-400">
          {data.state}
        </Typography>
      </div>

      <div className="col-start-8 col-end-12">
        <Typography
          variant="heading3"
          color="text-primary-400"
          className="mb-3"
        >
          Country:
        </Typography>

        <Typography variant="description" color="text-primary-400">
          {data.country}
        </Typography>
      </div>

      <div className="col-span-1"></div>

      <Image
        className="pointer-events-none absolute bottom-0 right-0 z-0"
        src="/assets/images/milktea_bg.webp"
        height={1000}
        width={1000}
        alt="background"
      />
    </GridContainer>
  );
}
