import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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
    <div className="space-y-4 pb-10">
      <section className="relative overflow-hidden rounded-[34px] border border-[var(--line-soft)] bg-[linear-gradient(180deg,rgba(26,18,34,0.9),rgba(15,10,21,0.82))] px-6 py-5 text-center shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <div className="animate-pulse-soft pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[rgba(185,156,255,0.18)] blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-8 h-24 w-40 -translate-x-1/2 rounded-full bg-[rgba(123,51,79,0.16)] blur-2xl" />
        <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(185,156,255,0.5),transparent)]" />

        <div className="relative mx-auto max-w-[19rem]">
          <p className="mx-auto mb-2.5 inline-flex rounded-full border border-[var(--line-soft)] bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--lavender)]">
            Burlesque Club
          </p>
          <h2 className="break-words font-serif text-[39px] font-semibold leading-[0.98] text-[var(--text)]">
            Добро пожаловать{welcomeName ? "," : ""}
            {welcomeName ? (
              <span className="block text-[var(--lavender)]">{welcomeName}</span>
            ) : null}
          </h2>
          <p className="mx-auto mt-3.5 max-w-[17rem] text-[14px] leading-6 text-[var(--muted)]">
            Афиша, клубные механики и привилегии гостя в одном приложении.
          </p>
          <div className="mt-4 grid gap-2.5">
            <Button onClick={onOpenEvents}>Смотреть афишу</Button>
            <Button onClick={onOpenPrizes} variant="secondary">
              Мои привилегии
            </Button>
          </div>
        </div>
      </section>

      {featuredEvent ? (
        <section className="space-y-2.5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-serif text-2xl font-semibold">
              Ближайшее событие
            </h3>
            <span className="grid size-8 place-items-center rounded-full border border-[var(--line-soft)] bg-white/[0.05]">
              <span className="size-2 rotate-45 rounded-[2px] bg-[var(--lavender)]" />
            </span>
          </div>

          <article className="relative overflow-hidden rounded-[32px] border border-[rgba(214,184,255,0.2)] bg-[linear-gradient(145deg,#1a1022_0%,#3b1630_54%,#101018_100%)] p-3.5 shadow-[0_22px_54px_rgba(0,0,0,0.42)]">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-42 mix-blend-screen"
              style={
                featuredEvent.coverSrc
                  ? { backgroundImage: `url(${featuredEvent.coverSrc})` }
                  : undefined
              }
            />
            <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-[rgba(185,156,255,0.2)] blur-2xl" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                <span>{featuredEvent.dateLabel}</span>
                <span>{featuredEvent.timeLabel}</span>
              </div>
              <h4 className="mt-5 font-serif text-[30px] font-semibold leading-none">
                {featuredEvent.title}
              </h4>
              <p className="mt-2.5 max-w-[15rem] text-sm leading-5 text-[var(--muted-strong)]">
                {featuredEvent.subtitle}
              </p>
              <div className="mt-3.5 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 px-3 py-2.5 backdrop-blur-sm">
                <p className="min-w-0 truncate text-sm text-[var(--muted)]">
                  {featuredEvent.locationLabel}
                </p>
                <Button
                  className="min-h-8 shrink-0 px-3.5 text-xs"
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
          ["Профиль", "Профиль гостя"],
        ].map(([title, description]) => (
          <Card className="rounded-[24px] px-4 py-3.5" key={title}>
            <p className="font-semibold text-[var(--text)]">{title}</p>
            <p className="mt-1.5 text-xs leading-5 text-[var(--muted)]">
              {description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
