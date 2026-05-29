"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { burlesqueAssets } from "@/data/assets";
import { wheelDemoResult } from "@/features/games/wheel-of-prizes/wheelDemoData";
import type { WheelDemoStatus } from "@/features/games/wheel-of-prizes/types";

const statusLabel = {
  idle: "Готово",
  spinning: "Демо",
  revealed: "Открыто",
};

type WheelOfPrizesDemoProps = {
  embedded?: boolean;
};

export function WheelOfPrizesDemo({
  embedded = false,
}: WheelOfPrizesDemoProps) {
  const [status, setStatus] = useState<WheelDemoStatus>("idle");
  const isSpinning = status === "spinning";
  const isRevealed = status === "revealed";

  useEffect(() => {
    if (!isSpinning) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setStatus("revealed");
    }, 1180);

    return () => window.clearTimeout(timeoutId);
  }, [isSpinning]);

  const content = (
    <>
      {!embedded ? (
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm text-[var(--muted)]">Демо-механика</p>
            <h3 className="mt-1 font-serif text-2xl font-semibold text-[var(--text)]">
              Wheel Of Prizes
            </h3>
          </div>
          <Badge>{statusLabel[status]}</Badge>
        </div>
      ) : null}

      <div className="grid place-items-center">
        <div className="relative grid size-[238px] place-items-center">
          <div className="absolute -top-1 z-10 h-0 w-0 border-x-[11px] border-t-[23px] border-x-transparent border-t-[var(--lavender)] drop-shadow-[0_6px_10px_rgba(143,109,255,0.2)]" />
          <div className="absolute size-[230px] rounded-full bg-[radial-gradient(circle,rgba(185,156,255,0.22),rgba(123,51,79,0.08)_54%,transparent_70%)] blur-lg" />
          <div className="absolute size-[218px] rounded-full border border-[rgba(214,184,255,0.16)] bg-[conic-gradient(from_20deg,rgba(185,156,255,0.2),rgba(123,51,79,0.18),rgba(223,199,157,0.12),rgba(95,43,87,0.2),rgba(185,156,255,0.2))]" />
          <div
            className={[
              "relative size-[212px] rounded-full border-[5px] border-[rgba(214,184,255,0.24)] bg-[length:112%_112%] bg-center bg-no-repeat shadow-[0_18px_38px_rgba(0,0,0,0.34)] transition-transform duration-700",
              isSpinning ? "wheel-demo-spin" : "",
              isRevealed ? "rotate-[315deg]" : "",
            ].join(" ")}
            style={{
              backgroundImage: `url(${burlesqueAssets.games.wheelOfPrizes})`,
            }}
          >
            <div className="absolute inset-[72px] rounded-full border border-[var(--line-soft)] bg-[var(--surface)]/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]" />
          </div>
          <div className="pointer-events-none absolute grid size-[82px] place-items-center rounded-full border border-[var(--line-soft)] bg-[rgba(13,9,18,0.84)] text-center shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--lavender)]">
                Демо
              </p>
              <p className="mt-0.5 font-serif text-lg font-semibold text-[var(--text)]">
                Wheel
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-3.5">
        {!isRevealed ? (
          <Button
            className="w-full min-h-10"
            disabled={isSpinning}
            onClick={() => setStatus("spinning")}
          >
            {isSpinning ? "Демо вращается..." : "Запустить демо"}
          </Button>
        ) : (
          <div className="rounded-2xl bg-white/[0.05] px-3 py-2.5">
            <p className="font-semibold text-[var(--lavender)]">
              Пример результата
            </p>
            <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
              {wheelDemoResult.description} Результат не сохраняется.
            </p>
          </div>
        )}

        {!embedded ? (
          <p className="mt-3 text-xs leading-5 text-[var(--muted)]">
            Демо-механика. Результат не сохраняется, призы пока не выдаются.
          </p>
        ) : null}
      </div>
    </>
  );

  if (embedded) {
    return <div className="screen-soft-enter">{content}</div>;
  }

  return <Card className="screen-soft-enter overflow-hidden">{content}</Card>;
}
