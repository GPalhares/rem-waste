export default function CustomButton({
  isActive,
  onClick,
  children,
  disabled = false,
  className = "",
  invertColors = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-pressed={isActive}
      className={`py-1 px-3 sm:px-4 rounded-lg border text-xs sm:text-sm font-medium transition whitespace-nowrap
        ${
          isActive
            ? invertColors
              ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow" // Active, inverted: orange with white text
              : "bg-[var(--color-muted)] text-[var(--color-secondary)] border-[var(--color-muted)] shadow" // Active, default: gray with dark text
            : invertColors
            ? "bg-[var(--color-muted)] text-[var(--color-secondary)] border-[var(--color-muted)]" // Inverted, not active: gray with dark text
            : "bg-[var(--color-primary)] text-white border-[var(--color-primary)]" // Default: orange with white text
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}`}
    >
      {children}
    </button>
  );
}
