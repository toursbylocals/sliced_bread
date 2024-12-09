import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderList from "@/components/OrderList";

jest.mock("@/components/OrderCard", () =>
  jest.fn(({ order }) => (
    <div data-testid="order-card">{`OrderCard: ${order.id}`}</div>
  ))
);

describe("OrderList Component", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders an error message if fetch fails", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("Fetch error"));

    render(<OrderList />);

    await waitFor(() => {
      expect(screen.getByText("Fetch error")).toBeInTheDocument();
    });
  });

  it("renders a message if no orders are found", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: jest.fn(),
    });

    render(<OrderList />);

    await waitFor(() => {
      expect(screen.getByText("No orders found.")).toBeInTheDocument();
    });
  });

  it("renders a fallback message if orders are empty", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue([]),
    });

    render(<OrderList />);

    await waitFor(() => {
      expect(screen.getByText("No orders available.")).toBeInTheDocument();
    });
  });

  it("renders a list of orders when fetch is successful", async () => {
    const mockOrders = [
      { id: "1", name: "Order 1", quantity: 1, city: "City 1" },
      { id: "2", name: "Order 2", quantity: 2, city: "City 2" },
    ];

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue(mockOrders),
    });

    render(<OrderList />);

    await waitFor(() => {
      const orderCards = screen.getAllByTestId("order-card");
      expect(orderCards).toHaveLength(mockOrders.length);
      expect(orderCards[0]).toHaveTextContent("OrderCard: 1");
      expect(orderCards[1]).toHaveTextContent("OrderCard: 2");
    });
  });
});
