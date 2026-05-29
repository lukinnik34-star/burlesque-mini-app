"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { burlesqueAssets } from "@/data/assets";
import { scratchCardDemoResult } from "@/features/games/scratch-card/scratchCardDemoData";
import type { ScratchCardDemoStatus } from "@/features/games/scratch-card/types";

type ScratchCardDemoProps = {
  embedded?: boolean;
};

export function ScratchCardDemo({ embedded = false }: ScratchCardDemoProps) {
  const [status, setStatus] = useState<ScratchCardDemoStatus>("closed");
  const isRevealing = status === "revealing";
  const isRevealed = status === "revealed";

  useEffect(() => {
    if (!isRevealing) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setStatus("revealed");
    }, 760);

    return () => window.clearTimeout(timeoutId);
  }, [isRevealing]);

  const content = (
    <>
      {!embedded ? (
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm text-[var(--muted)]">Демо-механика</p>
            <h3 className="mt-1 font-serif text-2xl font-semibold text-[var(--text)]">
              Scratch Card
            </h3>
          </div>
          <Badge>{isRevealed ? "Открыто" : "Закрыто"}</Badge>
        </div>
      ) : null}

      <div className="relative grid min-h-[212px] place-items-center overflow-hidden rounded-[26px] bg-[linear-gradient(145deg,#1a1022,#3d1740)] p-3 text-center shadow-[inset_0_0_0_1px_rgba(214,184,255,0.12)]">
        <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-[rgba(185,156,255,0.14)] blur-xl" />
        <div className="pointer-events-none absolute bottom-3 right-5 font-serif text-[78px] leading-none text-[var(--lavender)]/10">
          B
        </div>
        <div
          className={[
            "scratch-demo-cover demo-shimmer absolute inset-3 grid place-items-center overflow-hidden rounded-[22px] bg-[length:88%_auto] bg-center bg-no-repeat p-4 text-white shadow-[0_14px_28px_rgba(0,0,0,0.28)] transition duration-700",
            isRevealing ? "scratch-demo-wipe" : "",
            isRevealed ? "translate-x-[115%] opacity-0" : "opacity-100",
          ].join(" ")}
          style={{
            backgroundImage: `linear-gradient(135deg,rgba(31,16,45,0.5),rgba(12,8,17,0.18)),url(${burlesqueAssets.games.scratchCard})`,
          }}
        >
          <div className="relative rounded-2xl bg-[#140b1d]/50 px-4 py-3 backdrop-blur-[1px]">
            <p className="text-xs uppercase tracking-[0.2em] text-white/72">
              Promo card
            </p>
            <p className="mt-2 font-serif text-2xl font-semibold">Burlesque</p>
          </div>
        </div>

        <div
          className={[
            "relative transition duration-500",
            isRevealed ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
          ].join(" ")}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--lavender)]">
            Демо-просмотр
          </p>
          <p className="mt-2 font-serif text-2xl font-semibold text-[var(--text)]">
            {scratchCardDemoResult.title}
          </p>
          <p className="mt-1.5 text-sm leading-5 text-[var(--muted)]">
            {scratchCardDemoResult.description}
          </p>
        </div>
      </div>

      <div className="pt-3.5">
        {!isRevealed ? (
          <Button
            className="w-full min-h-10"
            disabled={isRevealing}
            onClick={() => setStatus("revealing")}
          >
            {isRevealing ? "Демо открывается..." : "Запустить демо"}
          </Button>
        ) : (
          <div className="rounded-2xl bg-white/[0.05] px-3 py-2.5">
            <p className="font-semibold text-[var(--lavender)]">
              Демо-просмотр
            </p>
            <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
              Результат не сохраняется.
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
