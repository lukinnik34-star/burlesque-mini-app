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

function RuntimeRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/[0.06] px-3 py-2">
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
    <div className="space-y-4 pb-4">
      <ScreenHeader
        title="Профиль"
        subtitle="Профиль гостя с будущими привилегиями и активностью."
      />

      <UserCard runtimeInfo={runtimeInfo} />

      {showTelegramDebug ? (
        <Card className="border-[var(--line-soft)] bg-[var(--surface-soft)] p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-[var(--lavender)]">
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
              label="Среда"
              value={getRuntimeEnvironmentLabel(runtimeInfo)}
            />
            <RuntimeRow
              label="Telegram user"
              value={runtimeInfo.user ? "найден" : "не найден"}
            />
            <RuntimeRow label="Auth" value="будет подключена позже" />
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
              label="Launch params"
              value={diagnostics.hasLaunchParams ? "найдены" : "не найдены"}
            />
            <RuntimeRow
              label="initData length"
              value={String(diagnostics.initDataLength)}
            />
          </div>
        </Card>
      ) : null}

      <Card className="relative overflow-hidden bg-[linear-gradient(145deg,rgba(31,22,42,0.88),rgba(20,14,28,0.76))] p-5 shadow-[0_16px_42px_rgba(0,0,0,0.28)]">
        <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-[rgba(185,156,255,0.18)] blur-2xl" />
        <div className="relative flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[var(--text)]">
              До следующего уровня
            </p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              Пример будущей шкалы привилегий
            </p>
          </div>
          <Badge>пример</Badge>
        </div>
        <div className="relative mt-4 h-2.5 overflow-hidden rounded-full bg-white/[0.08]">
          <div className="h-full w-[62%] rounded-full bg-[linear-gradient(90deg,#b99cff,#7b334f)]" />
        </div>
        <p className="relative mt-2 text-right text-xs font-semibold text-[var(--lavender)]">
          62%
        </p>
      </Card>

      <div className="grid grid-cols-2 gap-2.5">
        {mockProfileStats.map((stat) => (
          <Card
            className="rounded-[24px] px-3.5 py-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
            key={stat.id}
          >
            <p className="text-xs text-[var(--muted)]">{stat.label}</p>
            <p className="mt-2 text-xl font-semibold text-[var(--lavender)]">
              {stat.value}
            </p>
            {stat.hint ? (
              <p className="mt-1.5 text-xs leading-4 text-[var(--muted)]">
                {stat.hint}
              </p>
            ) : null}
          </Card>
        ))}
      </div>

      <Card className="bg-white/[0.05] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-[var(--text)]">
            Активность
          </p>
          <Badge>{sessionStatusLabel[demoState.sessionStatus]}</Badge>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-2xl bg-[var(--surface-soft)] px-3 py-2.5">
            <p className="text-xs text-[var(--muted)]">Игра</p>
            <p className="mt-1 truncate text-sm font-semibold text-[var(--text)]">
              {selectedGame?.title ?? "Не выбрана"}
            </p>
          </div>
          <div className="rounded-2xl bg-[var(--surface-soft)] px-3 py-2.5">
            <p className="text-xs text-[var(--muted)]">Привилегия</p>
            <p className="mt-1 truncate text-sm font-semibold text-[var(--text)]">
              {selectedPrize?.title ?? "Не выбрана"}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
