import React from "react";
import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/skip":
        return "Select Your Skip";
      case "/postcode":
        return "Enter Your Postcode";
      case "/waste-type":
        return "Select Waste Type";
      case "/permit":
        return "Permit Check";
      case "/date":
        return "Choose Collection Date";
      case "/payment":
        return "Payment Details";
      default:
        return "Skip Hire";
    }
  };

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 border-b border-[var(--color-muted)] sticky top-0 z-[60] backdrop-blur bg-transparent">
      <div className="flex items-center gap-2 text-lg font-semibold tracking-wide select-none text-[var(--color-primary)]">
        {getTitle()}
      </div>

      <button
        className="flex items-center justify-center w-10 h-10 sm:w-9 sm:h-9 rounded-full border border-[var(--color-muted)] bg-transparent hover:border-[var(--color-primary)] transition-colors text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        aria-label="Toggle theme"
        title="Toggle theme"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 transition-transform duration-300" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300" />
        )}
      </button>
    </header>
  );
}
