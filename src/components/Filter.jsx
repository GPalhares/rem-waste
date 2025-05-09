import React, { useState, useMemo, useEffect } from "react";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Allowed on Road", value: "road" },
  { label: "Allows Heavy Waste", value: "heavy" },
];

export default function Filter({ options, onChange }) {
  const [filter, setFilter] = useState("all");

  const filteredOptions = useMemo(() => {
    return options.filter((skip) => {
      if (filter === "road") return skip.allowed_on_road;
      if (filter === "heavy") return skip.allows_heavy_waste;
      return true;
    });
  }, [filter, options]);

  useEffect(() => {
    onChange(filteredOptions);
  }, [filteredOptions, onChange]);

  return (
    <div className="flex py-4 flex-wrap gap-2 justify-end w-full">
      {FILTERS.map((f) => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          aria-pressed={filter === f.value}
          className={`cursor-pointer px-3 sm:px-4 py-1 rounded-lg border text-xs sm:text-sm font-medium transition whitespace-nowrap
            ${
              filter === f.value
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow"
                : "bg-[var(--color-muted)] text-[var(--color-secondary)] border-[var(--color-muted)]"
            }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
