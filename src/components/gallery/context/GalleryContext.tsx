import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface IGalleryContext {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  isDialogOpen: boolean;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
  direction: number;
  setDirection: Dispatch<SetStateAction<number>>;
  images: string[];
}

const GalleryContext = createContext<IGalleryContext | undefined>(undefined);

export const GalleryProvider = ({
  children,
  images
}: {
  children: ReactNode;
  images: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [direction, setDirection] = useState(0);

  return (
    <GalleryContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        isDialogOpen,
        setIsDialogOpen,
        direction,
        setDirection,
        images
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  const context = useContext(GalleryContext);

  if (!context) {
    throw new Error("useGallery should be used inside SliderProvider");
  }

  return context;
};
