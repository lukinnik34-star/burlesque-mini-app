import type {
  TelegramThemeParams,
  TelegramWebApp,
  TelegramWebAppUser,
} from "@/types/telegram";

export type TelegramRuntimeStatus =
  | "browser"
  | "telegram_webview_without_webapp"
  | "telegram_without_init_data"
  | "telegram_with_init_data";

export type TelegramRuntimeDiagnostics = {
  hasWindow: boolean;
  hasTelegramObject: boolean;
  hasWebAppObject: boolean;
  hasInitDataUnsafe: boolean;
  initDataLength: number;
  userAgentIncludesTelegram: boolean;
};

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
  diagnostics: TelegramRuntimeDiagnostics;
};

const fallbackDisplayName = "Гость Burlesque";

const browserDiagnostics: TelegramRuntimeDiagnostics = {
  hasWindow: false,
  hasTelegramObject: false,
  hasWebAppObject: false,
  hasInitDataUnsafe: false,
  initDataLength: 0,
  userAgentIncludesTelegram: false,
};

export const browserRuntimeInfo: TelegramRuntimeInfo = {
  status: "browser",
  isTelegram: false,
  hasInitData: false,
  displayName: fallbackDisplayName,
  diagnostics: browserDiagnostics,
};

const mockUser: TelegramWebAppUser = {
  id: 0,
  first_name: "Гость",
  username: "burlesque_guest",
};

function getRuntimeParts() {
  const hasWindow = typeof window !== "undefined";
  const telegramObject = hasWindow ? window.Telegram : undefined;
  const webApp = telegramObject?.WebApp;
  const initData = webApp?.initData ?? "";
  const userAgent = hasWindow ? window.navigator.userAgent.toLowerCase() : "";
  const diagnostics: TelegramRuntimeDiagnostics = {
    hasWindow,
    hasTelegramObject: Boolean(telegramObject),
    hasWebAppObject: Boolean(webApp),
    hasInitDataUnsafe: Boolean(webApp?.initDataUnsafe),
    initDataLength: initData.length,
    userAgentIncludesTelegram: userAgent.includes("telegram"),
  };

  return { diagnostics, webApp };
}

export function getTelegramWebApp(): TelegramWebApp | undefined {
  return getRuntimeParts().webApp;
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
  const { diagnostics, webApp } = getRuntimeParts();

  if (!diagnostics.hasWindow) {
    return browserRuntimeInfo;
  }

  if (!webApp) {
    return {
      status: diagnostics.userAgentIncludesTelegram
        ? "telegram_webview_without_webapp"
        : "browser",
      isTelegram: diagnostics.userAgentIncludesTelegram,
      hasInitData: false,
      displayName: fallbackDisplayName,
      diagnostics,
    };
  }

  const hasInitData = diagnostics.initDataLength > 0;
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
    diagnostics,
  };
}
