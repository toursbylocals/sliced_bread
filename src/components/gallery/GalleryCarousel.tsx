"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useGallery } from "@/components/gallery/context/GalleryContext";

const GalleryCarousel = () => {
  const { setCurrentIndex, images } = useGallery();

  return (
    <Carousel className="w-[300px]">
      <CarouselContent className="flex -ml-4">
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="relative basis-1/3 flex-shrink-0 cursor-pointer pl-4"
            onClick={(e) => {
              setCurrentIndex(index);
              e.currentTarget.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
              });
            }}
          >
            <div className="relative w-full h-20 flex justify-center">
              <Image
                src={src}
                alt={`Thumbnail ${index + 1}`}
                width="0"
                height="0"
                sizes="128px"
                className="w-full h-auto"
                style={{ objectFit: "cover" }}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default GalleryCarousel;
