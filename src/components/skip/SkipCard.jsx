import React from "react";
import { Truck, Clock, Check } from "lucide-react";
import Tags from "./Tags";
import CustomButton from "../ui/CustomButton";

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
      onClick={onSelect}
      className={`relative w-full max-w-sm cursor-pointer transition-all duration-200 rounded-xl ${
        isSelected
          ? "ring-2 ring-[var(--color-primary)]"
          : "hover:ring-2 hover:ring-[var(--color-border)]"
      }`}
    >
      <div
        className={`rounded-xl overflow-hidden border ${
          isSelected
            ? "border-[var(--color-primary)]"
            : "border-[var(--color-border)]"
        } bg-[var(--color-background)]`}
      >
        <div className="aspect-[21/9] relative bg-[var(--color-background)]">
          <img
            src={
              skipImages[`${skip.size} Yard Skip`] || "/images/4-Yard-skip.png"
            }
            alt={`${skip.size} Yard Skip`}
            className="w-full h-full object-contain p-4"
          />
          {isSelected && (
            <div className="absolute inset-0 bg-[var(--color-primary)]/20 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] shadow-md flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
        </div>

        <div className="p-4 space-y-3">
          {/* Title + Days */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-[var(--color-primary)]" />
              <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                {skip.size}-Yard Skip
              </h3>
            </div>
            <div className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--color-muted)] text-[var(--color-secondary)]">
              <Clock className="w-3.5 h-3.5" />
              <span>{skip.hire_period_days} days</span>
            </div>
          </div>

          <Tags skip={skip} />

          {/* Price and Button */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[var(--color-accent)]">
                £{skip.price_before_vat}
              </span>
              <span className="text-sm text-[var(--color-secondary)]">
                + VAT: {skip.vat}%
              </span>
            </div>
            <CustomButton
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
              isActive={isSelected}
              className="text-sm py-1.5 px-3"
            >
              {isSelected ? "Selected" : "Select"}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
