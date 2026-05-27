import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { burlesqueAssets } from "@/data/assets";
import { mockEvents } from "@/data/events";
import { homeIntro, mockHomeActions } from "@/data/home";
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
    <div className="space-y-6 pb-6">
      <section className="relative overflow-hidden rounded-[36px] border border-[var(--line-soft)] bg-[linear-gradient(145deg,#fffdf8_0%,#fff0df_100%)] p-7 shadow-[var(--shadow-soft)]">
        <div
          className="animate-pulse-soft pointer-events-none absolute -right-12 -top-12 size-52 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${burlesqueAssets.hero.glowBlob})`,
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-16 -right-10 h-32 w-56 bg-contain bg-bottom bg-no-repeat opacity-18"
          style={{
            backgroundImage: `url(${burlesqueAssets.hero.burgundyWave})`,
          }}
        />
        <div
          className="animate-float-slow pointer-events-none absolute right-5 top-6 size-28 bg-contain bg-center bg-no-repeat opacity-45"
          style={{
            backgroundImage: `url(${burlesqueAssets.hero.softOrbit})`,
          }}
        />

        <div className="relative">
          <Badge>Burlesque</Badge>
          <h2 className="mt-6 max-w-[17rem] break-words font-serif text-[42px] font-semibold leading-[0.95] text-[var(--text)]">
            {welcomeName
              ? `Добро пожаловать, ${welcomeName}`
              : "Добро пожаловать"}
          </h2>
          <p className="mt-5 max-w-[18rem] text-[15px] leading-7 text-[var(--muted)]">
            {homeIntro.description}
          </p>
          <div className="mt-7 flex flex-col gap-3">
            <Button onClick={onOpenEvents}>Смотреть афишу</Button>
            <Button onClick={onOpenPrizes} variant="secondary">
              Мои привилегии
            </Button>
          </div>
        </div>
      </section>

      {featuredEvent ? (
        <Card className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--burgundy)]">
                Ближайшее событие
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight">
                {featuredEvent.title}
              </h3>
            </div>
            <Badge>{featuredEvent.dateLabel}</Badge>
          </div>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            {featuredEvent.subtitle}
          </p>
          <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-[var(--surface-soft)] px-4 py-3">
            <div>
              <p className="text-xs text-[var(--muted)]">Начало</p>
              <p className="text-sm font-semibold text-[var(--text)]">
                {featuredEvent.timeLabel}
              </p>
            </div>
            <button
              className="min-h-10 rounded-full px-3 text-sm font-semibold text-[var(--burgundy)] transition hover:bg-white/60 active:translate-y-px"
              onClick={onOpenEvents}
              type="button"
            >
              Подробнее
            </button>
          </div>
        </Card>
      ) : null}

      <div className="grid gap-3">
        {mockHomeActions.map((action) => (
          <Card
            className="rounded-[26px] px-4 py-4 transition duration-200 hover:border-[var(--line-strong)] hover:bg-[#fffaf3]"
            key={action.id}
          >
            <div className="flex items-start gap-3">
              <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--burgundy-soft)] text-sm font-semibold text-[var(--burgundy)]">
                {action.title.slice(0, 1)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-base font-semibold text-[var(--text)]">
                    {action.title}
                  </p>
                  {action.status ? (
                    <Badge className="px-2.5 text-[11px]">
                      {action.status}
                    </Badge>
                  ) : null}
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {action.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
