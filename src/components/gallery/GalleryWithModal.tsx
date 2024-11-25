"use client";

import Image from "next/image";
import { GalleryProvider, useGallery } from "@/components/gallery/context/GalleryContext";
import GalleryModal from "@/components/gallery/GalleryModal";
import GalleryCarousel from "@/components/gallery/GalleryCarousel";

const GalleryWithModalBase = ({ ...props }) => {
  const { currentIndex, setIsDialogOpen, images } = useGallery();

  return (
    <div {...props}>
      <div className="w-[400px] flex flex-col gap-2 items-center">
        <div className="w-[400px] h-[350px] relative text-center">
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            style={{
              objectFit: "contain"
            }}
            width="400"
            height="350"
            placeholder="empty"
            priority
            className="cursor-pointer"
            onClick={() => {
              setIsDialogOpen(true);
            }}
          />
        </div>

        <GalleryCarousel />

        <GalleryModal />
      </div>
    </div>
  );
};

export const GalleryWithModal = ({ images, ...props }: { images: string[] }) => (
  <GalleryProvider images={images}>
    <GalleryWithModalBase {...props} />
  </GalleryProvider>
);

export default GalleryWithModal;
