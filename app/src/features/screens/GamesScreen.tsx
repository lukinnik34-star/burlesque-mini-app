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
  const isDemoPreview = demoState.sessionStatus === "preview";
  const showScratchDemo = selectedGame?.id === "scratch-card" && isDemoPreview;
  const showWheelDemo =
    selectedGame?.id === "wheel-of-prizes" && isDemoPreview;

  return (
    <div className="space-y-5">
      <ScreenHeader
        title="Игры"
        subtitle="Демо-механики для будущих клубных розыгрышей. Призы пока не выдаются."
      />

      <div className="grid gap-4">
        {mockGames.map((game) => {
          const isAvailable = game.status === "available";
          const isSelected = game.id === demoState.selectedGameId;
          const isScratch = game.id === "scratch-card";
          const visualSrc = isScratch
            ? burlesqueAssets.games.scratchCard
            : burlesqueAssets.games.wheelOfPrizes;

          return (
            <Card
              className={[
                "overflow-hidden p-0 transition duration-200 hover:border-[var(--line-strong)] hover:bg-[#fffaf3]",
                isSelected ? "border-[var(--line-strong)] bg-[#fff9f1]" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              key={game.id}
            >
              <div
                className={[
                  "relative min-h-40 overflow-hidden p-5",
                  isScratch
                    ? "bg-[linear-gradient(145deg,#fff8ef_0%,#f6d9c8_100%)]"
                    : "bg-[linear-gradient(145deg,#fff8ef_0%,#ead0a2_100%)]",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute -right-7 -top-8 size-32 rounded-full bg-white/45" />
                <div className="pointer-events-none absolute bottom-0 right-0 size-40 rounded-full bg-white/28 blur-xl" />
                {isScratch ? (
                  <div
                    className="pointer-events-none absolute -bottom-1 right-1 h-[132px] w-[152px] rotate-[-7deg] bg-contain bg-center bg-no-repeat opacity-95 drop-shadow-[0_16px_24px_rgba(122,60,35,0.16)]"
                    style={{ backgroundImage: `url(${visualSrc})` }}
                  />
                ) : (
                  <div
                    className="pointer-events-none absolute bottom-1 right-3 size-[138px] bg-contain bg-center bg-no-repeat opacity-95 drop-shadow-[0_16px_24px_rgba(122,60,35,0.16)]"
                    style={{ backgroundImage: `url(${visualSrc})` }}
                  />
                )}
                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div className="max-w-[12rem]">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--burgundy)]">
                      {isScratch ? "Promo card" : "Prize wheel"}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-[var(--text)]">
                      {game.title}
                    </h3>
                  </div>
                  <Badge className="px-2.5 text-[11px]">
                    {gameStatusLabel[game.status]}
                  </Badge>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm leading-6 text-[var(--muted)]">
                  {game.description}
                </p>
                <Button
                  className="mt-5 w-full"
                  disabled={!isAvailable}
                  onClick={() => onPreviewGame(game.id)}
                >
                  {game.actionLabel}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {showScratchDemo ? <ScratchCardDemo /> : null}
      {showWheelDemo ? <WheelOfPrizesDemo /> : null}

      {selectedGame && !showScratchDemo && !showWheelDemo ? (
        <Card>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm text-[var(--muted)]">Демо-режим</p>
              <p className="mt-1 text-lg font-semibold text-[var(--burgundy)]">
                {selectedGame.title}
              </p>
            </div>
            <Badge>Демо</Badge>
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
            Визуальный сценарий без сохранения результата и выдачи приза.
          </p>
        </Card>
      ) : null}
    </div>
  );
}
