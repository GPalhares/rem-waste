import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SkipCard from "../../../src/components/skip/SkipCard";

const mockSkip = {
  id: 1,
  size: 4,
  price_before_vat: 100,
  vat: 20,
  hire_period_days: 7,
  location: "London",
  allowed_on_road: true,
  allows_heavy_waste: true,
};

describe("SkipCard", () => {
  it("renders skip card with correct information", () => {
    render(<SkipCard skip={mockSkip} isSelected={false} onSelect={() => {}} />);

    expect(screen.getByText("4-Yard Skip")).toBeInTheDocument();
    expect(screen.getByText("£100")).toBeInTheDocument();
    expect(screen.getByText("+ VAT: 20%")).toBeInTheDocument();
    expect(screen.getByText("7 days")).toBeInTheDocument();
  });

  it("calls onSelect when clicked", () => {
    const handleSelect = vi.fn();
    render(
      <SkipCard skip={mockSkip} isSelected={false} onSelect={handleSelect} />
    );

    const card = screen.getByRole("button");
    fireEvent.click(card);
    expect(handleSelect).toHaveBeenCalledTimes(1);
  });

  it("calls onSelect when select button is clicked", () => {
    const handleSelect = vi.fn();
    render(
      <SkipCard skip={mockSkip} isSelected={false} onSelect={handleSelect} />
    );

    const selectButton = screen.getByRole("button", { name: /select/i });
    fireEvent.click(selectButton);
    expect(handleSelect).toHaveBeenCalledTimes(1);
  });

  it("renders correct image based on skip size", () => {
    render(<SkipCard skip={mockSkip} isSelected={false} onSelect={() => {}} />);

    const image = screen.getByAltText("4 Yard Skip");
    expect(image).toHaveAttribute("src", "/images/4-Yard-skip.png");
  });
});
