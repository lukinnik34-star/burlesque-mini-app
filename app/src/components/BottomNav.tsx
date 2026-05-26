"use client";

import type { AppTab } from "@/types/navigation";

type BottomNavItem = {
  id: AppTab;
  label: string;
  mark: string;
};

const items: BottomNavItem[] = [
  { id: "home", label: "Главная", mark: "B" },
  { id: "events", label: "Афиша", mark: "□" },
  { id: "games", label: "Игры", mark: "✦" },
  { id: "prizes", label: "Призы", mark: "◇" },
  { id: "profile", label: "Профиль", mark: "◌" },
];

type BottomNavProps = {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
};

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-md px-2 pb-[calc(env(safe-area-inset-bottom)+8px)] pt-2 sm:px-3">
      <div className="grid grid-cols-5 gap-0.5 rounded-[28px] border border-[var(--line-soft)] bg-white/90 p-1.5 shadow-[0_-16px_34px_rgba(122,60,35,0.12)] backdrop-blur-2xl">
        {items.map((item) => {
          const isActive = item.id === activeTab;

          return (
            <button
              aria-current={isActive ? "page" : undefined}
              className={[
                "grid h-[54px] min-w-0 place-items-center rounded-[20px] px-0.5 text-center text-[9px] font-semibold leading-tight transition duration-200",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--burgundy)]",
                isActive
                  ? "bg-[var(--burgundy-soft)] text-[var(--burgundy)]"
                  : "text-[#8f786f] hover:bg-[#fff4e8] hover:text-[var(--burgundy)]",
              ].join(" ")}
              key={item.id}
              onClick={() => onTabChange(item.id)}
              type="button"
            >
              <span className="text-[15px] leading-none">{item.mark}</span>
              <span className="block whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
