import React from "react";
import { useNavigate } from "react-router-dom";
import useSkipOptions from "../hooks/useSkipOptions";
import SkipCard from "../components/SkipCard";
import Filter from "../components/Filter";
import { useSkip } from "../context/SkipContext";
import Loading from "../components/Loading";
import BottomBar from "../components/BottomBar";

export default function Skip() {
  const navigate = useNavigate();
  const { options, loading, error } = useSkipOptions();
  const { selectedSkipId, setSelectedSkipId } = useSkip();
  const [filteredOptions, setFilteredOptions] = React.useState([]);

  const handleSkipSelect = (skipId) => {
    setSelectedSkipId(selectedSkipId === skipId ? null : skipId);
  };

  const selectedSkip = options?.find((skip) => skip.id === selectedSkipId);

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
    <div className="w-full pb-24 min-h-screen">
      <Filter options={options} onChange={setFilteredOptions} />

      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full place-items-center">
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

      {selectedSkip && (
        <BottomBar
          price={selectedSkip.price_before_vat}
          onContinue={() => navigate("/permit")}
          onBack={() => navigate("/waste-type")}
        />
      )}
    </div>
  );
}
