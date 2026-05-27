"use client";

import { useState } from "react";
import { BottomNav } from "@/components/BottomNav";
import { useDemoState } from "@/features/demo-state/useDemoState";
import { EventsScreen } from "@/features/screens/EventsScreen";
import { GamesScreen } from "@/features/screens/GamesScreen";
import { HomeScreen } from "@/features/screens/HomeScreen";
import { PrizesScreen } from "@/features/screens/PrizesScreen";
import { ProfileScreen } from "@/features/screens/ProfileScreen";
import { useTelegramRuntime } from "@/features/telegram/useTelegramRuntime";
import type { AppTab } from "@/types/navigation";

const SHOW_DEBUG_PANEL = false;

export function AppShell() {
  const [activeTab, setActiveTab] = useState<AppTab>("home");
  const demo = useDemoState();
  const runtimeInfo = useTelegramRuntime();

  const screen = {
    home: (
      <HomeScreen
        onOpenEvents={() => setActiveTab("events")}
        onOpenPrizes={() => setActiveTab("prizes")}
        runtimeInfo={runtimeInfo}
      />
    ),
    events: <EventsScreen />,
    games: (
      <GamesScreen
        demoState={demo.demoState}
        onPreviewGame={demo.previewGame}
        selectedGame={demo.selectedGame}
      />
    ),
    prizes: (
      <PrizesScreen
        onSelectPrize={demo.selectPrize}
        selectedPrize={demo.selectedPrize}
      />
    ),
    profile: (
      <ProfileScreen
        demoState={demo.demoState}
        runtimeInfo={runtimeInfo}
        selectedGame={demo.selectedGame}
        selectedPrize={demo.selectedPrize}
      />
    ),
  }[activeTab];

  return (
    <main className="premium-scrollbar min-h-tg overflow-x-hidden bg-[var(--app-bg)] text-[var(--text)]">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(246,217,200,0.72),transparent_70%)]" />
      <div className="relative mx-auto flex min-h-tg w-full max-w-md flex-col px-5 pb-[calc(env(safe-area-inset-bottom)+148px)] pt-[calc(env(safe-area-inset-top)+18px)]">
        <header className="mb-7 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--burgundy)] font-serif text-xl font-semibold text-white shadow-[0_14px_28px_rgba(143,29,47,0.18)]">
              B
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-base font-semibold leading-tight text-[var(--text)]">
                Burlesque Mini App
              </h1>
              <p className="mt-0.5 truncate text-xs text-[var(--muted)]">
                мини-приложение
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--line-soft)] bg-white/68 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--burgundy)] shadow-[var(--shadow-card)]">
            MVP
          </div>
        </header>

        <section className="min-h-[360px]">{screen}</section>

        {SHOW_DEBUG_PANEL ? (
          <section className="mt-5 rounded-[28px] border border-[var(--line-soft)] bg-white/70 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Shell status
            </p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-[var(--surface-soft)] p-3">
                <p className="text-[var(--muted)]">Навигация</p>
                <p className="mt-1 font-medium text-[var(--burgundy)]">
                  {activeTab}
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--surface-soft)] p-3">
                <p className="text-[var(--muted)]">Demo state</p>
                <p className="mt-1 font-medium text-[var(--burgundy)]">
                  {demo.demoState.sessionStatus}
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--surface-soft)] p-3">
                <p className="text-[var(--muted)]">Telegram</p>
                <p className="mt-1 font-medium text-[var(--burgundy)]">
                  {runtimeInfo.status}
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--surface-soft)] p-3">
                <p className="text-[var(--muted)]">Storage</p>
                <p className="mt-1 font-medium text-[var(--burgundy)]">
                  Session only
                </p>
              </div>
            </div>
          </section>
        ) : null}
      </div>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  );
}
