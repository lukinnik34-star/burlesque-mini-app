import { burlesqueAssets } from "@/data/assets";
import type { TelegramRuntimeInfo } from "@/lib/telegram";

type UserCardProps = {
  runtimeInfo: TelegramRuntimeInfo;
};

export function UserCard({ runtimeInfo }: UserCardProps) {
  const isTelegram = runtimeInfo.isTelegram;
  const hasTelegramUser = Boolean(runtimeInfo.user);
  const displayName =
    isTelegram && hasTelegramUser ? runtimeInfo.displayName : "Демо-гость";
  const initials = displayName.slice(0, 1).toUpperCase();
  const userHandle = runtimeInfo.user?.username
    ? `@${runtimeInfo.user.username}`
    : isTelegram
      ? "Открыто в Telegram"
      : "Браузерный просмотр";
  const note = isTelegram
    ? "Telegram найден. Авторизация будет подключена позже."
    : "Данные профиля показаны для примера.";

  return (
    <section
      className="relative overflow-hidden rounded-[32px] bg-[var(--burgundy)] bg-cover bg-center p-5 text-white shadow-[0_18px_42px_rgba(143,29,47,0.22)]"
      style={{
        backgroundImage: `linear-gradient(145deg,rgba(74,10,22,0.86),rgba(143,29,47,0.76)),url(${burlesqueAssets.profile.memberCardBg})`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.18),transparent_34%)]" />
      <div className="relative flex items-center gap-4">
        <div className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-full border border-white/24 bg-white/14 font-serif text-2xl font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-lg font-semibold">{displayName}</p>
          <p className="mt-1 truncate text-sm text-white/72">{userHandle}</p>
        </div>
        <div className="shrink-0 rounded-full bg-white/14 px-3 py-1 text-xs font-semibold text-white">
          Silver
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-3 gap-2">
        {[
          ["12", "визитов"],
          ["1 240", "баллов"],
          ["8", "событий"],
        ].map(([value, label]) => (
          <div
            className="rounded-2xl border border-white/12 bg-white/10 px-3 py-3 text-center"
            key={label}
          >
            <p className="text-base font-semibold">{value}</p>
            <p className="mt-1 text-[11px] text-white/68">{label}</p>
          </div>
        ))}
      </div>

      <p className="relative mt-4 rounded-2xl border border-white/12 bg-white/10 px-3 py-2 text-xs leading-5 text-white/76">
        {note}
      </p>
    </section>
  );
}
