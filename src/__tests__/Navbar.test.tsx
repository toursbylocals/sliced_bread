import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "@/components/Navbar";

describe("Navbar Component", () => {
  it("renders the navigation bar", () => {
    render(<Navbar />);

    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  it("renders the logo link", () => {
    render(<Navbar />);

    const logoLink = screen.getByText(/Heaven's Elixir/i);
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("renders the Home link", () => {
    render(<Navbar />);

    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("renders the My Orders link", () => {
    render(<Navbar />);

    const ordersLink = screen.getByText(/My Orders/i);
    expect(ordersLink).toBeInTheDocument();
    expect(ordersLink).toHaveAttribute("href", "/order/all");
  });

  it("has hover effects on links", () => {
    render(<Navbar />);

    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toHaveClass("hover:text-blue-300");

    const ordersLink = screen.getByText(/My Orders/i);
    expect(ordersLink).toHaveClass("hover:text-blue-300");
  });
});
