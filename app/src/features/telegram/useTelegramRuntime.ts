"use client";

import { useEffect, useState } from "react";
import {
  browserRuntimeInfo,
  callTelegramReady,
  expandTelegramWebApp,
  getTelegramRuntimeInfo,
  getTelegramWebApp,
  type TelegramRuntimeInfo,
} from "@/lib/telegram";

const telegramScriptId = "telegram-web-app-script";
const telegramScriptSrc = "https://telegram.org/js/telegram-web-app.js";
const retryDelays = [0, 100, 250, 500, 1000, 2000, 3500];
const scriptLoadRetryDelays = [0, 100, 300, 700, 1500];

function hasTelegramUserAgent(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return window.navigator.userAgent.toLowerCase().includes("telegram");
}

function findTelegramScript(): HTMLScriptElement | null {
  if (typeof document === "undefined") {
    return null;
  }

  return (
    document.getElementById(telegramScriptId) ??
    document.querySelector('script[src*="telegram-web-app.js"]')
  ) as HTMLScriptElement | null;
}

function ensureTelegramWebAppScript(onLoad: () => void): void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  if (getTelegramWebApp()) {
    onLoad();
    return;
  }

  const existingScript = findTelegramScript();

  if (existingScript) {
    if (!existingScript.id) {
      existingScript.id = telegramScriptId;
    }

    window.setTimeout(onLoad, 100);
    window.setTimeout(onLoad, 300);
    return;
  }

  const script = document.createElement("script");
  script.id = telegramScriptId;
  script.src = telegramScriptSrc;
  script.async = true;
  script.onload = onLoad;
  script.onerror = onLoad;

  document.head.appendChild(script);
}

export function useTelegramRuntime(): TelegramRuntimeInfo {
  const [runtimeInfo, setRuntimeInfo] =
    useState<TelegramRuntimeInfo>(browserRuntimeInfo);

  useEffect(() => {
    let stopped = false;
    let fallbackScriptRequested = false;
    const timeoutIds: number[] = [];

    const clearScheduledChecks = () => {
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeoutIds.length = 0;
    };

    const scheduleCheck = (delay: number) => {
      const timeoutId = window.setTimeout(checkRuntimeInfo, delay);
      timeoutIds.push(timeoutId);
    };

    const scheduleScriptLoadChecks = () => {
      scriptLoadRetryDelays.forEach(scheduleCheck);
    };

    const requestFallbackScript = () => {
      if (fallbackScriptRequested || !hasTelegramUserAgent()) {
        return;
      }

      fallbackScriptRequested = true;
      ensureTelegramWebAppScript(scheduleScriptLoadChecks);
    };

    function checkRuntimeInfo() {
      if (stopped) {
        return;
      }

      const nextRuntimeInfo = getTelegramRuntimeInfo();

      callTelegramReady();
      expandTelegramWebApp();
      setRuntimeInfo(nextRuntimeInfo);

      if (nextRuntimeInfo.diagnostics.hasWebAppObject) {
        stopped = true;
        clearScheduledChecks();
        return;
      }

      if (
        nextRuntimeInfo.status === "telegram_webview_without_webapp" ||
        (nextRuntimeInfo.diagnostics.hasTelegramObject &&
          !nextRuntimeInfo.diagnostics.hasWebAppObject)
      ) {
        requestFallbackScript();
      }
    }

    retryDelays.forEach(scheduleCheck);

    return () => {
      stopped = true;
      clearScheduledChecks();
    };
  }, []);

  return runtimeInfo;
}
