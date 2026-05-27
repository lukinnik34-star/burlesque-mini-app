"use client";

import { useEffect, useState } from "react";
import {
  browserRuntimeInfo,
  callTelegramReady,
  expandTelegramWebApp,
  getTelegramRuntimeInfo,
  type TelegramRuntimeInfo,
} from "@/lib/telegram";

const retryDelays = [0, 100, 250, 500, 1000, 2000, 3500];

export function useTelegramRuntime(): TelegramRuntimeInfo {
  const [runtimeInfo, setRuntimeInfo] =
    useState<TelegramRuntimeInfo>(browserRuntimeInfo);

  useEffect(() => {
    let stopped = false;
    const timeoutIds: number[] = [];

    const checkRuntimeInfo = () => {
      if (stopped) {
        return;
      }

      const nextRuntimeInfo = getTelegramRuntimeInfo();

      callTelegramReady();
      expandTelegramWebApp();
      setRuntimeInfo(nextRuntimeInfo);

      if (nextRuntimeInfo.status !== "browser") {
        stopped = true;
        timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
      }
    };

    retryDelays.forEach((delay) => {
      const timeoutId = window.setTimeout(checkRuntimeInfo, delay);
      timeoutIds.push(timeoutId);
    });

    return () => {
      stopped = true;
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  return runtimeInfo;
}
