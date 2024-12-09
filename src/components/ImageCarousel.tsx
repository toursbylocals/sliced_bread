import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";

const images = [
  {
    src: "/images/image1.png",
    alt: "Classic Lemonade",
    description:
      "Classic Lemonade - Perfectly zesty and hydrating, this lemonade quenches thirst like no other on a hot day.",
  },
  {
    src: "/images/image2.png",
    alt: "Tropical Mango Smoothie",
    description:
      "Tropical Mango Smoothie - Packed with vitamins and tropical flavor, this mango smoothie is a burst of summer energy.",
  },
  {
    src: "/images/image3.png",
    alt: "Mixed Berry Mocktail",
    description:
      "Mixed Berry Mocktail - A berry explosion that’s antioxidant-rich and bursting with flavor.",
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="mb-12 relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 cursor-pointer group"
        onClick={handleImageClick}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={600}
          height={400}
          className="rounded-2xl transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="max-w-3xl text-center mb-12">
        <p
          className="text-gray-800 text-xl leading-relaxed"
          data-testid="description-text"
        >
          {images[currentIndex].description}
        </p>
      </div>
    </div>
  );
}
