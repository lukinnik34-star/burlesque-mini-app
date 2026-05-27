import type { MockGame } from "@/types/mocks";

export const mockGames: MockGame[] = [
  {
    id: "scratch-card",
    title: "Scratch Card",
    description:
      "Клубная карточка-сюрприз для будущих розыгрышей.",
    status: "available",
    actionLabel: "Открыть",
  },
  {
    id: "wheel-of-prizes",
    title: "Wheel Of Prizes",
    description:
      "Колесо привилегий для будущих промо-кампаний.",
    status: "available",
    actionLabel: "Открыть",
  },
];
