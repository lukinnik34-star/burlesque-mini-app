import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { MockEvent } from "@/types/mocks";

const eventStatusLabel = {
  upcoming: "Скоро",
  sold_out: "Sold out",
  past: "Прошло",
  mock: "Demo",
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
          "relative overflow-hidden rounded-[32px] bg-[linear-gradient(145deg,#741522_0%,#8f1d2f_58%,#b36b58_100%)] text-white shadow-[0_18px_42px_rgba(143,29,47,0.24)]",
          isSelected ? "ring-2 ring-[var(--champagne)]" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {event.coverSrc ? (
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-62"
            style={{ backgroundImage: `url(${event.coverSrc})` }}
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(73,10,21,0.9)_0%,rgba(143,29,47,0.78)_58%,rgba(64,13,21,0.72)_100%)]" />
        <div className="relative p-5">
          <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute bottom-4 right-5 font-serif text-[86px] leading-none text-white/10">
            B
          </div>
          <div className="relative flex items-start justify-between gap-3">
            <div className="grid size-14 place-items-center rounded-2xl border border-white/24 bg-white/14 text-xs font-semibold uppercase tracking-[0.14em] text-white">
              {event.imageLabel ?? "Event"}
            </div>
            <span className="inline-flex min-h-7 items-center rounded-full border border-white/24 bg-white/16 px-3 py-1 text-xs font-semibold text-white">
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
              <p className="mt-2 text-sm leading-6 text-white/82">
                {event.subtitle}
              </p>
            ) : null}
          </div>
        </div>

        <div className="relative space-y-4 border-t border-white/14 bg-[#64111d]/42 p-4 backdrop-blur-[1px]">
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
                className="min-h-10 shrink-0 rounded-full bg-white px-4 text-xs font-semibold text-[var(--burgundy)] shadow-[0_10px_22px_rgba(70,12,20,0.18)] transition hover:bg-[#fff7ee] disabled:cursor-not-allowed disabled:bg-white/40 disabled:text-white/70"
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
        "rounded-[28px] p-4",
        isSelected ? "border-[var(--line-strong)] bg-[#fff9f1]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-start gap-4">
        <div
          className="grid size-[72px] shrink-0 place-items-center rounded-[24px] bg-[var(--surface-soft)] bg-cover bg-center text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--burgundy)] shadow-[0_10px_22px_rgba(122,60,35,0.08)]"
          style={
            event.coverSrc
              ? {
                  backgroundImage: `linear-gradient(rgba(255,247,234,0.18),rgba(255,247,234,0.18)),url(${event.coverSrc})`,
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

      <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-[var(--surface-soft)] px-3 py-3">
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
