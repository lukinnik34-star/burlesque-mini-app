import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { MockEvent } from "@/types/mocks";

const eventStatusLabel = {
  upcoming: "Скоро",
  sold_out: "Sold out",
  past: "Прошло",
  mock: "Демо",
};

type EventCardProps = {
  event: MockEvent;
  isFeatured?: boolean;
  isSelected?: boolean;
  onSelect?: (eventId: string) => void;
};

export function EventCard({
  event,
  isFeatured = false,
  isSelected,
  onSelect,
}: EventCardProps) {
  if (isFeatured) {
    return (
      <article
        className={[
          "relative overflow-hidden rounded-[32px] bg-[linear-gradient(145deg,#241b22_0%,#5e1b24_58%,#7a2732_100%)] text-white shadow-[0_20px_52px_rgba(0,0,0,0.42)] transition duration-200",
          isSelected ? "ring-2 ring-[var(--champagne)]" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {event.coverSrc ? (
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: `url(${event.coverSrc})` }}
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(20,15,19,0.92)_0%,rgba(94,27,36,0.78)_58%,rgba(17,17,19,0.78)_100%)]" />
        <div className="relative p-5">
          <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute bottom-4 right-5 font-serif text-[86px] leading-none text-white/10">
            B
          </div>
          <div className="relative flex items-start justify-between gap-3">
            <div className="grid size-14 place-items-center rounded-2xl border border-[rgba(230,192,151,0.24)] bg-white/10 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--champagne)]">
              {event.imageLabel ?? "Event"}
            </div>
            <span className="inline-flex min-h-7 items-center rounded-full border border-white/28 bg-white/18 px-3 py-1 text-xs font-semibold text-white">
              {eventStatusLabel[event.status]}
            </span>
          </div>
          <div className="relative mt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/78">
              {event.dateLabel} · {event.timeLabel}
            </p>
            <h3 className="mt-2 font-serif text-[30px] font-semibold leading-tight text-white">
              {event.title}
            </h3>
            {event.subtitle ? (
              <p className="mt-2 text-sm leading-6 text-white/84">
                {event.subtitle}
              </p>
            ) : null}
          </div>
        </div>

        <div className="relative space-y-4 border-t border-white/10 bg-black/22 p-4 backdrop-blur-[2px]">
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <span
                className="rounded-full bg-white/14 px-3 py-1 text-xs font-semibold text-white/86"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/14 px-3 py-3">
            <div className="min-w-0">
              <p className="text-xs text-white/66">Зал</p>
              <p className="truncate text-sm font-semibold text-white">
                {event.locationLabel}
              </p>
            </div>
            {onSelect ? (
              <button
                className="min-h-10 shrink-0 rounded-full border border-[rgba(230,192,151,0.28)] bg-white/[0.08] px-4 text-xs font-semibold text-[var(--champagne)] shadow-[0_10px_22px_rgba(0,0,0,0.22)] transition hover:bg-white/[0.12] active:translate-y-px disabled:cursor-not-allowed disabled:bg-white/[0.04] disabled:text-white/40"
                disabled={event.status === "past"}
                onClick={() => onSelect(event.id)}
                type="button"
              >
                {event.ctaLabel}
              </button>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  return (
    <Card
      className={[
        "rounded-[28px] p-4 transition duration-200 hover:border-[var(--line-strong)] hover:bg-white/[0.06]",
        isSelected ? "border-[var(--line-strong)] bg-white/[0.07]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-start gap-4">
        <div
          className="grid size-[82px] shrink-0 place-items-center rounded-[24px] bg-[var(--surface-soft)] bg-cover bg-center text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--champagne)] shadow-[0_10px_22px_rgba(0,0,0,0.24)]"
          style={
            event.coverSrc
              ? {
                  backgroundImage: `linear-gradient(rgba(17,17,19,0.18),rgba(17,17,19,0.18)),url(${event.coverSrc})`,
                }
              : undefined
          }
        >
          {event.coverSrc ? null : (event.imageLabel ?? "Event")}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--burgundy)]">
                {event.dateLabel} · {event.timeLabel}
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-tight text-[var(--text)]">
                {event.title}
              </h3>
            </div>
            <Badge className="shrink-0 px-2.5 text-[11px]">
              {eventStatusLabel[event.status]}
            </Badge>
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--muted)]">
            {event.description}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-white/[0.05] px-3 py-3">
        <p className="min-w-0 truncate text-sm font-semibold text-[var(--muted-strong)]">
          {event.locationLabel}
        </p>
        {onSelect ? (
          <Button
            className="min-h-10 shrink-0 px-4 text-xs"
            disabled={event.status === "past"}
            onClick={() => onSelect(event.id)}
          >
            {event.ctaLabel}
          </Button>
        ) : null}
      </div>
    </Card>
  );
}
