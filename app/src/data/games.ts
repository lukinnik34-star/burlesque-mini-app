import type { MockGame } from "@/types/mocks";

export const mockGames: MockGame[] = [
  {
    id: "scratch-card",
    title: "Scratch Card",
    description:
      "Клубная карточка-сюрприз для будущих розыгрышей. Сейчас это визуальная демо-механика.",
    status: "available",
    actionLabel: "Открыть",
  },
  {
    id: "wheel-of-prizes",
    title: "Wheel Of Prizes",
    description:
      "Колесо привилегий для промо-кампаний. Результаты пока не сохраняются.",
    status: "available",
    actionLabel: "Открыть",
  },
];
