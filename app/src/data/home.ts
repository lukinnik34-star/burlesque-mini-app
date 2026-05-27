import type { MockHomeAction, MockHomeStatusBlock } from "@/types/mocks";

export const homeIntro = {
  title: "Главная",
  description:
    "Афиша, клубные механики и привилегии гостя в одном пространстве внутри Telegram.",
};

export const mockHomeActions: MockHomeAction[] = [
  {
    id: "events",
    title: "Афиша вечера",
    description:
      "Ближайшие события, время, зал и короткое описание формата.",
    status: "MVP",
  },
  {
    id: "games",
    title: "Промо-игры",
    description:
      "Scratch Card и Wheel Of Prizes как будущие клубные розыгрыши.",
    status: "Демо",
  },
  {
    id: "prizes",
    title: "Привилегии",
    description:
      "Витрина комплиментов, бонусов и специальных предложений.",
    status: "Скоро",
  },
  {
    id: "profile",
    title: "Профиль гостя",
    description:
      "Предпросмотр карты гостя, статуса и будущей истории активности.",
    status: "Демо",
  },
];

export const mockHomeStatusBlocks: MockHomeStatusBlock[] = [
  {
    id: "data-layer",
    label: "Данные",
    value: "Демо",
    description: "Интерфейс использует локальные данные для visual MVP.",
    status: "Ready",
  },
  {
    id: "business-logic",
    label: "Призы",
    value: "Демо",
    description: "Реальные правила и выдача появятся на следующем этапе.",
    status: "Demo",
  },
];
