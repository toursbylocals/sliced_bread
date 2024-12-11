import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../page";

describe("Home", () => {
  it("renders the Next.js logo", () => {
    render(<Home />);
    const logo = screen.getByAltText("Next.js logo");

    expect(logo).toBeInTheDocument();
  });
});
