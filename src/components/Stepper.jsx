import React from "react";
import {
  CheckCircle,
  Shield,
  Calendar,
  CreditCard,
  Trash2,
  Truck,
  MapPin,
} from "lucide-react";

const steps = [
  { label: "Postcode", icon: MapPin },
  { label: "Waste Type", icon: Trash2 },
  { label: "Select Skip", icon: Truck },
  { label: "Permit Check", icon: Shield },
  { label: "Choose Date", icon: Calendar },
  { label: "Payment", icon: CreditCard },
];

const SELECTED_STEP = 2;

export default function Stepper() {
  return (
    <nav className="w-full bg-[var(--color-background)] border-b border-[var(--color-muted)] py-2 px-1 flex justify-center shadow-md sticky top-[56px] z-40">
      <ol className="flex items-center justify-center gap-2 sm:gap-4 w-full max-w-6xl overflow-x-auto scrollbar-thin scrollbar-thumb-[var(--color-muted)] scrollbar-track-[var(--color-background)] px-1 sm:px-0">
        {steps.map((step, idx) => {
          const isActive = idx === SELECTED_STEP;
          const isCompleted = idx < SELECTED_STEP;
          const isUpcoming = idx > SELECTED_STEP;

          const Icon = step.icon;

          return (
            <li
              key={step.label}
              className="flex items-center gap-1 sm:gap-2 min-w-fit relative group"
              aria-label={step.label}
              aria-current={isActive ? "step" : undefined}
            >
              <div
                className={`flex flex-col items-center transition-all duration-300 select-none`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all duration-300
                    ${
                      isActive
                        ? "bg-[var(--color-primary)]/20 border-[var(--color-primary)] shadow-lg"
                        : ""
                    }
                    ${
                      isCompleted
                        ? "bg-[var(--color-primary)]/10 border-[var(--color-primary)]"
                        : ""
                    }
                    ${
                      isUpcoming
                        ? "text-[var(--color-muted)] border-[var(--color-muted)] bg-[var(--color-muted)]/30"
                        : ""
                    }
                  `}
                  tabIndex={0}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)] animate-pulse" />
                  ) : (
                    <Icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300
                        ${
                          isActive
                            ? "text-[var(--color-primary)]"
                            : isUpcoming
                            ? "text-[var(--color-muted)]"
                            : "text-[var(--color-primary)]/80"
                        }
                      `}
                    />
                  )}
                </div>
                <span
                  className={`mt-1 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-300
                    ${
                      isActive
                        ? "text-[var(--color-primary)]"
                        : isCompleted
                        ? "text-[var(--color-primary)]/80"
                        : "text-[var(--color-secondary)]"
                    }
                  `}
                >
                  {step.label}
                </span>
                {/* Tooltip for compact views */}
                <span className="absolute left-1/2 -translate-x-1/2 top-12 z-10 hidden group-hover:block bg-[var(--color-background)] text-[var(--color-foreground)] text-xs rounded px-2 py-1 shadow-lg whitespace-nowrap border border-[var(--color-muted)]">
                  {step.label}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <span
                  className={`h-0.5 w-4 sm:w-8 transition-colors duration-300 rounded-full
                    ${
                      isCompleted
                        ? "bg-[var(--color-primary)]"
                        : isActive
                        ? "bg-[var(--color-muted)]"
                        : "bg-[var(--color-muted)]/60"
                    }
                  `}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
