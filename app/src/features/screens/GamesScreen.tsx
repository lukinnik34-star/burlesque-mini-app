"use client";

import { useState } from "react";
import { BottomSheet } from "@/components/BottomSheet";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScreenHeader } from "@/components/ui/ScreenHeader";
import { burlesqueAssets } from "@/data/assets";
import { mockGames } from "@/data/games";
import { ScratchCardDemo } from "@/features/games/scratch-card/ScratchCardDemo";
import { WheelOfPrizesDemo } from "@/features/games/wheel-of-prizes/WheelOfPrizesDemo";
import type { DemoState } from "@/types/demo-state";
import type { MockGame } from "@/types/mocks";

const gameStatusLabel = {
  available: "Демо",
  coming_soon: "Скоро",
  locked: "Позже",
};

type GamesScreenProps = {
  demoState: DemoState;
  selectedGame: MockGame | null;
  onPreviewGame: (gameId: string) => void;
};

export function GamesScreen({
  demoState,
  selectedGame,
  onPreviewGame,
}: GamesScreenProps) {
  const [sheetGame, setSheetGame] = useState<MockGame | null>(null);

  function handleOpenGame(game: MockGame) {
    onPreviewGame(game.id);
    setSheetGame(game);
  }

  return (
    <>
      <div className="space-y-5 pb-[170px]">
        <ScreenHeader
          title="Игры"
          subtitle="Демо-механики для будущих клубных розыгрышей. Призы пока не выдаются."
        />

        <div className="grid gap-3">
          {mockGames.map((game) => {
            const isAvailable = game.status === "available";
            const isSelected =
              game.id === demoState.selectedGameId || game.id === selectedGame?.id;
            const isScratch = game.id === "scratch-card";
            const visualSrc = isScratch
              ? burlesqueAssets.games.scratchCard
              : burlesqueAssets.games.wheelOfPrizes;

            return (
              <Card
                className={[
                  "tap-lift overflow-hidden p-0 transition duration-200 hover:border-[var(--line-strong)] hover:bg-white/[0.06]",
                  isSelected
                    ? "border-[var(--line-strong)] bg-white/[0.08] shadow-[0_18px_42px_rgba(143,109,255,0.18)]"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                key={game.id}
              >
                <div className="flex min-h-[136px] items-stretch">
                  <div className="relative w-[38%] shrink-0 overflow-hidden bg-[linear-gradient(145deg,#1b1024,#3d1740)]">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(185,156,255,0.28),transparent_38%),radial-gradient(circle_at_20%_10%,rgba(123,51,79,0.26),transparent_36%)]" />
                    <div className="pointer-events-none absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(214,184,255,0.12)] bg-white/[0.04]" />
                    <div
                      className={[
                        "absolute bg-contain bg-center bg-no-repeat drop-shadow-[0_16px_24px_rgba(0,0,0,0.34)]",
                        isScratch
                          ? "left-1/2 top-1/2 h-[106px] w-[122px] -translate-x-1/2 -translate-y-1/2 rotate-[-7deg]"
                          : "left-1/2 top-1/2 size-[108px] -translate-x-1/2 -translate-y-1/2",
                      ].join(" ")}
                      style={{ backgroundImage: `url(${visualSrc})` }}
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between p-3">
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--lavender)]">
                          {isScratch ? "Promo card" : "Prize wheel"}
                        </p>
                        <Badge className="px-2.5 text-[11px]">
                          {gameStatusLabel[game.status]}
                        </Badge>
                      </div>
                      <h3 className="mt-1.5 font-serif text-[22px] font-semibold leading-tight text-[var(--text)]">
                        {game.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-5 text-[var(--muted)]">
                        {game.description}
                      </p>
                    </div>
                    <Button
                      className="mt-3 min-h-8 w-full px-4 text-xs"
                      disabled={!isAvailable}
                      onClick={() => handleOpenGame(game)}
                    >
                      {game.actionLabel}
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {sheetGame ? (
        <BottomSheet
          eyebrow="Демо-механика"
          onClose={() => setSheetGame(null)}
          title={sheetGame.title}
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-sm leading-6 text-[var(--muted-strong)]">
              Демо-механика. Результат не сохраняется, призы пока не выдаются.
            </p>
            <Badge className="shrink-0 px-2.5 text-[11px]">Демо</Badge>
          </div>

          {sheetGame.id === "scratch-card" ? (
            <ScratchCardDemo embedded />
          ) : (
            <WheelOfPrizesDemo embedded />
          )}
        </BottomSheet>
      ) : null}
    </>
  );
}
