import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: ButtonVariant;
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "border-[rgba(255,178,183,0.34)] bg-[linear-gradient(135deg,#8d3543,#5e1b24)] text-[#fff7f4] shadow-[0_16px_32px_rgba(94,27,36,0.34)] hover:border-[rgba(230,192,151,0.42)]",
  secondary:
    "border-[var(--line-soft)] bg-white/[0.06] text-[var(--champagne)] shadow-[0_10px_24px_rgba(0,0,0,0.18)] hover:border-[rgba(230,192,151,0.34)] hover:bg-white/[0.09]",
  ghost:
    "border-transparent bg-transparent text-[var(--champagne)] hover:bg-white/[0.07]",
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
        "disabled:cursor-not-allowed disabled:border-[var(--line-soft)] disabled:bg-white/[0.05] disabled:text-[#7d7070] disabled:shadow-none disabled:hover:bg-white/[0.05]",
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
