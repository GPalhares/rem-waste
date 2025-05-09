import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomButton from "../../../src/components/ui/CustomButton";

describe("CustomButton", () => {
  it("renders with default props", () => {
    render(
      <CustomButton onClick={() => {}} isActive={false}>
        Click me
      </CustomButton>
    );
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-[var(--color-primary)]");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(
      <CustomButton onClick={handleClick} isActive={false}>
        Click me
      </CustomButton>
    );
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    render(
      <CustomButton
        onClick={() => {}}
        isActive={false}
        className="custom-class"
      >
        Click me
      </CustomButton>
    );
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveClass("custom-class");
  });

  it("renders with children elements", () => {
    render(
      <CustomButton onClick={() => {}} isActive={false}>
        <span>Icon</span>
        Click me
      </CustomButton>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Icon");
    expect(button).toHaveTextContent("Click me");
  });
});
