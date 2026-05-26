import type {
  TelegramThemeParams,
  TelegramWebApp,
  TelegramWebAppUser,
  TelegramWindow,
} from "@/types/telegram";

const mockUser: TelegramWebAppUser = {
  id: 0,
  first_name: "Гость",
  username: "burlesque_guest",
};

export function getTelegramWebApp(): TelegramWebApp | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  return (window as TelegramWindow).Telegram?.WebApp;
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
