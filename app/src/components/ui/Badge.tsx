import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  className?: string;
};

export function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex min-h-7 max-w-full items-center rounded-full border border-[var(--line-soft)] bg-white/[0.07] px-3 py-1 text-[11px] font-semibold text-[var(--champagne)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
