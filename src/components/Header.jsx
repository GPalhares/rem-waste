import { Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-zinc-800 sticky top-0 z-[60]">
      <div
        className="text-xl font-bold text-white tracking-wide select-none"
        aria-label="REM Waste Home"
      >
        REM Waste
      </div>
      <button
        className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 hover:border-blue-500 transition-colors text-zinc-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Toggle theme"
      >
        <Sun className="w-5 h-5" strokeWidth={1.8} />
      </button>
    </header>
  );
}
