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
    <nav className="w-full bg-zinc-900 py-2 px-1 flex justify-center shadow-md sticky top-0 z-50 border-b border-zinc-800">
      <ol className="flex items-center justify-center gap-2 sm:gap-4 w-full max-w-6xl overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 px-1 sm:px-0">
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
                        ? "bg-blue-600/30 border-blue-500 shadow-lg shadow-blue-900/20"
                        : ""
                    }
                    ${isCompleted ? "bg-blue-500/20 border-blue-400" : ""}
                    ${isUpcoming ? "bg-zinc-800 border-zinc-700" : ""}
                  `}
                  tabIndex={0}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 animate-pulse" />
                  ) : (
                    <Icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300
                        ${
                          isActive
                            ? "text-blue-300"
                            : isUpcoming
                            ? "text-zinc-500"
                            : "text-blue-200"
                        }
                      `}
                    />
                  )}
                </div>
                <span
                  className={`mt-1 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-300
                    ${
                      isActive
                        ? "text-blue-200"
                        : isCompleted
                        ? "text-blue-300"
                        : "text-zinc-500"
                    }
                  `}
                >
                  {step.label}
                </span>
                {/* Tooltip for compact views */}
                <span className="absolute left-1/2 -translate-x-1/2 top-12 z-10 hidden group-hover:block bg-zinc-800 text-zinc-100 text-xs rounded px-2 py-1 shadow-lg whitespace-nowrap">
                  {step.label}
                </span>
              </div>

              {idx < steps.length - 1 && (
                <span
                  className={`h-0.5 w-4 sm:w-8 transition-colors duration-300 rounded-full
                    ${
                      isCompleted
                        ? "bg-blue-500"
                        : isActive
                        ? "bg-zinc-500"
                        : "bg-zinc-700"
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
