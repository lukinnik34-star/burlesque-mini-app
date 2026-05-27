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
  if (runtimeInfo.status === "telegram_webview_without_webapp") {
    return "Telegram WebView";
  }

  if (
    runtimeInfo.status === "telegram_without_init_data" ||
    runtimeInfo.status === "telegram_with_init_data"
  ) {
    return "Telegram Mini App";
  }

  return "Browser preview";
}

function getRuntimeBadgeLabel(runtimeInfo: TelegramRuntimeInfo): string {
  if (runtimeInfo.status === "browser") {
    return "Browser";
  }

  if (runtimeInfo.status === "telegram_webview_without_webapp") {
    return "WebView";
  }

  return "Telegram";
}

function getRuntimeNote(runtimeInfo: TelegramRuntimeInfo): string {
  if (runtimeInfo.status === "telegram_webview_without_webapp") {
    return "Похоже на Telegram WebView, но WebApp API не найден.";
  }

  if (runtimeInfo.status === "telegram_without_init_data") {
    return "WebApp API найден, initData пока пустой.";
  }

  if (runtimeInfo.status === "telegram_with_init_data") {
    return "WebApp API и initData найдены. Авторизация еще не выполнена.";
  }

  return "Обычный браузерный просмотр.";
}

function RuntimeRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl bg-[var(--surface-soft)] px-3 py-3">
      <span className="text-[var(--muted)]">{label}</span>
      <span className="text-right font-semibold text-[var(--text)]">
        {value}
      </span>
    </div>
  );
}

export function ProfileScreen({
  demoState,
  runtimeInfo,
  selectedGame,
  selectedPrize,
}: ProfileScreenProps) {
  const diagnostics = runtimeInfo.diagnostics;

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
              {getRuntimeNote(runtimeInfo)}
            </p>
          </div>
          <Badge>{getRuntimeBadgeLabel(runtimeInfo)}</Badge>
        </div>

        <div className="mt-4 grid gap-2 text-sm">
          <RuntimeRow
            label="Среда"
            value={getRuntimeEnvironmentLabel(runtimeInfo)}
          />
          <RuntimeRow
            label="Telegram object"
            value={
              diagnostics.hasTelegramObject || diagnostics.userAgentIncludesTelegram
                ? "найден"
                : "нет"
            }
          />
          <RuntimeRow
            label="WebApp API"
            value={diagnostics.hasWebAppObject ? "найден" : "не найден"}
          />
          <RuntimeRow
            label="Telegram script"
            value={diagnostics.hasTelegramScriptTag ? "найден" : "не найден"}
          />
          {runtimeInfo.status === "telegram_without_init_data" ||
          runtimeInfo.status === "telegram_with_init_data" ? (
            <RuntimeRow
              label="initData"
              value={runtimeInfo.hasInitData ? "найден" : "нет"}
            />
          ) : null}
          <RuntimeRow
            label="Telegram user"
            value={runtimeInfo.user ? "найден" : "не найден"}
          />
          <RuntimeRow
            label="UserAgent Telegram"
            value={diagnostics.userAgentIncludesTelegram ? "да" : "нет"}
          />
          <RuntimeRow
            label="initData length"
            value={String(diagnostics.initDataLength)}
          />
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
            ? "Telegram определяется только как среда запуска. Реальные данные гостя и авторизация будут подключены позже через backend."
            : "Браузерный просмотр. Реальные данные гостя и авторизация будут подключены позже через backend."}
        </p>
      </Card>
    </div>
  );
}
