"use client";

import type { AppTab } from "@/types/navigation";

type BottomNavItem = {
  id: AppTab;
  icon: "home" | "calendar" | "spark" | "gift" | "user";
  label: string;
};

const items: BottomNavItem[] = [
  { id: "home", icon: "home", label: "Главная" },
  { id: "events", icon: "calendar", label: "Афиша" },
  { id: "games", icon: "spark", label: "Игры" },
  { id: "prizes", icon: "gift", label: "Призы" },
  { id: "profile", icon: "user", label: "Профиль" },
];

type BottomNavProps = {
  activeTab: AppTab;
  onTabChange: (tab: AppTab) => void;
};

function NavIcon({ icon }: { icon: BottomNavItem["icon"] }) {
  const common = {
    className: "size-[18px]",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.9,
    viewBox: "0 0 24 24",
  };

  if (icon === "home") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M4 11.5 12 5l8 6.5" />
        <path d="M6.5 10.5V20h11v-9.5" />
        <path d="M10 20v-5h4v5" />
      </svg>
    );
  }

  if (icon === "calendar") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M7 4v3M17 4v3" />
        <rect height="15" rx="3" width="16" x="4" y="6" />
        <path d="M7.5 11h9M8 15h3.5" />
      </svg>
    );
  }

  if (icon === "gift") {
    return (
      <svg aria-hidden="true" {...common}>
        <path d="M4 11h16v9H4z" />
        <path d="M4 11V8h16v3M12 8v12" />
        <path d="M12 8c-2.8 0-4.5-.8-4.5-2.1C7.5 4.8 8.4 4 9.4 4c1.4 0 2.1 1.2 2.6 4Z" />
        <path d="M12 8c2.8 0 4.5-.8 4.5-2.1 0-1.1-.9-1.9-1.9-1.9-1.4 0-2.1 1.2-2.6 4Z" />
      </svg>
    );
  }

  if (icon === "user") {
    return (
      <svg aria-hidden="true" {...common}>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5.5 20c.8-3.4 3.1-5.2 6.5-5.2s5.7 1.8 6.5 5.2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" {...common}>
      <path d="M12 3.8 13.8 9l5.4 1.8-5.4 1.8L12 18l-1.8-5.4-5.4-1.8L10.2 9z" />
      <path d="M18 4.5v3M16.5 6h3" />
    </svg>
  );
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-md px-3 pb-[calc(env(safe-area-inset-bottom)+9px)] pt-2">
      <div className="grid grid-cols-5 gap-1 rounded-[32px] border border-[rgba(214,184,255,0.16)] bg-[#120c18]/90 p-1.5 shadow-[0_-18px_46px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl">
        {items.map((item) => {
          const isActive = item.id === activeTab;

          return (
            <button
              aria-current={isActive ? "page" : undefined}
              className={[
                "tap-lift group grid h-[54px] min-w-0 place-items-center rounded-[23px] px-0.5 text-center text-[10px] font-semibold leading-tight transition duration-200 active:scale-[0.97]",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--lavender)]",
                isActive
                  ? "bg-[rgba(185,156,255,0.16)] text-[var(--lavender)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_22px_rgba(143,109,255,0.2)]"
                  : "text-[#9b91aa] hover:bg-white/[0.06] hover:text-[var(--text)]",
              ].join(" ")}
              key={item.id}
              onClick={() => onTabChange(item.id)}
              type="button"
            >
              <span className="grid place-items-center gap-1">
                <span
                  className={[
                    "transition duration-200 group-active:scale-[1.04]",
                    isActive ? "-translate-y-0.5 scale-[1.04]" : "",
                  ].join(" ")}
                >
                <NavIcon icon={item.icon} />
                </span>
                <span className="block whitespace-nowrap">{item.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
