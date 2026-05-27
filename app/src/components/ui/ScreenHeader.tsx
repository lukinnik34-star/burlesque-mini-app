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
    <header className={["space-y-2", className].filter(Boolean).join(" ")}>
      <h2 className="font-serif text-[30px] font-semibold leading-tight text-[var(--text)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-[21rem] text-sm leading-6 text-[var(--muted)]">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
