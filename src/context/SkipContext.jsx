import { createContext, useContext, useState } from "react";

const SkipContext = createContext();

export function SkipProvider({ children }) {
  const [selectedSkipId, setSelectedSkipId] = useState(null);

  return (
    <SkipContext.Provider value={{ selectedSkipId, setSelectedSkipId }}>
      {children}
    </SkipContext.Provider>
  );
}

export function useSkip() {
  const context = useContext(SkipContext);
  if (!context) {
    throw new Error("useSkip must be used within a SkipProvider");
  }
  return context;
}
