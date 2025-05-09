import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BottomBar from "../../../src/components/layout/BottomBar";

describe("BottomBar", () => {
  it("renders with correct price", () => {
    render(<BottomBar price={100} onContinue={() => {}} onBack={() => {}} />);

    expect(screen.getByText("£100")).toBeInTheDocument();
    expect(screen.getByText("+ VAT")).toBeInTheDocument();
  });

  it("renders continue button", () => {
    render(<BottomBar price={100} onContinue={() => {}} onBack={() => {}} />);

    const continueButton = screen.getByRole("button", { name: /continue/i });
    expect(continueButton).toBeInTheDocument();
    expect(continueButton).toHaveClass("bg-[var(--color-primary)]");
  });

  it("calls onContinue when continue button is clicked", () => {
    const handleContinue = vi.fn();
    render(
      <BottomBar price={100} onContinue={handleContinue} onBack={() => {}} />
    );

    const continueButton = screen.getByRole("button", { name: /continue/i });
    fireEvent.click(continueButton);
    expect(handleContinue).toHaveBeenCalledTimes(1);
  });
});
