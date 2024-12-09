import React from "react";
import { render, screen, fireEvent, act, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageCarousel from "@/components/ImageCarousel";

jest.useFakeTimers();
jest.spyOn(global, "clearInterval");

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

describe("ImageCarousel Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the initial image and description", () => {
    render(<ImageCarousel />);

    const image = screen.getByAltText(images[0].alt);
    expect(image).toBeInTheDocument();

    const description = screen.getByText((_, element) => {
      const hasText = (node: Element) =>
        node.textContent === images[0].description;
      if (!element) return false;
      const nodeHasText = hasText(element);
      const childrenDontHaveText = Array.from(element?.children || []).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(description).toBeInTheDocument();
  });

  it("changes the image and description on click", () => {
    render(<ImageCarousel />);

    const image = screen.getByAltText(images[0].alt);
    fireEvent.click(image);

    const nextImage = screen.getByAltText(images[1].alt);
    const nextDescription = screen.getByText(images[1].description);

    expect(nextImage).toBeInTheDocument();
    expect(nextDescription).toBeInTheDocument();
  });

  it("automatically changes the image and description after 5 seconds", () => {
    render(<ImageCarousel />);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const nextImage = screen.getByAltText(images[1].alt);
    const nextDescription = screen.getByText((content, element) => {
      if (!element) return false;
      return (
        element.textContent?.trim() === images[1].description.trim() &&
        !Array.from(element.children).some(
          (child) => child.textContent?.trim() === images[1].description.trim()
        )
      );
    });

    expect(nextImage).toBeInTheDocument();
    expect(nextDescription).toBeInTheDocument();
  });

  it("cleans up the interval timer on unmount", () => {
    const { unmount } = render(<ImageCarousel />);

    unmount();

    expect(clearInterval).toHaveBeenCalledTimes(2);
  });
});
