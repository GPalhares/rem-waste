import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSkip } from "../context/SkipContext";
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
    path: "/postcode",
  },
  {
    label: "Waste Type",
    icon: Trash2,
    description: "Select the type of waste",
    path: "/waste-type",
  },
  {
    label: "Select Skip",
    icon: Truck,
    description: "Choose your skip size",
    path: "/skip",
  },
  {
    label: "Permit Check",
    icon: Shield,
    description: "Check if permit is required",
    path: "/permit",
  },
  {
    label: "Choose Date",
    icon: Calendar,
    description: "Pick a date for collection",
    path: "/date",
  },
  {
    label: "Payment",
    icon: CreditCard,
    description: "Enter payment details",
    path: "/payment",
  },
];

export default function Stepper() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSkipId } = useSkip();
  const currentPath = location.pathname;

  const handleStepClick = (stepPath) => {
    const currentIndex = steps.findIndex((step) => step.path === currentPath);
    const targetIndex = steps.findIndex((step) => step.path === stepPath);

    // If trying to go forward and no skip is selected, prevent navigation
    if (
      targetIndex > currentIndex &&
      !selectedSkipId &&
      currentPath === "/skip"
    ) {
      return;
    }

    navigate(stepPath);
  };

  return (
    <nav
      className="z-40 w-full bg-background border-b border-[var(--color-muted)]"
      aria-label="Progress steps"
    >
      <div className="w-full overflow-x-auto">
        <ol className="relative flex flex-nowrap sm:space-x-12 sm:space-y-0 sm:space-x-8 rtl:space-x-reverse w-full px-4 py-3">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -translate-y-1/2 z-0" />

          {steps.map((step, idx) => {
            const isActive = currentPath === step.path;
            const isCompleted =
              steps.findIndex((s) => s.path === currentPath) > idx;
            const Icon = step.icon;

            return (
              <li
                key={step.label}
                className={`relative flex items-center text-gray-500 space-x-2.5 rtl:space-x-reverse z-10 flex-col sm:flex-row mx-2 sm:mx-4 min-w-[80px] sm:min-w-[151px] cursor-pointer`}
                onClick={() => handleStepClick(step.path)}
              >
                <span
                  className={`
                    flex items-center justify-center w-8 h-8 rounded-full shrink-0
                    ${
                      isActive || isCompleted
                        ? "text-[var(--color-primary)]"
                        : "text-muted"
                    }
                  `}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5 text-[var(--color-primary)]" />
                  ) : (
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? "text-[var(--color-primary)]" : "text-muted"
                      }`}
                    />
                  )}
                </span>

                <span className="text-center sm:text-left">
                  <h3
                    className={`font-medium text-sm leading-tight ${
                      isActive || isCompleted
                        ? "text-[var(--color-primary)]"
                        : "text-muted"
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
