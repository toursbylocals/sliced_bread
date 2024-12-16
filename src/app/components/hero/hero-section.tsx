"use client";

import React from "react";
import { Chip } from "@nextui-org/react";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import FeatureList from "./feature-list";
import ProductImages from "./product-images";

const HeroSection = () => (
  <section className="relative overflow-hidden py-6 md:py-24">
    <div className="container mx-auto px-4">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        <div className="space-y-6">
          <Chip
            startContent={<MdOutlineEmojiFoodBeverage size={16} />}
            variant="flat"
            color="success"
            className="px-4 py-2 text-black bg-blue-100/50"
          >
            Introducing the World&apos;s Greatest Beverage
          </Chip>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-success">
            Jarritos
          </h1>
          <p className="text-xl text-default-600 leading-relaxed">
            After years of meticulous crafting and countless iterations,
            we&apos;ve perfected the ultimate refreshment. Jarritos combines
            rare African herbs all in a unique formula to create a drink that
            adapts to your taste preferences.
          </p>
          <FeatureList />
        </div>
        <ProductImages />
      </div>
    </div>
  </section>
);

export default HeroSection;
