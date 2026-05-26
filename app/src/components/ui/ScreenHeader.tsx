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
    <header className={["space-y-3", className].filter(Boolean).join(" ")}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--burgundy)]">
        Burlesque Mini App
      </p>
      <h2 className="font-serif text-[34px] font-semibold leading-tight text-[var(--text)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base leading-7 text-[var(--muted)]">{subtitle}</p>
      ) : null}
    </header>
  );
}
