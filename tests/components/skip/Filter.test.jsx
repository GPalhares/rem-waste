import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Filter from "../../../src/components/skip/Filter";

const mockOptions = [
  {
    id: 1,
    size: 4,
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 2,
    size: 6,
    allowed_on_road: false,
    allows_heavy_waste: true,
  },
  {
    id: 3,
    size: 8,
    allowed_on_road: true,
    allows_heavy_waste: false,
  },
];

describe("Filter", () => {
  it("renders filter buttons", () => {
    const onChange = vi.fn();
    render(<Filter options={mockOptions} onChange={onChange} />);

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Allowed on Road")).toBeInTheDocument();
    expect(screen.getByText("Allows Heavy Waste")).toBeInTheDocument();
  });

  it("calls onChange with filtered options when filter is changed", () => {
    const onChange = vi.fn();
    render(<Filter options={mockOptions} onChange={onChange} />);

    const roadFilter = screen.getByText("Allowed on Road");
    fireEvent.click(roadFilter);

    expect(onChange).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ allowed_on_road: true }),
      ])
    );
  });

  it("filters options correctly for road allowed", () => {
    const onChange = vi.fn();
    render(<Filter options={mockOptions} onChange={onChange} />);

    const roadFilter = screen.getByText("Allowed on Road");
    fireEvent.click(roadFilter);

    expect(onChange).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ id: 1 }),
        expect.objectContaining({ id: 3 }),
      ])
    );
  });

  it("filters options correctly for heavy waste", () => {
    const onChange = vi.fn();
    render(<Filter options={mockOptions} onChange={onChange} />);

    const heavyFilter = screen.getByText("Allows Heavy Waste");
    fireEvent.click(heavyFilter);

    expect(onChange).toHaveBeenCalledWith(
      expect.arrayContaining([
        expect.objectContaining({ id: 1 }),
        expect.objectContaining({ id: 2 }),
      ])
    );
  });
});
