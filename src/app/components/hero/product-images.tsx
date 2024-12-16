"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { productImages } from "../../../lib/data/product-images";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % productImages.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + productImages.length) % productImages.length,
    );
  };

  if (!isMounted) {
    return (
      <div className="w-[400px] h-[400px] bg-gray-200 animate-pulse rounded-2xl"></div>
    );
  }

  const currentImage = productImages[currentIndex];

  return (
    <div className="relative group">
      {/* Animated background */}
      <div className="aspect-square rounded-full bg-blue-100/50 absolute -inset-4 animate-pulse" />

      {/* Main image */}
      <div className="relative rounded-2xl shadow-2xl overflow-hidden">
        <Image
          src={currentImage.url}
          alt={currentImage.alt}
          width={currentImage.width}
          height={currentImage.height}
          className="object-cover w-full h-auto transform transition-transform duration-500"
          loading="lazy"
        />

        {/* Navigation buttons */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            isIconOnly
            variant="flat"
            className="bg-white/80 backdrop-blur-md"
            onPress={previousImage}
            aria-label="Previous Image"
          >
            <FaChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            isIconOnly
            variant="flat"
            className="bg-white/80 backdrop-blur-md"
            onPress={nextImage}
            aria-label="Next Image"
          >
            <FaChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {productImages.length}
        </div>
      </div>

      {/* Thumbnail navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {productImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-success w-4" : "bg-default-200"
            }`}
            aria-label={`Thumbnail ${index + 1}`} // Added aria-label for accessibility
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
