import type {
  TelegramThemeParams,
  TelegramWebApp,
  TelegramWebAppUser,
} from "@/types/telegram";

export type TelegramRuntimeStatus =
  | "browser"
  | "telegram_without_init_data"
  | "telegram_with_init_data";

export type TelegramRuntimeInfo = {
  status: TelegramRuntimeStatus;
  isTelegram: boolean;
  hasInitData: boolean;
  platform?: string;
  version?: string;
  colorScheme?: "light" | "dark";
  user?: {
    id?: number;
    firstName?: string;
    lastName?: string;
    username?: string;
    languageCode?: string;
    isPremium?: boolean;
  };
  displayName: string;
};

const fallbackDisplayName = "Гость Burlesque";

export const browserRuntimeInfo: TelegramRuntimeInfo = {
  status: "browser",
  isTelegram: false,
  hasInitData: false,
  displayName: fallbackDisplayName,
};

const mockUser: TelegramWebAppUser = {
  id: 0,
  first_name: "Гость",
  username: "burlesque_guest",
};

export function getTelegramWebApp(): TelegramWebApp | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  return window.Telegram?.WebApp;
}

export function isTelegramMiniApp(): boolean {
  return Boolean(getTelegramWebApp());
}

export function getTelegramUser(): TelegramWebAppUser | undefined {
  return getTelegramWebApp()?.initDataUnsafe?.user;
}

export function getCurrentUser(): TelegramWebAppUser {
  return getTelegramUser() ?? mockUser;
}

export function callTelegramReady(): void {
  getTelegramWebApp()?.ready?.();
}

export function expandTelegramWebApp(): void {
  getTelegramWebApp()?.expand?.();
}

export function getTelegramThemeParams(): TelegramThemeParams {
  return getTelegramWebApp()?.themeParams ?? {};
}

function getDisplayName(user?: TelegramWebAppUser): string {
  const fullName = [user?.first_name, user?.last_name]
    .filter(Boolean)
    .join(" ")
    .trim();

  if (fullName) {
    return fullName;
  }

  if (user?.username) {
    return `@${user.username}`;
  }

  return fallbackDisplayName;
}

export function getTelegramRuntimeInfo(): TelegramRuntimeInfo {
  const webApp = getTelegramWebApp();

  if (!webApp) {
    return browserRuntimeInfo;
  }

  const hasInitData = Boolean(webApp.initData?.trim());
  const user = webApp.initDataUnsafe?.user;

  return {
    status: hasInitData
      ? "telegram_with_init_data"
      : "telegram_without_init_data",
    isTelegram: true,
    hasInitData,
    platform: webApp.platform,
    version: webApp.version,
    colorScheme: webApp.colorScheme,
    user: user
      ? {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          username: user.username,
          languageCode: user.language_code,
          isPremium: user.is_premium,
        }
      : undefined,
    displayName: getDisplayName(user),
  };
}
