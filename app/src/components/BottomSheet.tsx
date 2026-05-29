"use client";

import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

type BottomSheetProps = {
  children: ReactNode;
  eyebrow?: string;
  footer?: ReactNode;
  onClose: () => void;
  title: string;
};

export function BottomSheet({
  children,
  eyebrow,
  footer,
  onClose,
  title,
}: BottomSheetProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div aria-modal="true" className="fixed inset-0 z-50" role="dialog">
      <button
        aria-label="Закрыть"
        className="bottom-sheet-backdrop absolute inset-0 bg-black/72"
        onClick={onClose}
        type="button"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <div
          className="bottom-sheet-panel pointer-events-auto w-full max-w-md overflow-hidden rounded-t-[30px] border border-[rgba(214,184,255,0.18)] bg-[linear-gradient(180deg,rgba(31,22,42,0.98),rgba(13,9,18,0.99))] shadow-[0_-18px_54px_rgba(0,0,0,0.54)]"
          data-bottom-sheet-panel="true"
        >
          <div className="mx-auto mt-2.5 h-1 w-10 rounded-full bg-white/18" />

          <div className="max-h-[78vh] overflow-y-auto px-5 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-3.5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                {eyebrow ? (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[var(--lavender)]">
                    {eyebrow}
                  </p>
                ) : null}
                <h3 className="mt-1.5 font-serif text-[27px] font-semibold leading-none text-[var(--text)]">
                  {title}
                </h3>
              </div>
              <button
                aria-label="Закрыть"
                className="tap-lift grid size-9 shrink-0 place-items-center rounded-full border border-[var(--line-soft)] bg-white/[0.06] text-lg leading-none text-[var(--muted-strong)] transition hover:border-[var(--line-strong)] hover:bg-white/[0.09]"
                onClick={onClose}
                type="button"
              >
                ×
              </button>
            </div>

            <div className="mt-4">{children}</div>
            {footer ? <div className="mt-4">{footer}</div> : null}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
