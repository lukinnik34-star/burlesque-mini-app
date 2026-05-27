import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  className?: string;
};

export function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex min-h-7 max-w-full items-center rounded-full border border-[var(--line-soft)] bg-white/64 px-3 py-1 text-[11px] font-semibold text-[var(--burgundy)] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
