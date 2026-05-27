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

export function WheelOfPrizesDemo() {
  const [status, setStatus] = useState<WheelDemoStatus>("idle");
  const isSpinning = status === "spinning";
  const isRevealed = status === "revealed";

  useEffect(() => {
    if (!isSpinning) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setStatus("revealed");
    }, 900);

    return () => window.clearTimeout(timeoutId);
  }, [isSpinning]);

  return (
    <Card className="overflow-hidden p-0">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm text-[var(--muted)]">Демо-механика</p>
            <h3 className="mt-1 font-serif text-2xl font-semibold text-[var(--text)]">
              Wheel Of Prizes
            </h3>
          </div>
          <Badge>{statusLabel[status]}</Badge>
        </div>
      </div>

      <div className="grid place-items-center px-5">
        <div className="relative grid size-64 place-items-center">
          <div className="absolute -top-1 z-10 h-0 w-0 border-x-[13px] border-t-[26px] border-x-transparent border-t-[var(--burgundy)] drop-shadow-[0_6px_10px_rgba(143,29,47,0.18)]" />
          <div className="absolute size-64 rounded-full bg-[var(--burgundy-soft)] blur-xl" />
          <div
            className={[
              "relative size-56 rounded-full border-[7px] border-[rgba(230,192,151,0.2)] bg-contain bg-center bg-no-repeat shadow-[0_20px_42px_rgba(0,0,0,0.32)] transition-transform duration-700",
              isSpinning ? "rotate-[540deg]" : "",
              isRevealed ? "rotate-[315deg]" : "",
            ].join(" ")}
            style={{
              backgroundImage: `url(${burlesqueAssets.games.wheelOfPrizes})`,
            }}
          >
            <div className="absolute inset-10 grid place-items-center rounded-full border border-[var(--line-soft)] bg-[var(--surface)]/92 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--burgundy)]">
                  Демо
                </p>
                <p className="mt-1 font-serif text-xl font-semibold text-[var(--text)]">
                  Wheel
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        {!isRevealed ? (
          <Button
            className="w-full"
            disabled={isSpinning}
            onClick={() => setStatus("spinning")}
          >
            {isSpinning ? "Демо вращается..." : "Запустить демо"}
          </Button>
        ) : (
          <Card className="rounded-[24px] bg-[var(--surface-soft)]">
            <p className="font-serif text-2xl font-semibold text-[var(--burgundy)]">
              {wheelDemoResult.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {wheelDemoResult.description}
            </p>
            <p className="mt-3 text-xs leading-5 text-[var(--muted-strong)]">
              {wheelDemoResult.note}
            </p>
          </Card>
        )}

        <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
          Результат не сохраняется. Призы пока не выдаются.
        </p>
      </div>
    </Card>
  );
}
