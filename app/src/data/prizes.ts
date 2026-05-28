import { burlesqueAssets } from "@/data/assets";
import type { MockPrize } from "@/types/mocks";

export const mockPrizes: MockPrize[] = [
  {
    id: "welcome-drink",
    title: "Приветственный напиток",
    description: "Комплимент для первого визита.",
    status: "mock",
    note: "Демо-привилегия. Реальная выдача будет подключена позже.",
    iconSrc: burlesqueAssets.prizes.drink,
  },
  {
    id: "discount-coupon",
    title: "Купон на скидку",
    description: "Персональное предложение для будущей брони.",
    status: "mock",
    note: "Эта привилегия показана как пример будущего сценария.",
    iconSrc: burlesqueAssets.prizes.discount,
  },
  {
    id: "reserved-table-bonus",
    title: "Бонус на резерв стола",
    description: "Привилегия для сценария с бронированием.",
    status: "mock",
    note: "Демо-привилегия. Проверка бонуса появится на следующем этапе.",
    iconSrc: burlesqueAssets.prizes.table,
  },
  {
    id: "special-event-access",
    title: "Доступ к спецсобытию",
    description: "Персональный доступ к закрытому вечеру.",
    status: "mock",
    note: "Показано для примера. Регистрация будет подключена позже.",
  },
];
