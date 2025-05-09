import { createContext, useContext, useState, useEffect } from "react";

const SkipContext = createContext();
const STORAGE_KEY = "selectedSkipId";

export function SkipProvider({ children }) {
  const [selectedSkipId, setSelectedSkipId] = useState(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  });

  // Update localStorage when selectedSkipId changes
  useEffect(() => {
    if (selectedSkipId) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedSkipId));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [selectedSkipId]);

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
