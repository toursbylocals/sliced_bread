import React from "react";
import { render, screen } from "@testing-library/react";
import NavigationBar from "../components/layout/Navbar";
import "@testing-library/jest-dom";
describe("Navbar Component", () => {
  it("renders the brand name and button", () => {
    render(<NavigationBar />);

    expect(screen.getByText("Jarritos")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "My Orders" }),
    ).toBeInTheDocument();
  });

  it("button links to correct section", () => {
    render(<NavigationBar />);
    const link = screen.getByRole("link", { name: "My Orders" });

    expect(link).toHaveAttribute("href", "/orders");
  });
});
