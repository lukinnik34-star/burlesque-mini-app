import type { MockProfileStat } from "@/types/mocks";

export const mockProfileStats: MockProfileStat[] = [
  {
    id: "visits",
    label: "Визиты",
    value: "12",
    hint: "Количество посещений в демо-профиле.",
  },
  {
    id: "bonuses",
    label: "Баллы",
    value: "1 240",
    hint: "Пример будущего бонусного баланса.",
  },
  {
    id: "events",
    label: "События",
    value: "8",
    hint: "История событий появится после подключения данных.",
  },
  {
    id: "guest-status",
    label: "Статус",
    value: "Silver Guest",
    hint: "Текущий уровень гостя в демо-профиле.",
  },
];
