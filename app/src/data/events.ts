import { burlesqueAssets } from "@/data/assets";
import type { MockEvent } from "@/types/mocks";

export const mockEvents: MockEvent[] = [
  {
    id: "velvet-nights",
    title: "Velvet Nights",
    subtitle: "Вечернее шоу и special menu",
    description:
      "Ближайший вечер Burlesque в демо-афише. В следующем этапе здесь появится переход к лендингу или бронированию.",
    dateLabel: "Пт, 14 июня",
    timeLabel: "21:00",
    locationLabel: "Burlesque Club Center",
    status: "upcoming",
    imageLabel: "Velvet",
    coverSrc: burlesqueAssets.events.velvetNights,
    tags: ["Show", "Dinner", "Live"],
    ctaLabel: "Подробнее",
  },
  {
    id: "golden-hour",
    title: "Golden Hour",
    subtitle: "DJ set и welcome cocktails",
    description:
      "Легкий промо-вечер: музыка, коктейли и будущие привилегии для гостей.",
    dateLabel: "Сб, 15 июня",
    timeLabel: "22:30",
    locationLabel: "Burlesque Rooftop",
    status: "mock",
    imageLabel: "Gold",
    coverSrc: burlesqueAssets.events.goldenHour,
    tags: ["DJ", "Cocktails", "Promo"],
    ctaLabel: "Подробнее",
  },
  {
    id: "afterglow-party",
    title: "Afterglow Party",
    subtitle: "Закрытый формат вечера",
    description:
      "Пример события с ограниченным статусом. Списки гостей и регистрация будут подключены позже.",
    dateLabel: "Вс, 16 июня",
    timeLabel: "20:00",
    locationLabel: "Burlesque Lounge",
    status: "sold_out",
    imageLabel: "Club",
    tags: ["Private", "Lounge"],
    ctaLabel: "Смотреть",
  },
];
