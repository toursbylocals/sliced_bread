import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductImages from "../components/hero/product-images";
import { productImages } from "../../lib/data/product-images";

jest.mock("next/image", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MockedImage = ({ alt, ...props }: any) => (
    <img {...props} alt={alt || "mocked image"} />
  );

  MockedImage.displayName = "NextImage";

  return MockedImage;
});

jest.mock("@nextui-org/react", () => ({
  Button: ({
    children,
    onPress,
  }: {
    children: React.ReactNode;
    onPress: () => void;
  }) => <button onClick={onPress}>{children}</button>,
}));

describe("ProductImages Component", () => {
  it("renders the initial image correctly", () => {
    render(<ProductImages />);
    const firstImage = productImages[0];

    // Ensure the image element is rendered with the correct alt text
    expect(screen.getByAltText(firstImage.alt)).toBeInTheDocument();
  });

  it("navigates to the next and previous images", () => {
    render(<ProductImages />);
    // Get all buttons
    const buttons = screen.getAllByRole("button");

    // Assuming buttons are ordered (previous, next)
    const prevButton = buttons[0];
    const nextButton = buttons[1];

    fireEvent.click(nextButton);
    expect(screen.getByAltText(productImages[1].alt)).toBeInTheDocument();

    fireEvent.click(prevButton);
    expect(screen.getByAltText(productImages[0].alt)).toBeInTheDocument();
  });

  it("updates thumbnails correctly", () => {
    render(<ProductImages />);

    // Ensure that the thumbnail buttons are rendered
    const thumbnailButtons = screen.getAllByRole("button");
    const thumbnailNavButtons = thumbnailButtons.filter(
      (button) =>
        button.classList.contains("w-2") || button.classList.contains("w-4"),
    );

    expect(thumbnailNavButtons.length).toBe(productImages.length);

    // Click the first thumbnail button and check if it shows the corresponding image
    fireEvent.click(thumbnailNavButtons[0]);
    expect(screen.getByAltText(productImages[0].alt)).toBeInTheDocument();

    // Click the second thumbnail button and check if it shows the corresponding image
    fireEvent.click(thumbnailNavButtons[1]);
    expect(screen.getByAltText(productImages[1].alt)).toBeInTheDocument();
  });
});
