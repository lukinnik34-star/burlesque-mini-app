import { burlesqueAssets } from "@/data/assets";
import type { MockPrize } from "@/types/mocks";

export const mockPrizes: MockPrize[] = [
  {
    id: "welcome-drink",
    title: "Приветственный напиток",
    description: "Комплимент для первого визита гостя.",
    status: "mock",
    note: "Демо-режим. Комплимент пока не выдается.",
    iconSrc: burlesqueAssets.prizes.drink,
  },
  {
    id: "discount-coupon",
    title: "Купон на скидку",
    description: "Специальное предложение для будущей брони или события.",
    status: "mock",
    note: "Демо-режим. Промокод пока не создан.",
    iconSrc: burlesqueAssets.prizes.discount,
  },
  {
    id: "reserved-table-bonus",
    title: "Бонус на резерв стола",
    description: "Привилегия для будущего сценария с резервом стола.",
    status: "mock",
    note: "Демо-режим. Проверка бонуса пока не подключена.",
    iconSrc: burlesqueAssets.prizes.table,
  },
  {
    id: "special-event-access",
    title: "Доступ к спецсобытию",
    description: "Персональный доступ к закрытому вечеру.",
    status: "mock",
    note: "Демо-режим. Реальная регистрация появится позже.",
  },
];
