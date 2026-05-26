export type DemoSessionStatus = "idle" | "preview" | "completed";

export type DemoState = {
  selectedGameId: string | null;
  selectedPrizeId: string | null;
  sessionStatus: DemoSessionStatus;
  viewedGameIds: string[];
  viewedPrizeIds: string[];
};
