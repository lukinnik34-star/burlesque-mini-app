import type { MockHomeAction, MockHomeStatusBlock } from "@/types/mocks";

export const homeIntro = {
  title: "Главная",
  description:
    "Афиша, промо-игры, привилегии и профиль гостя в одном мобильном пространстве внутри Telegram.",
};

export const mockHomeActions: MockHomeAction[] = [
  {
    id: "events",
    title: "Афиша вечера",
    description: "Ближайшие события, время, зал и короткое описание формата.",
    status: "MVP",
  },
  {
    id: "games",
    title: "Промо-игры",
    description: "Scratch Card и Wheel Of Prizes доступны как визуальный demo preview.",
    status: "Demo",
  },
  {
    id: "prizes",
    title: "Привилегии",
    description: "Витрина будущих комплиментов, бонусов и специальных предложений.",
    status: "Demo",
  },
];

export const mockHomeStatusBlocks: MockHomeStatusBlock[] = [
  {
    id: "data-layer",
    label: "Данные",
    value: "Demo",
    description: "Интерфейс использует локальные данные для MVP.",
    status: "Ready",
  },
  {
    id: "business-logic",
    label: "Призы",
    value: "Demo",
    description: "Реальная выдача призов будет подключена отдельно.",
    status: "Demo",
  },
];
