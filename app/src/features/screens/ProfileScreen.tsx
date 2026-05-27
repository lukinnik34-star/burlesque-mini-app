import { UserCard } from "@/components/UserCard";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ScreenHeader } from "@/components/ui/ScreenHeader";
import { mockProfileStats } from "@/data/profile";
import type { TelegramRuntimeInfo } from "@/lib/telegram";
import type { DemoState } from "@/types/demo-state";
import type { MockGame, MockPrize } from "@/types/mocks";

type ProfileScreenProps = {
  demoState: DemoState;
  runtimeInfo: TelegramRuntimeInfo;
  selectedGame: MockGame | null;
  selectedPrize: MockPrize | null;
};

const showTelegramDebug =
  process.env.NEXT_PUBLIC_SHOW_TELEGRAM_DEBUG === "true";

const sessionStatusLabel = {
  idle: "Ожидает",
  preview: "Демо",
  completed: "Готово",
};

function getRuntimeEnvironmentLabel(runtimeInfo: TelegramRuntimeInfo): string {
  if (
    runtimeInfo.status === "telegram_launch_params_without_webapp" ||
    runtimeInfo.status === "telegram_without_init_data" ||
    runtimeInfo.status === "telegram_with_init_data"
  ) {
    return "Telegram Mini App";
  }

  if (runtimeInfo.status === "telegram_webview_without_webapp") {
    return "Telegram WebView";
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
  if (
    runtimeInfo.status === "telegram_launch_params_without_webapp" ||
    runtimeInfo.status === "telegram_without_init_data" ||
    runtimeInfo.status === "telegram_with_init_data"
  ) {
    return "Telegram найден. Профиль пока показан в демо-режиме.";
  }

  if (runtimeInfo.status === "telegram_webview_without_webapp") {
    return "Открыто в Telegram WebView. Данные профиля показаны для примера.";
  }

  return "Браузерный просмотр. Данные профиля показаны для примера.";
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
        subtitle="Карта гостя, привилегии и история активности в демо-режиме."
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
            label="Telegram user"
            value={runtimeInfo.user ? "найден" : "не найден"}
          />
          <RuntimeRow
            label="Авторизация"
            value="будет подключена позже"
          />
        </div>
      </Card>

      {showTelegramDebug ? (
        <Card className="border-[var(--line-soft)] bg-[var(--surface-soft)] p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-[var(--burgundy)]">
                Telegram debug
              </p>
              <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                Safe diagnostics без raw initData, hash, signature и query_id.
              </p>
            </div>
            <Badge>Debug</Badge>
          </div>

          <div className="mt-4 grid gap-2 text-sm">
            <RuntimeRow
              label="Telegram object"
              value={
                diagnostics.hasTelegramObject ||
                diagnostics.userAgentIncludesTelegram
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
            <RuntimeRow
              label="Launch params"
              value={diagnostics.hasLaunchParams ? "найдены" : "не найдены"}
            />
            <RuntimeRow
              label="initData length"
              value={String(diagnostics.initDataLength)}
            />
            {diagnostics.launchParamsPlatform ? (
              <RuntimeRow
                label="Platform"
                value={diagnostics.launchParamsPlatform}
              />
            ) : null}
            {diagnostics.launchParamsVersion ? (
              <RuntimeRow
                label="Version"
                value={diagnostics.launchParamsVersion}
              />
            ) : null}
            {diagnostics.telegramObjectKeys.length > 0 ? (
              <RuntimeRow
                label="Telegram keys"
                value={diagnostics.telegramObjectKeys.join(", ")}
              />
            ) : null}
          </div>
        </Card>
      ) : null}

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

    </div>
  );
}
