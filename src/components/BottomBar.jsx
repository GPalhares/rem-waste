import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CustomButton from "./CustomButton";

export default function BottomBar({ price, onContinue, onBack }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[var(--color-background)]/90 backdrop-blur-lg border-t border-[var(--color-border)] p-6 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
          <span className="text-sm font-medium text-[var(--color-secondary)]">
            Selected Skip Total
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-[var(--color-accent)]">
              £{price}
            </span>
            <span className="text-sm text-[var(--color-secondary)]">+ VAT</span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <CustomButton
            onClick={onBack}
            invertColors
            className="flex-1 sm:flex-none text-base py-3 px-6"
          >
            Back
          </CustomButton>
          <CustomButton
            onClick={onContinue}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 text-base py-3 px-6"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
