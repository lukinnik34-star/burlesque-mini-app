"use client";

import { useEffect, useState } from "react";
import { EventCard } from "@/components/EventCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScreenHeader } from "@/components/ui/ScreenHeader";
import { mockEvents } from "@/data/events";
import type { MockEvent } from "@/types/mocks";

type EventFilter = "all" | "today" | "soon";

const filters: { id: EventFilter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "today", label: "Сегодня" },
  { id: "soon", label: "Скоро" },
];

function getVisibleEvents(filter: EventFilter) {
  if (filter === "today") {
    return mockEvents.slice(0, 1);
  }

  if (filter === "soon") {
    return mockEvents.filter((event) => event.status !== "past");
  }

  return mockEvents;
}

function EventDetailSheet({
  event,
  onClose,
}: {
  event: MockEvent;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-40 flex items-end justify-center bg-black/62 px-3 pb-[calc(env(safe-area-inset-bottom)+12px)] backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="screen-soft-enter max-h-[82vh] w-full max-w-md overflow-hidden rounded-t-[34px] border border-[rgba(214,184,255,0.2)] bg-[linear-gradient(180deg,rgba(31,22,42,0.96),rgba(13,9,18,0.98))] shadow-[0_-24px_70px_rgba(0,0,0,0.58)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-white/18" />

        <div className="max-h-[calc(82vh-18px)] overflow-y-auto p-5 pt-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lavender)]">
                Детали события
              </p>
              <h3 className="mt-2 font-serif text-[30px] font-semibold leading-none text-[var(--text)]">
                {event.title}
              </h3>
            </div>
            <button
              aria-label="Закрыть детали события"
              className="tap-lift grid size-10 shrink-0 place-items-center rounded-full border border-[var(--line-soft)] bg-white/[0.06] text-xl leading-none text-[var(--muted-strong)] transition hover:border-[var(--line-strong)] hover:bg-white/[0.09]"
              onClick={onClose}
              type="button"
            >
              ×
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {[
              ["Дата", event.dateLabel],
              ["Время", event.timeLabel],
              ["Локация", event.locationLabel],
              ["Статус", "Будет позже"],
            ].map(([label, value]) => (
              <div
                className="rounded-2xl border border-[var(--line-soft)] bg-white/[0.05] px-3 py-3"
                key={label}
              >
                <p className="text-xs text-[var(--muted)]">{label}</p>
                <p className="mt-1 truncate text-sm font-semibold text-[var(--text)]">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-6 text-[var(--muted-strong)]">
            {event.description}
          </p>

          <div className="mt-5 rounded-2xl border border-[var(--line-soft)] bg-white/[0.05] px-3 py-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-[var(--text)]">
                Бронирование появится в следующем этапе.
              </p>
              <Badge className="px-2.5 text-[11px]">Демо</Badge>
            </div>
            <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
              Регистрация и оплата будут подключены позже.
            </p>
          </div>

          <Button className="mt-5 w-full" onClick={onClose} variant="secondary">
            Понятно
          </Button>
        </div>
      </div>
    </div>
  );
}

export function EventsScreen() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(
    mockEvents[0]?.id ?? null,
  );
  const [activeFilter, setActiveFilter] = useState<EventFilter>("all");
  const [sheetEvent, setSheetEvent] = useState<MockEvent | null>(null);
  const visibleEvents = getVisibleEvents(activeFilter);

  function handleFilterChange(filter: EventFilter) {
    const nextEvents = getVisibleEvents(filter);

    setActiveFilter(filter);
    setSelectedEventId(nextEvents[0]?.id ?? null);
  }

  function handleOpenEvent(eventId: string) {
    const event = mockEvents.find((item) => item.id === eventId) ?? null;

    setSelectedEventId(eventId);
    setSheetEvent(event);
  }

  return (
    <>
      <div className="space-y-5 pb-[170px]">
        <ScreenHeader
          title="Афиша"
          subtitle="Ближайшие события Burlesque. Бронирование появится в следующем этапе."
        />

        <div className="flex gap-2 overflow-x-auto pb-1">
          {filters.map((filter) => {
            const isActive = filter.id === activeFilter;

            return (
              <button
                className={[
                  "tap-lift shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
                  isActive
                    ? "border-[rgba(214,184,255,0.34)] bg-[rgba(185,156,255,0.18)] text-[var(--lavender)] shadow-[0_12px_24px_rgba(143,109,255,0.14)]"
                    : "border-[var(--line-soft)] bg-white/[0.04] text-[var(--muted)] hover:border-[var(--line-strong)] hover:bg-white/[0.06]",
                ].join(" ")}
                key={filter.id}
                onClick={() => handleFilterChange(filter.id)}
                type="button"
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-4">
          {visibleEvents.map((event, index) => (
            <div
              className="editorial-card-reveal"
              key={event.id}
              style={{ animationDelay: `${index * 45}ms` }}
            >
              <EventCard
                event={event}
                isFeatured={index === 0 && activeFilter !== "today"}
                isSelected={event.id === selectedEventId}
                onSelect={handleOpenEvent}
              />
            </div>
          ))}
        </div>
      </div>

      {sheetEvent ? (
        <EventDetailSheet
          event={sheetEvent}
          onClose={() => setSheetEvent(null)}
        />
      ) : null}
    </>
  );
}
