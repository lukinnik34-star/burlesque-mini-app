"use client";

import { useState } from "react";
import { EventCard } from "@/components/EventCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScreenHeader } from "@/components/ui/ScreenHeader";
import { mockEvents } from "@/data/events";

type EventFilter = "all" | "today" | "soon";

const filters: { id: EventFilter; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "today", label: "Сегодня" },
  { id: "soon", label: "Скоро" },
];

export function EventsScreen() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(
    mockEvents[0]?.id ?? null,
  );
  const [activeFilter, setActiveFilter] = useState<EventFilter>("all");
  const selectedEvent =
    mockEvents.find((event) => event.id === selectedEventId) ?? null;
  const visibleEvents =
    activeFilter === "all"
      ? mockEvents
      : activeFilter === "today"
        ? mockEvents.slice(0, 1)
        : mockEvents.filter((event) => event.status !== "past");

  return (
    <div className="space-y-5">
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
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition active:translate-y-px",
                isActive
                  ? "border-[rgba(230,192,151,0.32)] bg-[rgba(255,178,183,0.12)] text-[var(--champagne)] shadow-[0_12px_24px_rgba(0,0,0,0.24)]"
                  : "border-[var(--line-soft)] bg-white/[0.04] text-[var(--muted)] hover:border-[var(--line-strong)] hover:bg-white/[0.06]",
              ].join(" ")}
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              type="button"
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4">
        {visibleEvents.map((event, index) => (
          <EventCard
            event={event}
            isFeatured={index === 0 && activeFilter !== "today"}
            isSelected={event.id === selectedEventId}
            key={event.id}
            onSelect={setSelectedEventId}
          />
        ))}
      </div>

      {selectedEvent ? (
        <Card className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--burgundy)]">
                Детали события
              </p>
              <p className="mt-2 font-serif text-2xl font-semibold leading-tight">
                {selectedEvent.title}
              </p>
            </div>
            <Badge className="px-2.5 text-[11px]">Демо</Badge>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[var(--surface-soft)] px-3 py-3">
              <p className="text-xs text-[var(--muted)]">Дата</p>
              <p className="mt-1 text-sm font-semibold text-[var(--text)]">
                {selectedEvent.dateLabel}
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--surface-soft)] px-3 py-3">
              <p className="text-xs text-[var(--muted)]">Время</p>
              <p className="mt-1 text-sm font-semibold text-[var(--text)]">
                {selectedEvent.timeLabel}
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--surface-soft)] px-3 py-3">
              <p className="text-xs text-[var(--muted)]">Локация</p>
              <p className="mt-1 truncate text-sm font-semibold text-[var(--text)]">
                {selectedEvent.locationLabel}
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--surface-soft)] px-3 py-3">
              <p className="text-xs text-[var(--muted)]">Бронирование</p>
              <p className="mt-1 text-sm font-semibold text-[var(--text)]">
                Следующий этап
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
            {selectedEvent.description}
          </p>
          <p className="mt-4 rounded-2xl border border-[var(--line-soft)] bg-white/[0.05] px-3 py-2 text-xs leading-5 text-[var(--muted-strong)]">
            Демо-режим. Бронирование, регистрация и оплата будут подключены
            позже.
          </p>
        </Card>
      ) : null}
    </div>
  );
}
