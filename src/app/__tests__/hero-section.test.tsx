import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "../components/hero/hero-section";
import "@testing-library/jest-dom";

describe("HeroSection Component", () => {
  it("renders the hero section with correct heading and description", () => {
    render(<HeroSection />);

    expect(
      screen.getByText(/Introducing the World's Greatest Beverage/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Jarritos/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/After years of meticulous crafting/i),
    ).toBeInTheDocument();
  });

  it("renders the FeatureList component", () => {
    render(<HeroSection />);
    expect(screen.getByText(/What makes it special:/i)).toBeInTheDocument();
  });

  it("renders the ProductImages component", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("button", { name: /Previous Image/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Next Image/i }),
    ).toBeInTheDocument();
  });
});
