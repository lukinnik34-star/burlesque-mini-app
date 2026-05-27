type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function ScreenHeader({
  title,
  subtitle,
  className = "",
}: ScreenHeaderProps) {
  return (
    <header className={["space-y-3.5", className].filter(Boolean).join(" ")}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--burgundy)]">
        Burlesque Mini App
      </p>
      <h2 className="font-serif text-[38px] font-semibold leading-[0.98] text-[var(--text)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-[21rem] text-[15px] leading-7 text-[var(--muted)]">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
