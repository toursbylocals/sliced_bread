import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderCard from "@/components/OrderCard";

Object.defineProperty(window, "location", {
  value: {
    href: jest.fn(),
  },
  writable: true,
});

const mockOrder = {
  id: "12345",
  name: "John Doe",
  quantity: 2,
  city: "New York",
  state: "NY",
  country: "USA",
  confirmationNumber: "CONF12345",
};

describe("OrderCard Component", () => {
  it("renders all order details correctly", () => {
    render(<OrderCard order={mockOrder} />);

    expect(screen.getByText(/order id: 12345/i)).toBeInTheDocument();

    expect(screen.getByText(/name:/i)).toBeInTheDocument();
    expect(screen.getByText(mockOrder.name)).toBeInTheDocument();

    expect(screen.getByText(/quantity:/i)).toBeInTheDocument();
    expect(screen.getByText(mockOrder.quantity.toString())).toBeInTheDocument();

    expect(screen.getByText(/city:/i)).toBeInTheDocument();
    expect(screen.getByText(mockOrder.city)).toBeInTheDocument();

    expect(screen.getByText(/state:/i)).toBeInTheDocument();
    expect(screen.getByText(mockOrder.state)).toBeInTheDocument();

    expect(screen.getByText(/country:/i)).toBeInTheDocument();
    expect(screen.getByText(mockOrder.country)).toBeInTheDocument();

    expect(screen.getByText(/conf. #:/i)).toBeInTheDocument();
    expect(screen.getByText(mockOrder.confirmationNumber)).toBeInTheDocument();
  });

  it("redirects to the home page when 'Back to Home' button is clicked", () => {
    render(<OrderCard order={mockOrder} />);

    const backButton = screen.getByText(/back to home/i);
    fireEvent.click(backButton);

    expect(window.location.href).toBe("/");
  });

  it("renders fallback text when fields are missing", () => {
    const incompleteOrder = {
      id: "12345",
      name: "",
      quantity: null,
      city: "",
      state: "",
      country: "",
      confirmationNumber: "",
    };

    render(<OrderCard order={incompleteOrder} />);

    expect(screen.getByText(/not provided/i)).toBeInTheDocument();
    expect(screen.getByText(/not specified/i)).toBeInTheDocument();
  });
});
