import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: ButtonVariant;
};

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "border-[rgba(214,184,255,0.42)] bg-[linear-gradient(135deg,#b99cff,#7f5dff)] text-[#120c18] shadow-[0_14px_30px_rgba(143,109,255,0.28)] hover:border-[rgba(246,239,255,0.52)] hover:brightness-105",
  secondary:
    "border-[var(--line-soft)] bg-white/[0.06] text-[var(--text)] shadow-[0_10px_24px_rgba(0,0,0,0.18)] hover:border-[rgba(185,156,255,0.34)] hover:bg-white/[0.09]",
  ghost:
    "border-transparent bg-transparent text-[var(--lavender)] hover:bg-white/[0.07]",
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
        "inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-center text-sm font-semibold leading-none transition duration-200",
        "active:translate-y-px",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--lavender)]",
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
