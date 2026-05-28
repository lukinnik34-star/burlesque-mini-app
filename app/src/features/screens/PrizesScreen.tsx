import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScreenHeader } from "@/components/ui/ScreenHeader";
import { mockPrizes } from "@/data/prizes";
import type { MockPrize } from "@/types/mocks";

const prizeStatusLabel = {
  mock: "Демо",
  available: "Демо",
  claimed: "Демо",
  expired: "Позже",
};

type PrizesScreenProps = {
  selectedPrize: MockPrize | null;
  onSelectPrize: (prizeId: string) => void;
};

export function PrizesScreen({
  selectedPrize,
  onSelectPrize,
}: PrizesScreenProps) {
  return (
    <div className="space-y-5 pb-[170px]">
      <ScreenHeader
        title="Призы"
        subtitle="Будущие комплименты и предложения для гостей Burlesque."
      />

      <div className="grid gap-2.5">
        {mockPrizes.map((prize) => {
          const isSelected = prize.id === selectedPrize?.id;

          return (
            <Card
              className={[
                "tap-lift rounded-[24px] px-3.5 py-3 transition duration-200 hover:border-[var(--line-strong)] hover:bg-white/[0.06]",
                isSelected ? "border-[var(--line-strong)] bg-white/[0.07]" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              key={prize.id}
            >
              <div className="flex items-center gap-3.5">
                <div className="grid size-[58px] shrink-0 place-items-center rounded-[21px] border border-[var(--line-soft)] bg-[linear-gradient(145deg,rgba(185,156,255,0.14),rgba(123,51,79,0.18))] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_24px_rgba(0,0,0,0.18)]">
                  {prize.iconSrc ? (
                    <div
                      className={[
                        "bg-contain bg-center bg-no-repeat drop-shadow-[0_10px_14px_rgba(0,0,0,0.24)]",
                        prize.id === "discount-coupon"
                          ? "h-10 w-14"
                          : "size-12",
                      ].join(" ")}
                      style={{ backgroundImage: `url(${prize.iconSrc})` }}
                    />
                  ) : (
                    <span className="grid size-9 place-items-center rounded-full bg-white/[0.08]">
                      <span className="size-4 rotate-45 rounded-[4px] border border-[var(--lavender)]/40 bg-[var(--lavender)]/14" />
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-base font-semibold text-[var(--text)]">
                      {prize.title}
                    </p>
                    <Badge className="px-2.5 text-[11px]">
                      {prizeStatusLabel[prize.status]}
                    </Badge>
                  </div>
                  <p className="mt-1.5 text-sm leading-5 text-[var(--muted)]">
                    {prize.description}
                  </p>
                  <Button
                    className="mt-2.5 h-7 min-h-0 px-3 py-0 text-xs"
                    onClick={() => onSelectPrize(prize.id)}
                    variant="secondary"
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {selectedPrize ? (
        <Card className="screen-soft-enter p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lavender)]">
                Детали привилегии
              </p>
              <p className="mt-2 font-serif text-2xl font-semibold leading-tight">
                {selectedPrize.title}
              </p>
            </div>
            <Badge className="px-2.5 text-[11px]">
              {prizeStatusLabel[selectedPrize.status]}
            </Badge>
          </div>
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
            {selectedPrize.description}
          </p>
          {selectedPrize.note ? (
            <p className="mt-4 rounded-2xl border border-[var(--line-soft)] bg-[var(--surface-soft)] px-3 py-2 text-xs leading-5 text-[var(--muted-strong)]">
              {selectedPrize.note}
            </p>
          ) : null}
        </Card>
      ) : null}

      <p className="rounded-2xl border border-[var(--line-soft)] bg-white/[0.05] px-4 py-3 text-xs leading-5 text-[var(--muted)]">
        Пока это демонстрационный раздел. Выдача привилегий будет подключена позже.
      </p>
    </div>
  );
}
