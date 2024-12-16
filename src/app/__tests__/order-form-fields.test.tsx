// __tests__/order-form-fields.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import OrderFormFields from "../components/order/order-form-fields";
import "@testing-library/jest-dom";

describe("OrderFormFields Component", () => {
  it("renders all input fields", () => {
    const fields = [
      {
        label: "Your Name (Optional)",
        name: "name",
        placeholder: "How should we address you?",
      },
      {
        label: "Quantity (Optional)",
        name: "quantity",
        type: "number",
        min: 1,
        placeholder: "How many would you like?",
      },
      {
        label: "City",
        name: "city",
        isRequired: true,
        placeholder: "Enter your city",
      },
      {
        label: "State/Province",
        name: "stateProvince",
        isRequired: true,
        placeholder: "Enter your state or province",
      },
      {
        label: "Country",
        name: "country",
        isRequired: true,
        placeholder: "Enter your country",
      },
    ];

    render(<OrderFormFields fields={fields} />);

    // Assertions for input fields
    expect(screen.getByLabelText("Your Name (Optional)")).toBeInTheDocument();
    expect(screen.getByLabelText("Quantity (Optional)")).toBeInTheDocument();
    expect(screen.getByLabelText("City")).toBeInTheDocument();
    expect(screen.getByLabelText("State/Province")).toBeInTheDocument();
    expect(screen.getByLabelText("Country")).toBeInTheDocument();
  });
});
