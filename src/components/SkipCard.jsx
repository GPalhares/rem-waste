import React from "react";
import { Truck, Clock } from "lucide-react";
import Tags from "./Tags";
import CustomButton from "./CustomButton";

const skipImages = {
  "4 Yard Skip": "/images/4-Yard-skip.png",
  "6 Yard Skip": "/images/6-Yard-skip.png",
  "8 Yard Skip": "/images/8-Yard-skip.png",
  "10 Yard Skip": "/images/10-Yard-skip.png",
  "12 Yard Skip": "/images/12-Yard-skip.png",
  "14 Yard Skip": "/images/20-Yard-skip.png",
  "16 Yard Skip": "/images/20-Yard-skip.png",
  "20 Yard Skip": "/images/40-Yard-skip.png",
  "40 Yard Skip": "/images/40-Yard-skip.png",
};

export default function SkipCard({ skip, isSelected, onSelect }) {
  return (
    <div
      className={`w-[380px] h-[300px] bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-4 flex flex-col gap-2 transition-transform duration-200 ease-in-out hover:scale-[1.01] ${
        isSelected ? "ring-2 ring-[var(--color-primary)]" : ""
      }`}
      onClick={onSelect}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-lg font-semibold text-zinc-800 dark:text-white">
          <Truck className="w-5 h-5 text-primary dark:text-blue-400" />
          <span>{skip.size}-Yard Skip Hire</span>
        </div>
        <div className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
          <Clock className="w-3.5 h-3.5" />
          <span>{skip.hire_period_days} days</span>
        </div>
      </div>

      {/* Tags */}
      <Tags skip={skip} />

      {/* Price & Image */}
      <div className="flex-grow flex items-center justify-between gap-4">
        <div>
          <div className="text-4xl font-bold text-green-600 dark:text-green-400">
            £{skip.price_before_vat}
          </div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            + VAT: {skip.vat}%
          </div>
        </div>
        <img
          src={
            skipImages[`${skip.size} Yard Skip`] || "/images/4-Yard-skip.png"
          }
          alt={`${skip.size} Yard Skip`}
          className="w-32 h-24 object-contain rounded-lg dark:bg-zinc-800 p-1"
        />
      </div>

      {/* Select Button */}
      <CustomButton
        className="mt-auto"
        onClick={onSelect}
        isActive={isSelected}
      >
        {isSelected ? "Selected" : "Select This Skip"}
      </CustomButton>
    </div>
  );
}
