"use client";

import { useEffect, useState } from "react";
import {
  browserRuntimeInfo,
  expandTelegramWebApp,
  getTelegramRuntimeInfo,
  callTelegramReady,
  type TelegramRuntimeInfo,
} from "@/lib/telegram";

export function useTelegramRuntime(): TelegramRuntimeInfo {
  const [runtimeInfo, setRuntimeInfo] =
    useState<TelegramRuntimeInfo>(browserRuntimeInfo);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const nextRuntimeInfo = getTelegramRuntimeInfo();

      callTelegramReady();
      expandTelegramWebApp();
      setRuntimeInfo(nextRuntimeInfo);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return runtimeInfo;
}
