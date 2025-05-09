import React from "react";
import { Truck } from "lucide-react";

export default function SkipCard({ skip }) {
  return (
    <div className="bg-surface-light dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-lg p-6 flex flex-col gap-3 hover:scale-[1.025] hover:shadow-2xl transition-transform duration-200">
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-2 text-lg font-bold text-primary dark:text-blue-400">
          <Truck className="w-6 h-6 text-primary dark:text-blue-500" />
          {skip.size} Yard Skip
        </span>
        <span className="text-xs px-2 py-1 rounded bg-surface dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
          {skip.hire_period_days} days
        </span>
      </div>
      <div className="text-3xl font-extrabold text-success dark:text-green-400 mb-1">
        £{skip.price_before_vat}
      </div>
      <div className="text-xs text-zinc-500 dark:text-zinc-400 mb-2">
        + VAT: {skip.vat}%
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        <span
          className={`text-xs px-2 py-1 rounded font-semibold border ${
            skip.allowed_on_road
              ? "bg-success-light dark:bg-green-700/20 text-success dark:text-green-300 border-success dark:border-green-700"
              : "bg-red-100 dark:bg-red-700/20 text-red-600 dark:text-red-300 border-red-200 dark:border-red-700"
          }`}
        >
          {skip.allowed_on_road ? "Allowed on Road" : "Not Allowed on Road"}
        </span>
        <span
          className={`text-xs px-2 py-1 rounded font-semibold border ${
            skip.allows_heavy_waste
              ? "bg-success-light dark:bg-green-700/20 text-success dark:text-green-300 border-success dark:border-green-700"
              : "bg-amber-100 dark:bg-yellow-700/20 text-amber-700 dark:text-yellow-300 border-amber-200 dark:border-yellow-700"
          }`}
        >
          {skip.allows_heavy_waste ? "Allows Heavy Waste" : "No Heavy Waste"}
        </span>
      </div>
    </div>
  );
}
