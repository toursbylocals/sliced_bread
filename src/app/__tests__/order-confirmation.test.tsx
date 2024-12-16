import React from "react";
import { render, screen } from "@testing-library/react";
import OrderConfirmation from "../components/order/order-confirmation";
import { Order } from "@/lib/interfaces/Order";
import "@testing-library/jest-dom";
import { useIsClient } from "../../hooks/useIsClient";

jest.mock("../../hooks/useIsClient", () => ({
  useIsClient: jest.fn(),
}));

const mockOrder: Order = {
  id: "1234",
  name: "John Doe",
  confirmationNumber: "CONF-5678",
  quantity: 3,
  city: "New York",
  stateProvince: "NY",
  country: "USA",
  createdAt: "2024-12-12T00:00:00Z",
  generatedName: "Guest", // in case there's no `name`
  generatedQuantity: 1, // a fallback for quantity
};

describe("OrderConfirmation Component", () => {
  beforeEach(() => {
    // Mock the useIsClient hook to simulate client-side rendering
    (useIsClient as jest.Mock).mockReturnValue(true);
  });

  it("displays the order details correctly when order data is provided", () => {
    render(<OrderConfirmation order={mockOrder} />);

    // Check for order details
    expect(screen.getByText("Order Confirmed!")).toBeInTheDocument();
    expect(screen.getByText(/Thank you John Doe/)).toBeInTheDocument();
    expect(screen.getByText(/CONF-5678/)).toBeInTheDocument();
    expect(screen.getByText(/3 drinks/)).toBeInTheDocument();
    expect(screen.getByText(/New York, NY, USA/)).toBeInTheDocument();

    // Check if the order URL is displayed
    const orderURL = `${window.location.origin}/orders/1234`;

    expect(screen.getByText(orderURL)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", orderURL);
  });

  it("displays fallback values if no order name is provided", () => {
    const noNameOrder = { ...mockOrder, name: undefined };

    render(<OrderConfirmation order={noNameOrder} />);

    expect(screen.getByText(/Thank you Guest/)).toBeInTheDocument();
  });

  it("displays fallback message when URL is not available (server-side)", async () => {
    // Set useIsClient to false to simulate SSR
    (useIsClient as jest.Mock).mockReturnValue(false);

    render(<OrderConfirmation order={mockOrder} />);
    // Wait for the fallback message to appear
    const fallbackMessage = await screen.findByText(
      "[Order URL will be generated]",
    );

    // Check if the fallback message is displayed instead of the URL
    expect(fallbackMessage).toBeInTheDocument();
  });
});
