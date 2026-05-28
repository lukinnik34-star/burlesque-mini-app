import { burlesqueAssets } from "@/data/assets";
import type { TelegramRuntimeInfo } from "@/lib/telegram";

type UserCardProps = {
  runtimeInfo: TelegramRuntimeInfo;
};

export function UserCard({ runtimeInfo }: UserCardProps) {
  const hasTelegramUser = Boolean(runtimeInfo.user);
  const displayName = hasTelegramUser ? runtimeInfo.displayName : "Демо-гость";
  const isFallbackUser = !hasTelegramUser;
  const initials = displayName.slice(0, 1).toUpperCase();
  const userHandle = runtimeInfo.user?.username
    ? `@${runtimeInfo.user.username}`
    : hasTelegramUser
      ? "Открыто в Telegram"
      : "Демо-просмотр";
  const photoUrl = runtimeInfo.user?.photoUrl;

  return (
    <section
      className="relative overflow-hidden rounded-[34px] border border-[rgba(214,184,255,0.2)] bg-cover bg-center p-5 text-white shadow-[0_26px_64px_rgba(0,0,0,0.48)]"
      style={{
        backgroundImage: `linear-gradient(145deg,rgba(17,10,24,0.9),rgba(65,30,64,0.82),rgba(14,10,18,0.86)),url(${burlesqueAssets.profile.memberCardBg})`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(185,156,255,0.28),transparent_34%),radial-gradient(circle_at_90%_24%,rgba(123,51,79,0.28),transparent_36%)]" />
      <div className="relative flex items-center gap-4">
        <div className="grid size-[72px] shrink-0 place-items-center overflow-hidden rounded-full border border-[rgba(214,184,255,0.26)] bg-[linear-gradient(145deg,#171020,#2b1b3d_54%,#0f0a16)] font-serif text-2xl font-semibold text-[var(--lavender)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_16px_34px_rgba(0,0,0,0.32)]">
          {photoUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt=""
              className="size-full object-cover"
              referrerPolicy="no-referrer"
              src={photoUrl}
            />
          ) : (
            initials
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p
            className={[
              "font-serif font-semibold leading-tight",
              isFallbackUser ? "text-[22px]" : "truncate text-2xl",
            ].join(" ")}
          >
            {displayName}
          </p>
          <p className="mt-1 truncate text-sm text-white/72">{userHandle}</p>
        </div>
        <div className="shrink-0 rounded-full border border-[rgba(214,184,255,0.26)] bg-white/10 px-3 py-1 text-xs font-semibold text-[var(--lavender)]">
          Silver
        </div>
      </div>

      <div className="relative mt-6 grid grid-cols-3 gap-2">
        {[
          ["12", "визитов"],
          ["1 240", "баллов"],
          ["8", "событий"],
        ].map(([value, label]) => (
          <div
            className="rounded-2xl border border-white/10 bg-white/[0.08] px-3 py-3 text-center"
            key={label}
          >
            <p className="text-base font-semibold">{value}</p>
            <p className="mt-1 text-[11px] text-white/66">{label}</p>
          </div>
        ))}
      </div>

      <p className="relative mt-4 rounded-2xl border border-white/10 bg-white/[0.08] px-3 py-2 text-xs leading-5 text-white/74">
        Данные профиля показаны для примера.
      </p>
    </section>
  );
}
