import { mockEvents } from "@/data/events";
import { homeIntro, mockHomeActions } from "@/data/home";
import { burlesqueAssets } from "@/data/assets";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const featuredEvent = mockEvents[0];

type HomeScreenProps = {
  onOpenEvents: () => void;
  onOpenPrizes: () => void;
};

export function HomeScreen({ onOpenEvents, onOpenPrizes }: HomeScreenProps) {
  return (
    <div className="space-y-5 pb-4">
      <section className="relative overflow-hidden rounded-[34px] border border-[var(--line-soft)] bg-[linear-gradient(145deg,#fffdf8_0%,#fff0df_100%)] p-6 shadow-[var(--shadow-soft)]">
        <div
          className="animate-pulse-soft pointer-events-none absolute -right-10 -top-10 size-48 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${burlesqueAssets.hero.glowBlob})`,
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-12 -right-6 h-32 w-48 bg-contain bg-bottom bg-no-repeat opacity-25"
          style={{
            backgroundImage: `url(${burlesqueAssets.hero.burgundyWave})`,
          }}
        />
        <div
          className="animate-float-slow pointer-events-none absolute right-6 top-7 size-28 bg-contain bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url(${burlesqueAssets.hero.softOrbit})`,
          }}
        />
        <div className="relative">
          <Badge>Burlesque</Badge>
          <h2 className="mt-5 max-w-[15rem] font-serif text-[38px] font-semibold leading-[0.98] text-[var(--text)]">
            Добро пожаловать
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
            {homeIntro.description}
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Button onClick={onOpenEvents}>Смотреть афишу</Button>
            <button
              className="rounded-full border border-[var(--line-soft)] bg-white/60 px-5 py-3 text-sm font-semibold text-[var(--burgundy)] shadow-[var(--shadow-card)]"
              onClick={onOpenPrizes}
              type="button"
            >
              Мои привилегии
            </button>
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
          <div className="mt-4 flex items-center justify-between rounded-2xl bg-[var(--surface-soft)] px-4 py-3">
            <div>
              <p className="text-xs text-[var(--muted)]">Начало</p>
              <p className="text-sm font-semibold text-[var(--text)]">
                {featuredEvent.timeLabel}
              </p>
            </div>
            <button
              className="text-sm font-semibold text-[var(--burgundy)]"
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
          <Card className="rounded-[26px] px-4 py-4" key={action.id}>
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
