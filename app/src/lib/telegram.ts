import type {
  TelegramThemeParams,
  TelegramWebApp,
  TelegramWebAppUser,
} from "@/types/telegram";

export type TelegramRuntimeStatus =
  | "browser"
  | "telegram_webview_without_webapp"
  | "telegram_launch_params_without_webapp"
  | "telegram_without_init_data"
  | "telegram_with_init_data";

export type TelegramRuntimeDiagnostics = {
  hasWindow: boolean;
  hasTelegramObject: boolean;
  hasWebAppObject: boolean;
  hasTelegramScriptTag: boolean;
  hasLaunchParams: boolean;
  hasInitDataUnsafe: boolean;
  initDataLength: number;
  launchParamsInitDataLength: number;
  launchParamsPlatform?: string;
  launchParamsVersion?: string;
  userAgentIncludesTelegram: boolean;
  telegramObjectKeys: string[];
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

type TelegramLaunchParams = {
  initData: string;
  platform?: string;
  version?: string;
  themeParams?: string;
  user?: TelegramWebAppUser;
};

const fallbackDisplayName = "Гость Burlesque";

const browserDiagnostics: TelegramRuntimeDiagnostics = {
  hasWindow: false,
  hasTelegramObject: false,
  hasWebAppObject: false,
  hasTelegramScriptTag: false,
  hasLaunchParams: false,
  hasInitDataUnsafe: false,
  initDataLength: 0,
  launchParamsInitDataLength: 0,
  userAgentIncludesTelegram: false,
  telegramObjectKeys: [],
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

function parseTelegramUser(userRaw: string | null): TelegramWebAppUser | undefined {
  if (!userRaw) {
    return undefined;
  }

  try {
    return JSON.parse(userRaw) as TelegramWebAppUser;
  } catch {
    return undefined;
  }
}

function getTelegramLaunchParamsFromHash(): TelegramLaunchParams | null {
  if (typeof window === "undefined") {
    return null;
  }

  const hash = window.location.hash.replace(/^#/, "");

  if (!hash) {
    return null;
  }

  const launchParams = new URLSearchParams(hash);
  const initData = launchParams.get("tgWebAppData");

  if (!initData) {
    return null;
  }

  const initDataParams = new URLSearchParams(initData);

  return {
    initData,
    platform: launchParams.get("tgWebAppPlatform") ?? undefined,
    version: launchParams.get("tgWebAppVersion") ?? undefined,
    themeParams: launchParams.get("tgWebAppThemeParams") ?? undefined,
    user: parseTelegramUser(initDataParams.get("user")),
  };
}

function getRuntimeParts() {
  const hasWindow = typeof window !== "undefined";
  const hasDocument = typeof document !== "undefined";
  const telegramObject = hasWindow ? window.Telegram : undefined;
  const webApp = telegramObject?.WebApp;
  const launchParams = getTelegramLaunchParamsFromHash();
  const webAppInitData = webApp?.initData ?? "";
  const initData = webAppInitData || launchParams?.initData || "";
  const userAgent = hasWindow ? window.navigator.userAgent.toLowerCase() : "";
  const telegramScript = hasDocument
    ? document.querySelector('script[src*="telegram-web-app.js"]')
    : null;
  const telegramObjectKeys =
    telegramObject && typeof telegramObject === "object"
      ? Object.keys(telegramObject).slice(0, 20)
      : [];
  const diagnostics: TelegramRuntimeDiagnostics = {
    hasWindow,
    hasTelegramObject: Boolean(telegramObject),
    hasWebAppObject: Boolean(webApp),
    hasTelegramScriptTag: Boolean(telegramScript),
    hasLaunchParams: Boolean(launchParams),
    hasInitDataUnsafe: Boolean(webApp?.initDataUnsafe),
    initDataLength: initData.length,
    launchParamsInitDataLength: launchParams?.initData.length ?? 0,
    launchParamsPlatform: launchParams?.platform,
    launchParamsVersion: launchParams?.version,
    userAgentIncludesTelegram: userAgent.includes("telegram"),
    telegramObjectKeys,
  };

  return { diagnostics, launchParams, webApp };
}

export function getTelegramWebApp(): TelegramWebApp | undefined {
  return getRuntimeParts().webApp;
}

export function isTelegramMiniApp(): boolean {
  return Boolean(getTelegramWebApp());
}

export function getTelegramUser(): TelegramWebAppUser | undefined {
  const { launchParams, webApp } = getRuntimeParts();

  return webApp?.initDataUnsafe?.user ?? launchParams?.user;
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

function mapTelegramUser(user?: TelegramWebAppUser): TelegramRuntimeInfo["user"] {
  if (!user) {
    return undefined;
  }

  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    username: user.username,
    languageCode: user.language_code,
    isPremium: user.is_premium,
  };
}

export function getTelegramRuntimeInfo(): TelegramRuntimeInfo {
  const { diagnostics, launchParams, webApp } = getRuntimeParts();

  if (!diagnostics.hasWindow) {
    return browserRuntimeInfo;
  }

  if (webApp) {
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
      user: mapTelegramUser(user),
      displayName: getDisplayName(user),
      diagnostics,
    };
  }

  if (launchParams) {
    return {
      status: "telegram_launch_params_without_webapp",
      isTelegram: true,
      hasInitData: true,
      platform: launchParams.platform,
      version: launchParams.version,
      user: mapTelegramUser(launchParams.user),
      displayName: getDisplayName(launchParams.user),
      diagnostics,
    };
  }

  if (diagnostics.userAgentIncludesTelegram) {
    return {
      status: "telegram_webview_without_webapp",
      isTelegram: true,
      hasInitData: false,
      displayName: fallbackDisplayName,
      diagnostics,
    };
  }

  return {
    status: "browser",
    isTelegram: false,
    hasInitData: false,
    displayName: fallbackDisplayName,
    diagnostics,
  };
}
