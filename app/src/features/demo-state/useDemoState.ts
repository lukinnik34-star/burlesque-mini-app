"use client";

import { useState } from "react";
import { mockGames } from "@/data/games";
import { mockPrizes } from "@/data/prizes";
import type { DemoState } from "@/types/demo-state";

const initialDemoState: DemoState = {
  selectedGameId: null,
  selectedPrizeId: null,
  sessionStatus: "idle",
  viewedGameIds: [],
  viewedPrizeIds: [],
};

export function useDemoState() {
  const [demoState, setDemoState] = useState<DemoState>(initialDemoState);

  const selectedGame =
    mockGames.find((game) => game.id === demoState.selectedGameId) ?? null;
  const selectedPrize =
    mockPrizes.find((prize) => prize.id === demoState.selectedPrizeId) ?? null;

  function previewGame(gameId: string) {
    setDemoState((current) => ({
      ...current,
      selectedGameId: gameId,
      sessionStatus: "preview",
      viewedGameIds: current.viewedGameIds.includes(gameId)
        ? current.viewedGameIds
        : [...current.viewedGameIds, gameId],
    }));
  }

  function selectPrize(prizeId: string) {
    setDemoState((current) => ({
      ...current,
      selectedPrizeId: prizeId,
      viewedPrizeIds: current.viewedPrizeIds.includes(prizeId)
        ? current.viewedPrizeIds
        : [...current.viewedPrizeIds, prizeId],
    }));
  }

  function clearDemoSelection() {
    setDemoState((current) => ({
      ...current,
      selectedGameId: null,
      selectedPrizeId: null,
      sessionStatus: "idle",
    }));
  }

  function completeDemoPreview() {
    setDemoState((current) => ({
      ...current,
      sessionStatus: "completed",
    }));
  }

  return {
    demoState,
    selectedGame,
    selectedPrize,
    previewGame,
    selectPrize,
    clearDemoSelection,
    completeDemoPreview,
  };
}
