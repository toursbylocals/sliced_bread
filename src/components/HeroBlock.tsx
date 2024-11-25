"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Image from "next/image";

export const HeroBlock = () => (
  <>
    <div>
      <h2 className="text-3xl font-bold text-primary mb-4">Mountain Soul</h2>
      <h3 className="text-2xl italic font-light text-primary mb-5">The Pure Essence of Nature</h3>
    </div>
    <div className="flex flex-col lg:flex-row mb-16">
      <div className="relative w-[400px] h-[360px]  flex-[0_0_auto] lg:mr-[100px] mb-8">
        <Image
          src={"/images/gallery-1.webp"}
          alt={`Image of glass`}
          style={{
            objectFit: "cover"
          }}
          sizes="400px"
          fill
          placeholder="empty"
          priority
        />
      </div>
      <div className="text-lg leading-6 max-w-[700px] hero-text">
        <p className="mb-4">
          Discover the unparalleled freshness of our MountainSoul water, sourced from pristine
          mountain springs. Naturally filtered through layers of mineral-rich rock, it’s
          crystal-clear, pure, and full of life. Perfect for daily hydration or special moments,
          this is water as nature intended – refreshing, revitalizing, and untouched by time.
        </p>
        <p>
          Choose the size that fits your lifestyle: MountainSoul water is available in a variety of
          bottle sizes, from convenient on-the-go options to larger formats perfect for home or
          office use. Whether you need a quick refresh or hydration for the whole day, we’ve got you
          covered.
        </p>
      </div>
    </div>
    <div className="mb-16">
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Naturally Pure and Mineral-Rich</AccordionTrigger>
          <AccordionContent>
            Our water flows through natural rock formations, picking up essential minerals that
            nourish your body and enhance its taste. Free from additives or artificial processes,
            it’s as pure as it gets.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Sourced from Mountain Springs</AccordionTrigger>
          <AccordionContent>
            Collected from high-altitude springs, our water reflects the untouched beauty of its
            origin. Every sip connects you to nature’s freshest and most vibrant essence.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Perfect for Every Lifestyle</AccordionTrigger>
          <AccordionContent>
            Whether you’re staying active, enjoying a meal, or simply relaxing, our mountain water
            provides the hydration your body craves and the purity your mind deserves.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </>
);

export default HeroBlock;
