import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ScreenHeader } from "@/components/ui/ScreenHeader";
import { mockPrizes } from "@/data/prizes";
import type { MockPrize } from "@/types/mocks";

const prizeStatusLabel = {
  mock: "Демо",
  available: "Демо",
  claimed: "Получен",
  expired: "Истек",
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
    <div className="space-y-5">
      <ScreenHeader
        title="Призы"
        subtitle="Витрина будущих привилегий и специальных предложений для гостей Burlesque."
      />

      <div className="grid gap-3">
        {mockPrizes.map((prize, index) => {
          const isSelected = prize.id === selectedPrize?.id;

          return (
            <Card
              className={[
                "rounded-[28px] px-4 py-4 transition duration-200 hover:border-[var(--line-strong)] hover:bg-[#fffaf3]",
                isSelected ? "border-[var(--line-strong)] bg-[#fff9f1]" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              key={prize.id}
            >
              <div className="flex items-start gap-3.5">
                <div className="grid size-[70px] shrink-0 place-items-center rounded-[24px] border border-[var(--line-soft)] bg-[linear-gradient(145deg,#fff8ef,#ead0a2)] shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_12px_24px_rgba(122,60,35,0.1)]">
                  {prize.iconSrc ? (
                    <div
                      className={[
                        "bg-contain bg-center bg-no-repeat drop-shadow-[0_10px_14px_rgba(122,60,35,0.16)]",
                        prize.id === "discount-coupon"
                          ? "h-12 w-16"
                          : "size-14",
                      ].join(" ")}
                      style={{ backgroundImage: `url(${prize.iconSrc})` }}
                    />
                  ) : (
                    <span className="font-serif text-2xl font-semibold text-[var(--burgundy)]">
                      {index + 1}
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
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {prize.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl bg-[var(--surface-soft)] px-3 py-2">
                    <p className="text-xs leading-5 text-[var(--muted)]">
                      Скоро
                    </p>
                    <Button
                      className="min-h-9 px-4 text-xs"
                      onClick={() => onSelectPrize(prize.id)}
                      variant="secondary"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {selectedPrize ? (
        <Card className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--burgundy)]">
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
    </div>
  );
}
