import { burlesqueAssets } from "@/data/assets";
import type { TelegramWebAppUser } from "@/types/telegram";

type UserCardProps = {
  isTelegram: boolean;
  user: TelegramWebAppUser;
};

export function UserCard({ isTelegram, user }: UserCardProps) {
  const initials = user.first_name.slice(0, 1).toUpperCase();
  const displayName = [user.first_name, user.last_name].filter(Boolean).join(" ");
  const userHandle = user.username ? `@${user.username}` : "гость Burlesque";

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
          {user.photo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt=""
              className="size-full object-cover"
              src={user.photo_url}
            />
          ) : (
            initials
          )}
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
        {isTelegram
          ? "Авторизация будет подключена позже."
          : "Данные профиля показаны для примера."}
      </p>
    </section>
  );
}
