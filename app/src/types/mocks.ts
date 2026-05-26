export type GameStatus = "available" | "coming_soon" | "locked";
export type PrizeStatus = "mock" | "available" | "claimed" | "expired";
export type EventStatus = "upcoming" | "sold_out" | "past" | "mock";

export type MockGame = {
  id: string;
  title: string;
  description: string;
  status: GameStatus;
  actionLabel: string;
};

export type MockEvent = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  dateLabel: string;
  timeLabel: string;
  locationLabel: string;
  status: EventStatus;
  imageLabel?: string;
  coverSrc?: string;
  tags: string[];
  ctaLabel: string;
};

export type MockPrize = {
  id: string;
  title: string;
  description: string;
  status: PrizeStatus;
  note?: string;
  iconSrc?: string;
};

export type MockProfileStat = {
  id: string;
  label: string;
  value: string;
  hint?: string;
};

export type MockHomeAction = {
  id: string;
  title: string;
  description: string;
  status?: string;
};

export type MockHomeStatusBlock = {
  id: string;
  label: string;
  value: string;
  description: string;
  status: string;
};
