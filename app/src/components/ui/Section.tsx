import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={["space-y-4", className].filter(Boolean).join(" ")}>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--burgundy)]">
          {title}
        </h3>
        {description ? (
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
