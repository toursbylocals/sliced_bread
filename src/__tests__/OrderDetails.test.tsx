import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderDetails from "@/components/OrderDetails";

jest.mock("@/components/OrderCard", () => {
  return () => <div data-testid="order-card">Mocked OrderCard</div>;
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

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("OrderDetails Component", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("renders the loading state initially", () => {
    (global.fetch as jest.Mock).mockImplementation(() => new Promise(() => {}));

    render(<OrderDetails orderId="12345" />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("displays an error message if the fetch fails", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Failed to fetch")
    );

    render(<OrderDetails orderId="12345" />);

    await waitFor(() => {
      expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
    });
  });

  it("renders the OrderCard component when data is successfully fetched", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValue(mockOrder),
    });

    render(<OrderDetails orderId="12345" />);

    await waitFor(() => {
      const orderCard = screen.getByTestId("order-card");
      expect(orderCard).toBeInTheDocument();
      expect(orderCard).toHaveTextContent("Mocked OrderCard");
    });
  });

  it("handles non-200 HTTP status codes gracefully", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: "Not Found",
    });

    render(<OrderDetails orderId="12345" />);

    await waitFor(() => {
      expect(
        screen.getByText(/failed to fetch order details: not found/i)
      ).toBeInTheDocument();
    });
  });
});
