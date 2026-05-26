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
    <Card className="overflow-hidden p-0">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm text-[var(--muted)]">Демо-режим</p>
            <h3 className="mt-1 font-serif text-2xl font-semibold text-[var(--text)]">
              Scratch Card
            </h3>
          </div>
          <Badge>{isRevealed ? "Открыто" : "Закрыто"}</Badge>
        </div>
      </div>

      <div className="px-5">
        <div className="relative grid min-h-64 place-items-center overflow-hidden rounded-[30px] border border-[var(--line-soft)] bg-[linear-gradient(145deg,#fff8ef,#f4ddc9)] p-4 text-center">
          <div className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-white/52" />
          <div className="pointer-events-none absolute left-5 top-5 h-16 w-24 rotate-[-10deg] rounded-[20px] border border-[var(--burgundy)]/14 bg-white/28" />
          <div className="pointer-events-none absolute bottom-4 right-6 font-serif text-[92px] leading-none text-[var(--burgundy)]/8">
            B
          </div>
          <div
            className={[
              "absolute inset-4 grid place-items-center rounded-[26px] border border-[var(--champagne)]/70 bg-[linear-gradient(135deg,#8f1d2f_0%,#ad6b58_55%,#ead0a2_100%)] bg-[length:88%_auto] bg-center bg-no-repeat p-4 text-white shadow-[0_18px_34px_rgba(143,29,47,0.18)] transition duration-500",
              isRevealed ? "opacity-0" : "opacity-100",
            ].join(" ")}
            style={{
              backgroundImage: `linear-gradient(135deg,rgba(143,29,47,0.34),rgba(80,16,27,0.18)),url(${burlesqueAssets.games.scratchCard})`,
            }}
          >
            <div className="relative rounded-3xl bg-[#64111d]/36 px-5 py-4 backdrop-blur-[1px]">
              <p className="text-xs uppercase tracking-[0.22em] text-white/72">
                Promo card
              </p>
              <p className="mt-3 font-serif text-3xl font-semibold">
                Burlesque
              </p>
              <p className="mt-2 text-sm leading-5 text-white/74">
                Нажмите кнопку ниже, чтобы открыть demo.
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
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--burgundy)]">
              Demo result
            </p>
            <p className="mt-3 font-serif text-3xl font-semibold text-[var(--burgundy)]">
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
            Открыть demo
          </Button>
        ) : (
          <Card className="rounded-[24px] bg-[var(--surface-soft)]">
            <p className="text-sm leading-6 text-[var(--muted-strong)]">
              {scratchCardDemoResult.note}
            </p>
          </Card>
        )}

        <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
          Демо-режим. Реальный приз пока не выдается.
        </p>
      </div>
    </Card>
  );
}
