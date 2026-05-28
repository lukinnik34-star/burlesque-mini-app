"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { burlesqueAssets } from "@/data/assets";
import { scratchCardDemoResult } from "@/features/games/scratch-card/scratchCardDemoData";
import type { ScratchCardDemoStatus } from "@/features/games/scratch-card/types";

export function ScratchCardDemo() {
  const [status, setStatus] = useState<ScratchCardDemoStatus>("closed");
  const isRevealed = status === "revealed";

  return (
    <Card className="screen-soft-enter overflow-hidden p-0">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm text-[var(--muted)]">Демо-механика</p>
            <h3 className="mt-1 font-serif text-2xl font-semibold text-[var(--text)]">
              Scratch Card
            </h3>
          </div>
          <Badge>{isRevealed ? "Открыто" : "Закрыто"}</Badge>
        </div>
      </div>

      <div className="px-5">
        <div className="relative grid min-h-64 place-items-center overflow-hidden rounded-[30px] border border-[var(--line-soft)] bg-[linear-gradient(145deg,#1a1022,#3d1740)] p-4 text-center">
          <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-[rgba(185,156,255,0.16)] blur-xl" />
          <div className="pointer-events-none absolute left-5 top-5 h-16 w-24 rotate-[-10deg] rounded-[20px] border border-[rgba(214,184,255,0.18)] bg-white/[0.06]" />
          <div className="pointer-events-none absolute bottom-4 right-6 font-serif text-[92px] leading-none text-[var(--lavender)]/10">
            B
          </div>
          <div
            className={[
              "demo-shimmer absolute inset-4 grid place-items-center overflow-hidden rounded-[26px] border border-[var(--line-strong)] bg-[length:88%_auto] bg-center bg-no-repeat p-4 text-white shadow-[0_18px_34px_rgba(0,0,0,0.32)] transition duration-500",
              isRevealed ? "opacity-0" : "opacity-100",
            ].join(" ")}
            style={{
              backgroundImage: `linear-gradient(135deg,rgba(31,16,45,0.52),rgba(12,8,17,0.2)),url(${burlesqueAssets.games.scratchCard})`,
            }}
          >
            <div className="relative rounded-3xl bg-[#140b1d]/56 px-5 py-4 backdrop-blur-[1px]">
              <p className="text-xs uppercase tracking-[0.22em] text-white/72">
                Promo card
              </p>
              <p className="mt-3 font-serif text-3xl font-semibold">
                Burlesque
              </p>
              <p className="mt-2 text-sm leading-5 text-white/74">
                Нажмите кнопку ниже, чтобы открыть демо.
              </p>
            </div>
          </div>

          <div
            className={[
              "relative transition duration-500",
              isRevealed
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0",
            ].join(" ")}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--lavender)]">
              Демо-результат
            </p>
            <p className="mt-3 font-serif text-3xl font-semibold text-[var(--text)]">
              {scratchCardDemoResult.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {scratchCardDemoResult.description}
            </p>
          </div>
        </div>
      </div>

      <div className="p-5">
        {!isRevealed ? (
          <Button className="w-full" onClick={() => setStatus("revealed")}>
            Открыть демо
          </Button>
        ) : (
          <Card className="rounded-[24px] bg-[var(--surface-soft)]">
            <p className="text-sm leading-6 text-[var(--muted-strong)]">
              {scratchCardDemoResult.note}
            </p>
          </Card>
        )}

        <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
          Демо-механика. Результат не сохраняется, призы пока не выдаются.
        </p>
      </div>
    </Card>
  );
}
