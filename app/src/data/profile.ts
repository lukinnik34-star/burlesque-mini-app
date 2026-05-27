import type { MockProfileStat } from "@/types/mocks";

export const mockProfileStats: MockProfileStat[] = [
  {
    id: "visits",
    label: "Визиты",
    value: "12",
    hint: "Показано для примера",
  },
  {
    id: "bonuses",
    label: "Баллы",
    value: "1 240",
    hint: "Будущий бонусный баланс",
  },
  {
    id: "events",
    label: "События",
    value: "8",
    hint: "История появится позже",
  },
  {
    id: "guest-status",
    label: "Статус",
    value: "Silver Guest",
    hint: "Пример уровня гостя",
  },
];
