import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import OrderForm from "@/components/OrderForm";
import { initialFormData } from "@/constants/formConstants";

const mockOnSubmit = jest.fn();

describe("OrderForm Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all form fields with initial values", () => {
    render(<OrderForm onSubmit={jest.fn()} />);

    Object.keys(initialFormData).forEach((key) => {
      const input: any = screen.getByLabelText(new RegExp(key, "i"));
      expect(input).toBeInTheDocument();

      const expectedValue =
        initialFormData[key as keyof typeof initialFormData] || null;

      expect(input.value).toBe(expectedValue === null ? "" : expectedValue);
    });
  });

  it("updates form fields on user input", () => {
    render(<OrderForm onSubmit={mockOnSubmit} />);

    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(nameInput).toHaveValue("John Doe");

    const cityInput = screen.getByLabelText(/city/i);
    fireEvent.change(cityInput, { target: { value: "New York" } });
    expect(cityInput).toHaveValue("New York");
  });

  it("does not call onSubmit when there are validation errors", () => {
    render(<OrderForm onSubmit={mockOnSubmit} />);

    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: "" } });

    const submitButton = screen.getByRole("button", {
      name: /place my order/i,
    });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("calls onSubmit with the correct data when the form is valid", () => {
    render(<OrderForm onSubmit={mockOnSubmit} />);

    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    const cityInput = screen.getByLabelText(/city/i);
    fireEvent.change(cityInput, { target: { value: "New York" } });

    const stateInput = screen.getByLabelText(/state/i);
    fireEvent.change(stateInput, { target: { value: "NY" } });

    const countryInput = screen.getByLabelText(/country/i);
    fireEvent.change(countryInput, { target: { value: "USA" } });

    const quantityInput = screen.getByLabelText(/quantity/i);
    fireEvent.change(quantityInput, { target: { value: "2" } });

    const submitButton = screen.getByRole("button", {
      name: /place my order/i,
    });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: "John Doe",
      city: "New York",
      state: "NY",
      country: "USA",
      quantity: "2",
    });
  });

  it("displays validation errors when fields are invalid", () => {
    render(<OrderForm onSubmit={mockOnSubmit} />);

    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: "" } });

    const submitButton = screen.getByRole("button", {
      name: /place my order/i,
    });
    fireEvent.click(submitButton);

    const errorMessages = screen.getAllByText(/required/i);
    expect(errorMessages.length).toBeGreaterThan(0);
  });
});
