import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={[
        "editorial-card-reveal rounded-[30px] border border-[var(--line-soft)] bg-[var(--surface)] p-5 text-[var(--text)] shadow-[var(--shadow-card)] backdrop-blur-xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
