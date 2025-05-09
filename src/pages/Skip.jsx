import React, { useState } from "react";
import useSkipOptions from "../hooks/useSkipOptions";
import Header from "../components/Header";
import Stepper from "../components/Stepper";
import SkipCard from "../components/SkipCard";
import Filter from "../components/Filter";

export default function Skip() {
  const { options, loading, error } = useSkipOptions();
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState([]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading skip options...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error loading skip options.
      </div>
    );

  return (
    <div className="w-full">
      <Header />
      <Stepper />
      <Filter options={options} onChange={setFilteredOptions} />

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {filteredOptions.length === 0 ? (
          <div className="col-span-full text-center text-zinc-400 py-12">
            No skips match this filter.
          </div>
        ) : (
          filteredOptions.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkipId === skip.id}
              onSelect={() => setSelectedSkipId(skip.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
