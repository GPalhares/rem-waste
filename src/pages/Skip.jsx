import React from "react";
import useSkipOptions from "../hooks/useSkipOptions";
import SkipCard from "../components/SkipCard";
import Filter from "../components/Filter";
import { useSkip } from "../context/SkipContext";
import Loading from "../components/Loading";

export default function Skip() {
  const { options, loading, error } = useSkipOptions();
  const { selectedSkipId, setSelectedSkipId } = useSkip();
  const [filteredOptions, setFilteredOptions] = React.useState([]);

  const handleSkipSelect = (skipId) => {
    setSelectedSkipId(selectedSkipId === skipId ? null : skipId);
  };

  if (loading) return <Loading message="Loading skip options..." />;

  if (error)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="text-red-500">Error loading skip options.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );

  return (
    <div className="w-full">
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
              onSelect={() => handleSkipSelect(skip.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
