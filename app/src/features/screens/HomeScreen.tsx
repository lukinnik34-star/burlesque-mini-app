import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { burlesqueAssets } from "@/data/assets";
import { mockEvents } from "@/data/events";
import type { TelegramRuntimeInfo } from "@/lib/telegram";

const featuredEvent = mockEvents[0];

type HomeScreenProps = {
  onOpenEvents: () => void;
  onOpenPrizes: () => void;
  runtimeInfo?: TelegramRuntimeInfo;
};

export function HomeScreen({
  onOpenEvents,
  onOpenPrizes,
  runtimeInfo,
}: HomeScreenProps) {
  const welcomeName = runtimeInfo?.user?.firstName;

  return (
    <div className="space-y-7 pb-6">
      <section className="relative overflow-hidden rounded-[36px] border border-[var(--line-soft)] bg-[linear-gradient(180deg,rgba(26,18,34,0.92),rgba(15,10,21,0.84))] px-6 py-8 text-center shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <div
          className="animate-pulse-soft pointer-events-none absolute -right-16 -top-16 size-56 bg-contain bg-center bg-no-repeat opacity-45 mix-blend-screen"
          style={{ backgroundImage: `url(${burlesqueAssets.hero.glowBlob})` }}
        />
        <div
          className="animate-float-slow pointer-events-none absolute left-1/2 top-6 size-32 -translate-x-1/2 bg-contain bg-center bg-no-repeat opacity-30 mix-blend-screen"
          style={{ backgroundImage: `url(${burlesqueAssets.hero.softOrbit})` }}
        />
        <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(185,156,255,0.5),transparent)]" />

        <div className="relative mx-auto max-w-[19rem]">
          <p className="mx-auto mb-5 inline-flex rounded-full border border-[var(--line-soft)] bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--lavender)]">
            Burlesque Club
          </p>
          <h2 className="break-words font-serif text-[44px] font-semibold leading-[0.96] text-[var(--text)]">
            Добро пожаловать{welcomeName ? "," : ""}
            {welcomeName ? (
              <span className="block text-[var(--lavender)]">{welcomeName}</span>
            ) : null}
          </h2>
          <p className="mx-auto mt-5 max-w-[17rem] text-[15px] leading-7 text-[var(--muted)]">
            Афиша, клубные механики и привилегии гостя в одном приложении.
          </p>
          <div className="mt-7 grid gap-3">
            <Button onClick={onOpenEvents}>Смотреть афишу</Button>
            <Button onClick={onOpenPrizes} variant="secondary">
              Мои привилегии
            </Button>
          </div>
        </div>
      </section>

      {featuredEvent ? (
        <section className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-serif text-2xl font-semibold">
              Ближайшее событие
            </h3>
            <span className="grid size-8 place-items-center rounded-full border border-[var(--line-soft)] bg-white/[0.05]">
              <span className="size-2 rotate-45 rounded-[2px] bg-[var(--lavender)]" />
            </span>
          </div>

          <article className="relative overflow-hidden rounded-[34px] border border-[rgba(214,184,255,0.2)] bg-[linear-gradient(145deg,#1a1022_0%,#3b1630_54%,#101018_100%)] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.44)]">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-45 mix-blend-screen"
              style={
                featuredEvent.coverSrc
                  ? { backgroundImage: `url(${featuredEvent.coverSrc})` }
                  : undefined
              }
            />
            <div className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-[rgba(185,156,255,0.22)] blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                <span>{featuredEvent.dateLabel}</span>
                <span>{featuredEvent.timeLabel}</span>
              </div>
              <h4 className="mt-8 font-serif text-[34px] font-semibold leading-none">
                {featuredEvent.title}
              </h4>
              <p className="mt-3 max-w-[15rem] text-sm leading-6 text-[var(--muted-strong)]">
                {featuredEvent.subtitle}
              </p>
              <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 px-3 py-3 backdrop-blur-sm">
                <p className="min-w-0 truncate text-sm text-[var(--muted)]">
                  {featuredEvent.locationLabel}
                </p>
                <Button
                  className="min-h-9 shrink-0 px-4 text-xs"
                  onClick={onOpenEvents}
                >
                  Подробнее
                </Button>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      <div className="grid grid-cols-2 gap-3">
        {[
          ["Афиша", "События рядом"],
          ["Игры", "Демо-механики"],
          ["Призы", "Будущие привилегии"],
          ["Профиль", "Member preview"],
        ].map(([title, description]) => (
          <Card className="rounded-[26px] px-4 py-4" key={title}>
            <p className="font-semibold text-[var(--text)]">{title}</p>
            <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
              {description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
