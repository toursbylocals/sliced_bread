import React from "react";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import OrderList from "../orders/page";
import { useRouter } from "next/navigation";
import "@testing-library/jest-dom";
// Mocking useRouter from next/navigation for testing route change
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("OrderList", () => {
  let mockRouterPush: jest.Mock;

  beforeEach(() => {
    // Resetting mock before each test
    mockRouterPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockRouterPush });

    // Mocking localStorage data
    const mockOrders = [
      {
        id: "1",
        name: "Order 1",
        confirmationNumber: "ABC123",
        quantity: 5,
        city: "New York",
        generatedName: "Generated Order 1",
        generatedQuantity: 3,
      },
      {
        id: "2",
        name: "Order 2",
        confirmationNumber: "XYZ456",
        quantity: 10,
        city: "Los Angeles",
        generatedName: "Generated Order 2",
        generatedQuantity: 8,
      },
    ];

    // Mock localStorage to simulate storing orders
    mockOrders.forEach((order) => {
      localStorage.setItem(`order-${order.id}`, JSON.stringify(order));
    });
  });

  afterEach(() => {
    // Clearing localStorage after each test
    localStorage.clear();
  });

  it("renders the table with orders", async () => {
    render(<OrderList />);

    // Wait for orders to be displayed
    await waitFor(() =>
      expect(screen.getByText("Order ID")).toBeInTheDocument(),
    );

    expect(screen.getByText("Order 1")).toBeInTheDocument();
    expect(screen.getByText("Order 2")).toBeInTheDocument();
    expect(screen.getByText("ABC123")).toBeInTheDocument();
    expect(screen.getByText("XYZ456")).toBeInTheDocument();
    expect(screen.getByText("New York")).toBeInTheDocument();
    expect(screen.getByText("Los Angeles")).toBeInTheDocument();
  });

  it("filters orders based on search input", async () => {
    render(<OrderList />);

    // Wait for the search input (use 'textbox' role for input)
    await waitFor(() =>
      expect(
        screen.getByRole("textbox", { name: /search orders/i }),
      ).toBeInTheDocument(),
    );

    // Enter a search term and trigger the search
    userEvent.type(
      screen.getByRole("textbox", { name: /search orders/i }),
      "Order 1",
    );

    await waitFor(() => {
      expect(screen.getByText("Order 1")).toBeInTheDocument();
      expect(screen.queryByText("Order 2")).not.toBeInTheDocument();
    });
  });

  it("clears the search input and shows all orders", async () => {
    render(<OrderList />);

    userEvent.type(screen.getByLabelText("Search Orders"), "Order 1");
    await waitFor(() => {
      expect(screen.getByText("Order 1")).toBeInTheDocument();
      expect(screen.queryByText("Order 2")).not.toBeInTheDocument();
    });

    // Clear the search
    userEvent.click(screen.getByRole("button", { name: /clear/i }));

    await waitFor(() => {
      expect(screen.getByText("Order 1")).toBeInTheDocument();
      expect(screen.getByText("Order 2")).toBeInTheDocument();
    });
  });

  it("navigates to the correct order detail page when a row is clicked", async () => {
    render(<OrderList />);

    // Simulate a row click to navigate
    userEvent.click(screen.getByText("Order 1"));

    await waitFor(() => {
      expect(mockRouterPush).toHaveBeenCalledWith("/orders/1");
    });
  });

  it("shows all orders when search term is empty", async () => {
    render(<OrderList />);

    userEvent.type(screen.getByLabelText("Search Orders"), "Order 1");
    await waitFor(() => {
      expect(screen.getByText("Order 1")).toBeInTheDocument();
      expect(screen.queryByText("Order 2")).not.toBeInTheDocument();
    });

    // Clear the search
    userEvent.clear(screen.getByLabelText("Search Orders"));
    await waitFor(() => {
      expect(screen.getByText("Order 1")).toBeInTheDocument();
      expect(screen.getByText("Order 2")).toBeInTheDocument();
    });
  });
});
