import { mockProfileStats } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScreenHeader } from "@/components/ui/ScreenHeader";
import { UserCard } from "@/components/UserCard";
import type { TelegramRuntimeInfo } from "@/lib/telegram";
import type { DemoState } from "@/types/demo-state";
import type { MockGame, MockPrize } from "@/types/mocks";

type ProfileScreenProps = {
  demoState: DemoState;
  runtimeInfo: TelegramRuntimeInfo;
  selectedGame: MockGame | null;
  selectedPrize: MockPrize | null;
};

const sessionStatusLabel = {
  idle: "Ожидает",
  preview: "Demo",
  completed: "Готово",
};

function getRuntimeEnvironmentLabel(runtimeInfo: TelegramRuntimeInfo): string {
  if (!runtimeInfo.isTelegram) {
    return "Browser preview";
  }

  return runtimeInfo.hasInitData
    ? "Telegram Mini App"
    : "Telegram без initData";
}

export function ProfileScreen({
  demoState,
  runtimeInfo,
  selectedGame,
  selectedPrize,
}: ProfileScreenProps) {
  return (
    <div className="space-y-5">
      <ScreenHeader
        title="Профиль"
        subtitle="Карта гостя, баллы и привилегии в демо-режиме."
      />

      <UserCard runtimeInfo={runtimeInfo} />

      <Card className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--text)]">
              Среда запуска
            </p>
            <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
              Данные профиля показаны для примера.
            </p>
          </div>
          <Badge>{runtimeInfo.isTelegram ? "Telegram" : "Browser"}</Badge>
        </div>

        <div className="mt-4 grid gap-2 text-sm">
          <div className="flex items-center justify-between gap-3 rounded-2xl bg-[var(--surface-soft)] px-3 py-3">
            <span className="text-[var(--muted)]">Среда</span>
            <span className="text-right font-semibold text-[var(--text)]">
              {getRuntimeEnvironmentLabel(runtimeInfo)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 rounded-2xl bg-[var(--surface-soft)] px-3 py-3">
            <span className="text-[var(--muted)]">Telegram user</span>
            <span className="text-right font-semibold text-[var(--text)]">
              {runtimeInfo.user ? "найден" : "не найден"}
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 rounded-2xl bg-[var(--surface-soft)] px-3 py-3">
            <span className="text-[var(--muted)]">Авторизация</span>
            <span className="text-right font-semibold text-[var(--burgundy)]">
              будет подключена позже
            </span>
          </div>
        </div>
      </Card>

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
          {runtimeInfo.isTelegram
            ? "Telegram найден только как среда запуска. Реальные данные гостя и авторизация будут подключены позже через backend."
            : "Браузерный просмотр. Реальные данные гостя и авторизация будут подключены позже через backend."}
        </p>
      </Card>
    </div>
  );
}
