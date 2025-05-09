import React from "react";
import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 bg-[var(--color-background)] border-b border-[var(--color-muted)] sticky top-0 z-[60]">
      <div className="text-lg font-semibold text-[var(--color-primary)] dark:text-[var(--color-primary)] tracking-wide select-none">
        REM Waste
      </div>
      <button
        className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-muted)] bg-transparent hover:border-[var(--color-primary)] transition-colors text-[var(--color-primary)] dark:text-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        aria-label="Toggle theme"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>
    </header>
  );
}
