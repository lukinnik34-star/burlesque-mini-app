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
      <div className="pointer-events-none fixed inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_50%_0%,rgba(141,53,67,0.32),transparent_68%)]" />
      <div className="relative mx-auto flex min-h-tg w-full max-w-md flex-col px-5 pb-[calc(env(safe-area-inset-bottom)+136px)] pt-[calc(env(safe-area-inset-top)+14px)]">
        <header className="mb-4 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[rgba(230,192,151,0.24)] bg-[linear-gradient(145deg,#7a2732,#23181f)] font-serif text-lg font-semibold text-[var(--champagne)] shadow-[0_14px_30px_rgba(0,0,0,0.28)]">
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

          <div className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--line-soft)] bg-white/[0.06] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--champagne)] shadow-[var(--shadow-card)] backdrop-blur-xl">
            MVP
          </div>
        </header>

        <section className="min-h-[360px]">{screen}</section>

        {SHOW_DEBUG_PANEL ? (
          <section className="mt-5 rounded-[28px] border border-[var(--line-soft)] bg-white/[0.05] p-4">
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
