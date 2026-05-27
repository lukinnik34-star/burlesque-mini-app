"use client";

import type { AppTab } from "@/types/navigation";

type BottomNavItem = {
  id: AppTab;
  label: string;
};

const items: BottomNavItem[] = [
  { id: "home", label: "Главная" },
  { id: "events", label: "Афиша" },
  { id: "games", label: "Игры" },
  { id: "prizes", label: "Призы" },
  { id: "profile", label: "Профиль" },
];

type BottomNavProps = {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
};

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-md px-3 pb-[calc(env(safe-area-inset-bottom)+9px)] pt-2">
      <div className="grid grid-cols-5 gap-1 rounded-[30px] border border-[var(--line-soft)] bg-white/88 p-1.5 shadow-[0_-18px_38px_rgba(122,60,35,0.11)] backdrop-blur-2xl">
        {items.map((item) => {
          const isActive = item.id === activeTab;

          return (
            <button
              aria-current={isActive ? "page" : undefined}
              className={[
                "grid h-11 min-w-0 place-items-center rounded-[20px] px-0.5 text-center text-[10px] font-semibold leading-tight transition duration-200 active:translate-y-px",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--burgundy)]",
                isActive
                  ? "bg-[var(--burgundy-soft)] text-[var(--burgundy)] shadow-[inset_0_1px_0_rgba(255,255,255,0.74)]"
                  : "text-[#8f786f] hover:bg-[#fff4e8] hover:text-[var(--burgundy)]",
              ].join(" ")}
              key={item.id}
              onClick={() => onTabChange(item.id)}
              type="button"
            >
              <span className="block whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
