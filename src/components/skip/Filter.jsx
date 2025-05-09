// components/Filter.jsx
import React, { useState, useMemo, useEffect } from "react";
import CustomButton from "../ui/CustomButton";

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
    <div className="flex pt-12 pb-4 flex-wrap gap-2 justify-end w-full ">
      {FILTERS.map((f) => (
        <CustomButton
          key={f.value}
          isActive={filter === f.value}
          onClick={() => setFilter(f.value)}
          invertColors={true}
        >
          {f.label}
        </CustomButton>
      ))}
    </div>
  );
}
