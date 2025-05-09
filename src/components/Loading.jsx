import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading({ message = "Loading..." }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <Loader2 className="w-8 h-8 text-[var(--color-primary)] animate-spin" />
      <p className="text-gray-600 dark:text-gray-400">{message}</p>
    </div>
  );
}
