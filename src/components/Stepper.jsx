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
  {
    label: "Postcode",
    icon: MapPin,
    description: "Enter your postcode",
  },
  {
    label: "Waste Type",
    icon: Trash2,
    description: "Select the type of waste",
  },
  { label: "Select Skip", icon: Truck, description: "Choose your skip size" },
  {
    label: "Permit Check",
    icon: Shield,
    description: "Check if permit is required",
  },
  {
    label: "Choose Date",
    icon: Calendar,
    description: "Pick a date for collection",
  },
  {
    label: "Payment",
    icon: CreditCard,
    description: "Enter payment details",
  },
];

export default function Stepper() {
  return (
    <nav
      className="z-40 w-full bg-background border-b border-[var(--color-muted)] px-4 py-3"
      aria-label="Progress steps"
    >
      <div className="pb-5 sm:pb-0 sm:mt-0 overflow-x-auto">
        <ol className="relative flex flex-nowrap sm:space-x-12 sm:space-y-0 sm:space-x-8 rtl:space-x-reverse w-full">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -translate-y-1/2 z-0" />

          {steps.map((step, idx) => {
            const isActived = idx < 3;
            const Icon = step.icon;

            return (
              <li
                key={step.label}
                className={`relative flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse z-10 flex-col sm:flex-row mx-4 min-w-[80px] sm:min-w-[151px]`}
              >
                <span
                  className={`
                    flex items-center justify-center w-8 h-8 rounded-full shrink-0
                    ${isActived ? "text-[var(--color-primary)]" : "text-muted"}
                  `}
                >
                  {isActived ? (
                    <CheckCircle className="w-5 h-5 text-[var(--color-primary)]" />
                  ) : (
                    <Icon className="w-5 h-5 text-muted" />
                  )}
                </span>

                <span className="text-center sm:text-left">
                  <h3
                    className={`font-medium text-sm leading-tight ${
                      isActived ? "text-[var(--color-primary)]" : "text-muted"
                    }`}
                  >
                    {step.label}
                  </h3>
                  <p className="text-xs hidden sm:block">{step.description}</p>
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
