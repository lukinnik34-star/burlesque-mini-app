import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { MockEvent } from "@/types/mocks";

const eventStatusLabel = {
  upcoming: "Скоро",
  sold_out: "Мест нет",
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
          "editorial-card-reveal tap-lift relative overflow-hidden rounded-[32px] border border-[rgba(214,184,255,0.22)] bg-[linear-gradient(145deg,#191021_0%,#3f1738_56%,#110c18_100%)] text-white shadow-[0_22px_56px_rgba(0,0,0,0.46)] transition duration-200",
          isSelected ? "ring-2 ring-[var(--lavender)]" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {event.coverSrc ? (
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-50 mix-blend-screen"
            style={{ backgroundImage: `url(${event.coverSrc})` }}
          />
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(185,156,255,0.26),transparent_30%),linear-gradient(145deg,rgba(15,10,21,0.58),rgba(67,26,57,0.76))]" />

        <div className="relative p-4">
          <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
            <span>{event.dateLabel}</span>
            <span>{event.timeLabel}</span>
            <Badge>{eventStatusLabel[event.status]}</Badge>
          </div>

          <div className="mt-9 max-w-[17rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lavender)]">
              {event.imageLabel ?? "Event"}
            </p>
            <h3 className="mt-2 font-serif text-[31px] font-semibold leading-none text-white">
              {event.title}
            </h3>
            {event.subtitle ? (
              <p className="mt-3 text-sm leading-6 text-white/78">
                {event.subtitle}
              </p>
            ) : null}
          </div>
        </div>

        <div className="relative space-y-3 border-t border-white/10 bg-black/24 p-4 backdrop-blur-sm">
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <span
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/78"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/[0.08] px-3 py-2.5">
            <div className="min-w-0">
              <p className="text-xs text-white/56">Зал</p>
              <p className="truncate text-sm font-semibold text-white">
                {event.locationLabel}
              </p>
            </div>
            {onSelect ? (
              <Button
                className="min-h-9 shrink-0 px-4 text-xs"
                disabled={event.status === "past"}
                onClick={() => onSelect(event.id)}
              >
                {event.ctaLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  return (
    <Card
      className={[
        "tap-lift rounded-[28px] p-4 transition duration-200 hover:border-[var(--line-strong)] hover:bg-white/[0.06]",
        isSelected ? "border-[var(--line-strong)] bg-white/[0.07]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center gap-4">
        <div
          className="grid size-[78px] shrink-0 place-items-center rounded-[24px] border border-[var(--line-soft)] bg-[var(--surface-soft)] bg-cover bg-center text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--lavender)] shadow-[0_10px_22px_rgba(0,0,0,0.24)]"
          style={
            event.coverSrc
              ? {
                  backgroundImage: `linear-gradient(rgba(12,8,17,0.28),rgba(12,8,17,0.28)),url(${event.coverSrc})`,
                }
              : undefined
          }
        >
          {event.coverSrc ? null : (event.imageLabel ?? "Event")}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--lavender)]">
                {event.dateLabel} · {event.timeLabel}
              </p>
              <h3 className="mt-1.5 text-lg font-semibold leading-tight text-[var(--text)]">
                {event.title}
              </h3>
            </div>
            <Badge className="shrink-0 px-2.5 text-[11px]">
              {eventStatusLabel[event.status]}
            </Badge>
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-5 text-[var(--muted)]">
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
            className="min-h-9 shrink-0 px-4 text-xs"
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
