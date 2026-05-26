import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  className?: string;
};

export function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex min-h-7 max-w-full items-center rounded-full border border-[var(--line-strong)] bg-[var(--burgundy-soft)] px-3 py-1 text-xs font-semibold text-[var(--burgundy)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
