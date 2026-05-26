import type { MockGame } from "@/types/mocks";

export const mockGames: MockGame[] = [
  {
    id: "scratch-card",
    title: "Scratch Card",
    description:
      "Клубная карточка-сюрприз для быстрого промо-сценария. Сейчас доступен визуальный demo preview.",
    status: "available",
    actionLabel: "Открыть",
  },
  {
    id: "wheel-of-prizes",
    title: "Wheel Of Prizes",
    description:
      "Колесо привилегий для будущих кампаний. Сейчас без реальной выдачи и расчета результата.",
    status: "available",
    actionLabel: "Открыть",
  },
];
