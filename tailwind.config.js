/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#60a5fa", // blue-400
          DEFAULT: "#2563eb", // blue-600
          dark: "#1e40af", // blue-800
        },
        accent: {
          light: "#fbbf24", // amber-400
          DEFAULT: "#f59e42", // custom amber
          dark: "#b45309", // amber-800
        },
        success: {
          light: "#6ee7b7", // emerald-300
          DEFAULT: "#10b981", // emerald-500
          dark: "#065f46", // emerald-900
        },
        surface: {
          light: "#f8fafc", // slate-50
          DEFAULT: "#f1f5f9", // slate-100
          dark: "#1e293b", // slate-800
        },
      },
    },
  },
  plugins: [],
};
