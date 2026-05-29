"use client";

import { useState } from "react";
import { BottomSheet } from "@/components/BottomSheet";
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
  return (
    <BottomSheet
      eyebrow="Детали события"
      footer={
        <Button className="w-full" onClick={onClose} variant="secondary">
          Понятно
        </Button>
      }
      onClose={onClose}
      title={event.title}
    >
      <div className="grid grid-cols-2 gap-2.5">
        {[
          ["Дата", event.dateLabel],
          ["Время", event.timeLabel],
          ["Локация", event.locationLabel],
          ["Статус", "Будет позже"],
        ].map(([label, value]) => (
          <div
            className="rounded-2xl border border-[var(--line-soft)] bg-white/[0.05] px-3 py-2.5"
            key={label}
          >
            <p className="text-xs text-[var(--muted)]">{label}</p>
            <p className="mt-1 truncate text-sm font-semibold text-[var(--text)]">
              {value}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-sm leading-6 text-[var(--muted-strong)]">
        {event.description}
      </p>

      <div className="mt-4 rounded-2xl bg-white/[0.05] px-3 py-2.5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-[var(--text)]">
            Бронирование появится в следующем этапе.
          </p>
          <Badge className="px-2.5 text-[11px]">Демо</Badge>
        </div>
        <p className="mt-1.5 text-xs leading-5 text-[var(--muted)]">
          Регистрация и оплата будут подключены позже.
        </p>
      </div>
    </BottomSheet>
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
