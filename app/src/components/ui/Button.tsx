import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: ButtonVariant;
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "border-[var(--burgundy)] bg-[var(--burgundy)] text-white shadow-[0_14px_28px_rgba(143,29,47,0.18)] hover:bg-[var(--burgundy-strong)]",
  secondary:
    "border-[var(--line-strong)] bg-white/70 text-[var(--burgundy)] shadow-[0_10px_22px_rgba(122,60,35,0.06)] hover:border-[var(--burgundy)] hover:bg-white",
  ghost:
    "border-transparent bg-transparent text-[var(--burgundy)] hover:bg-[var(--burgundy-soft)]",
};

export function Button({
  className = "",
  disabled,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex min-h-12 items-center justify-center rounded-full border px-5 text-center text-sm font-semibold leading-none transition duration-200",
        "active:translate-y-px",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--burgundy)]",
        "disabled:cursor-not-allowed disabled:border-[var(--line-soft)] disabled:bg-[#eee1d5] disabled:text-[#a69288] disabled:shadow-none disabled:hover:bg-[#eee1d5]",
        variantClass[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled}
      type="button"
      {...props}
    />
  );
}
