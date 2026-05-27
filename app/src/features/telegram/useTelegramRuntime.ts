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
    const updateRuntimeInfo = () => {
      const nextRuntimeInfo = getTelegramRuntimeInfo();

      callTelegramReady();
      expandTelegramWebApp();
      setRuntimeInfo(nextRuntimeInfo);
    };

    updateRuntimeInfo();
    const timeoutId = window.setTimeout(updateRuntimeInfo, 250);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return runtimeInfo;
}
