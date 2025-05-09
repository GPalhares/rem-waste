import React, { useState } from "react";
import useSkipOptions from "../hooks/useSkipOptions";
import Header from "../components/Header";
import Stepper from "../components/Stepper";
import SkipCard from "../components/SkipCard";
import Filter from "../components/Filter";

export default function Skip() {
  const { options, loading, error } = useSkipOptions();
  const [filteredOptions, setFilteredOptions] = useState([]);

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
      <Filter options={options} onChange={setFilteredOptions} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {filteredOptions.length === 0 ? (
          <div className="col-span-full text-center text-zinc-400 py-12">
            No skips match this filter.
          </div>
        ) : (
          filteredOptions.map((skip) => <SkipCard key={skip.id} skip={skip} />)
        )}
      </div>
    </div>
  );
}
