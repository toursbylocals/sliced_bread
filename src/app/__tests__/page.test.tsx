import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../page";

describe("Home", () => {
  it("renders the Classic Lemonade image", () => {
    render(<Home />);
    const image = screen.getByAltText("Classic Lemonade");

    expect(image).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<Home />);
    const description = screen.getByTestId("description-text");

    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(
      "Classic Lemonade - Perfectly zesty and hydrating, this lemonade quenches thirst like no other on a hot day."
    );
  });

  it("renders the 'Place Your Order' button", () => {
    render(<Home />);
    const button = screen.getByText(/place your order/i);

    expect(button).toBeInTheDocument();
  });
});
