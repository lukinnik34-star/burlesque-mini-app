import { mockProfileStats } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScreenHeader } from "@/components/ui/ScreenHeader";
import { UserCard } from "@/components/UserCard";
import type { DemoState } from "@/types/demo-state";
import type { MockGame, MockPrize } from "@/types/mocks";
import type { TelegramWebAppUser } from "@/types/telegram";

type ProfileScreenProps = {
  demoState: DemoState;
  isTelegram: boolean;
  selectedGame: MockGame | null;
  selectedPrize: MockPrize | null;
  user: TelegramWebAppUser;
};

const sessionStatusLabel = {
  idle: "Ожидает",
  preview: "Demo",
  completed: "Готово",
};

export function ProfileScreen({
  demoState,
  isTelegram,
  selectedGame,
  selectedPrize,
  user,
}: ProfileScreenProps) {
  return (
    <div className="space-y-5">
      <ScreenHeader
        title="Профиль"
        subtitle="Карта гостя, баллы и привилегии в демо-режиме."
      />

      <UserCard isTelegram={isTelegram} user={user} />

      <Card className="p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--text)]">
              До Gold Guest
            </p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              Следующий уровень привилегий
            </p>
          </div>
          <Badge>62%</Badge>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-[var(--surface-soft)]">
          <div className="h-full w-[62%] rounded-full bg-[var(--burgundy)]" />
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        {mockProfileStats.map((stat) => (
          <Card className="rounded-[24px] px-4 py-4" key={stat.id}>
            <p className="text-xs text-[var(--muted)]">{stat.label}</p>
            <p className="mt-2 text-xl font-semibold text-[var(--burgundy)]">
              {stat.value}
            </p>
            {stat.hint ? (
              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                {stat.hint}
              </p>
            ) : null}
          </Card>
        ))}
      </div>

      <Card className="p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-[var(--text)]">
            Текущая активность
          </p>
          <Badge>{sessionStatusLabel[demoState.sessionStatus]}</Badge>
        </div>
        <div className="mt-4 space-y-3">
          <div className="rounded-2xl bg-[var(--surface-soft)] px-3 py-3">
            <p className="text-xs text-[var(--muted)]">Игра</p>
            <p className="mt-1 text-sm font-semibold text-[var(--text)]">
              {selectedGame?.title ?? "Не выбрана"}
            </p>
          </div>
          <div className="rounded-2xl bg-[var(--surface-soft)] px-3 py-3">
            <p className="text-xs text-[var(--muted)]">Привилегия</p>
            <p className="mt-1 text-sm font-semibold text-[var(--text)]">
              {selectedPrize?.title ?? "Не выбрана"}
            </p>
          </div>
        </div>
      </Card>

      <Card className="bg-[var(--surface-soft)]">
        <p className="text-sm font-semibold text-[var(--burgundy)]">
          Демо-профиль
        </p>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          Авторизация и реальные данные гостя будут подключены позже.
        </p>
      </Card>
    </div>
  );
}
