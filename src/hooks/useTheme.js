import { useCallback, useEffect, useState } from "react";

const THEME_KEY = "theme";
const DEFAULT_THEME = "dark";

function getInitialTheme() {
  if (typeof window === "undefined") return DEFAULT_THEME;
  return localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
}

export default function useTheme() {
  const [theme, setThemeState] = useState(getInitialTheme);

  // Apply theme to <html> and persist
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem(THEME_KEY, "light");
    }
  }, [theme]);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  // Set theme directly
  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
  }, []);

  // Check if dark
  const isDark = theme === "dark";

  return { theme, isDark, toggleTheme, setTheme };
}
