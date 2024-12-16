import React from "react";
import { render, screen } from "@testing-library/react";
import FeatureList from "../components/hero/feature-list";
import "@testing-library/jest-dom";
// Adjust path if necessary

describe("FeatureList Content", () => {
  it("renders all features correctly", () => {
    render(<FeatureList />);

    const features = [
      "Adaptive flavor profile that evolves with each sip",
      "Zero-calorie natural sweetness",
      "Enhances mental clarity and focus",
      "Sustainably sourced ingredients",
    ];

    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });
});
