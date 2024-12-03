import { GridContainer } from '@/components/atoms/GridContainer';
import { Typography } from '@/components/atoms/Typography';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';

export default async function Privacy() {
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
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-3">
            <Typography variant="heading3" color="text-primary-300">
              Privacy Policy
            </Typography>

            <Typography variant="description" color="text-primary-300">
              At <b>ChaBliss</b>, we value your privacy and are committed to
              protecting your personal information. This policy outlines how we
              collect, use, and safeguard the information you provide when you
              purchase our products. Information We Collect: Customer Name: To
              personalize your experience and manage your orders. Quantity of
              Drinks: To fulfill your order accurately. Location Information
              (City, State/Province, Country): To ensure timely delivery and
              comply with regional regulations.
            </Typography>
          </div>

          <div className="flex flex-col gap-y-3">
            <Typography variant="heading3" color="text-primary-300">
              How We Use Your Information
            </Typography>

            <Typography variant="description" color="text-primary-300">
              We use your information solely for processing orders, improving
              our services, and communicating with you regarding your purchases.
              We do not sell or share your personal data with third parties
              without your consent, except as required by law.
            </Typography>
          </div>

          <div className="flex flex-col gap-y-3">
            <Typography variant="heading3" color="text-primary-300">
              Data Protection:
            </Typography>

            <Typography variant="description" color="text-primary-300">
              We implement appropriate security measures to protect your
              personal information from unauthorized access, alteration,
              disclosure, or destruction.
            </Typography>
          </div>

          <div className="flex flex-col gap-y-3">
            <Typography variant="description" color="text-primary-300">
              For any questions or concerns regarding your privacy, please
              contact us at
            </Typography>
            <Typography variant="link" color="text-primary-300">
              <a href="mailto:example@example.com">example@example.com</a>.
            </Typography>
          </div>
        </div>
      </div>

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
