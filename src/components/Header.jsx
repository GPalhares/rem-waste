import React from "react";
import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 border-b border-[var(--color-muted)] sticky top-0 z-[60] backdrop-blur bg-transparent">
      <div className="flex items-center gap-2 text-lg font-semibold tracking-wide select-none text-[var(--color-primary)] dark:text-[var(--color-primary)]">
        Select Your Skip Size
      </div>

      <button
        className="flex items-center justify-center w-10 h-10 sm:w-9 sm:h-9 rounded-full border border-[var(--color-muted)] bg-transparent hover:border-[var(--color-primary)] transition-colors text-[var(--color-primary)] dark:text-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
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
