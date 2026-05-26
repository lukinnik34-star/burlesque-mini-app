import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={[
        "rounded-[28px] border border-[var(--line-soft)] bg-[var(--surface)] p-4 text-[var(--text)] shadow-[var(--shadow-card)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
