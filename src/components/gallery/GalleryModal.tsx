"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { AnimatePresence, motion } from "framer-motion";
import { useGallery } from "@/components/gallery/context/GalleryContext";

const GalleryModal = () => {
  const {
    currentIndex,
    isDialogOpen,
    direction,
    setDirection,
    setCurrentIndex,
    setIsDialogOpen,
    images
  } = useGallery();

  const INTERVAL = 300;
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isDialogOpen) {
        if (e.key === "ArrowRight") {
          setDirection(1);
          setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
        } else if (e.key === "ArrowLeft") {
          setDirection(-1);
          setCurrentIndex((prevIndex: number) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
        }
      }
    },
    [isDialogOpen, setDirection, setCurrentIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? INTERVAL : -INTERVAL,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -INTERVAL : INTERVAL,
      opacity: 0
    })
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent
        className={
          "flex items-center justify-center w-full" +
          " h-full max-w-[90vw] max-h-[90vh] overflow-hidden bg-background backdrop-blur-md"
        }
      >
        <DialogTitle className="sr-only">{`Image ${currentIndex + 1}`}</DialogTitle>
        <DialogDescription className="sr-only">
          Viewing image {currentIndex + 1} of {images.length}.
        </DialogDescription>
        <div
          className="relative w-full h-full"
          style={{ width: "90vw", height: "90vh", position: "relative" }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { duration: 0.5, ease: "easeInOut" },
                opacity: { duration: 0.4, ease: "easeInOut" }
              }}
              className="absolute w-full h-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                fill={true}
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 50vw"
                style={{
                  objectFit: "contain"
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 px-3 py-2 rounded-full shadow-md"
          onClick={() => {
            setDirection(-1);
            setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
          }}
        >
          &larr;
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-gray-800 px-3 py-2 rounded-full shadow-md"
          onClick={() => {
            setDirection(1);
            setCurrentIndex((currentIndex + 1) % images.length);
          }}
        >
          &rarr;
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
