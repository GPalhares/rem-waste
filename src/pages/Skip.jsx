import React, { useState } from "react";
import useSkipOptions from "../hooks/useSkipOptions";
import Header from "../components/Header";
import Stepper from "../components/Stepper";
import SkipCard from "../components/SkipCard";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Allowed on Road", value: "road" },
  { label: "Allows Heavy Waste", value: "heavy" },
];

export default function Skip() {
  const { options, loading, error } = useSkipOptions();
  const [filter, setFilter] = useState("all");

  const filteredOptions = options.filter((skip) => {
    if (filter === "road") return skip.allowed_on_road;
    if (filter === "heavy") return skip.allows_heavy_waste;
    return true;
  });

  if (loading)
    return <div className="text-center py-8">Loading skip options...</div>;
  if (error)
    return (
      <div className="text-center py-8 text-red-500">
        Error loading skip options.
      </div>
    );

  return (
    <div className="main-container">
      <Header />
      <Stepper />

      <div className="flex flex-wrap gap-2 justify-end mb-6 w-full">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`px-4 py-2 rounded-lg border text-sm font-medium transition
              ${
                filter === f.value
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow"
                  : "bg-[var(--color-muted)] text-[var(--color-secondary)] border-[var(--color-muted)] hover:bg-[var(--color-accent)] hover:text-white"
              }
            `}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {filteredOptions.length === 0 ? (
          <div className="col-span-full text-center text-zinc-400 py-12">
            No skips match this filter.
          </div>
        ) : (
          filteredOptions.map((skip) => <SkipCard key={skip.id} skip={skip} />)
        )}
      </div>
      {/* Add more home page content here */}
    </div>
  );
}
