import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "@/components/Footer";

describe("Footer Component", () => {
  it("renders the footer element", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it("renders the copyright text with the current year", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      new RegExp(`© ${currentYear} Heaven's Elixir. All rights reserved.`, "i")
    );
    expect(copyrightText).toBeInTheDocument();
  });

  it("renders the crafted message", () => {
    render(<Footer />);

    const craftedMessage = screen.getByText(
      /crafted with care and passion\. the pinnacle of refreshment\./i
    );
    expect(craftedMessage).toBeInTheDocument();
  });

  it("applies the correct classes for styling", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("bg-gray-800 text-gray-200 py-6");

    const container = screen
      .getByText(
        /crafted with care and passion\. the pinnacle of refreshment\./i
      )
      .closest("div");
    expect(container).toHaveClass("container mx-auto text-center");
  });
});
