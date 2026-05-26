"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { BottomNav } from "@/components/BottomNav";
import { useDemoState } from "@/features/demo-state/useDemoState";
import { EventsScreen } from "@/features/screens/EventsScreen";
import { GamesScreen } from "@/features/screens/GamesScreen";
import { HomeScreen } from "@/features/screens/HomeScreen";
import { PrizesScreen } from "@/features/screens/PrizesScreen";
import { ProfileScreen } from "@/features/screens/ProfileScreen";
import {
  callTelegramReady,
  expandTelegramWebApp,
  getCurrentUser,
  getTelegramThemeParams,
  isTelegramMiniApp,
} from "@/lib/telegram";
import type { AppTab } from "@/types/navigation";
import type { TelegramWebAppUser } from "@/types/telegram";

type TelegramSnapshot = {
  isTelegram: boolean;
  themeNote: string;
  user: TelegramWebAppUser;
};

const SHOW_DEBUG_PANEL = false;

const serverSnapshot: TelegramSnapshot = {
  isTelegram: false,
  themeNote: "Theme params недоступны",
  user: getCurrentUser(),
};

let cachedSnapshot = serverSnapshot;
let cachedSnapshotKey = "";

function getTelegramSnapshot(): TelegramSnapshot {
  const themeParams = getTelegramThemeParams();
  const user = getCurrentUser();
  const snapshot = {
    isTelegram: isTelegramMiniApp(),
    themeNote:
      Object.keys(themeParams).length > 0
        ? "Theme params доступны"
        : "Theme params недоступны",
    user,
  };
  const snapshotKey = JSON.stringify(snapshot);

  if (snapshotKey !== cachedSnapshotKey) {
    cachedSnapshot = snapshot;
    cachedSnapshotKey = snapshotKey;
  }

  return cachedSnapshot;
}

function subscribeToTelegramSnapshot(onStoreChange: () => void) {
  const timeoutId = window.setTimeout(onStoreChange, 0);

  return () => window.clearTimeout(timeoutId);
}

export function AppShell() {
  const [activeTab, setActiveTab] = useState<AppTab>("home");
  const demo = useDemoState();
  const { isTelegram, themeNote, user } = useSyncExternalStore(
    subscribeToTelegramSnapshot,
    getTelegramSnapshot,
    () => serverSnapshot,
  );

  useEffect(() => {
    callTelegramReady();
    expandTelegramWebApp();
  }, []);

  const screen = {
    home: (
      <HomeScreen
        onOpenEvents={() => setActiveTab("events")}
        onOpenPrizes={() => setActiveTab("prizes")}
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
        isTelegram={isTelegram}
        selectedGame={demo.selectedGame}
        selectedPrize={demo.selectedPrize}
        user={user}
      />
    ),
  }[activeTab];

  return (
    <main className="premium-scrollbar min-h-tg overflow-x-hidden bg-[var(--app-bg)] text-[var(--text)]">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(246,217,200,0.72),transparent_70%)]" />
      <div className="relative mx-auto flex min-h-tg w-full max-w-md flex-col px-4 pb-[calc(env(safe-area-inset-bottom)+140px)] pt-[calc(env(safe-area-inset-top)+16px)] sm:px-5">
        <header className="mb-5 flex items-center justify-between gap-3">
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

          <div className="flex shrink-0 items-center gap-2">
            <button
              aria-label="Свернуть"
              className="grid size-9 place-items-center rounded-full border border-[var(--line-soft)] bg-white/70 text-sm font-semibold text-[var(--burgundy)] shadow-[var(--shadow-card)]"
              type="button"
            >
              ‹
            </button>
            <button
              aria-label="Меню"
              className="grid size-9 place-items-center rounded-full border border-[var(--line-soft)] bg-white/70 text-lg leading-none text-[var(--burgundy)] shadow-[var(--shadow-card)]"
              type="button"
            >
              ⋯
            </button>
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
                  {themeNote}
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
