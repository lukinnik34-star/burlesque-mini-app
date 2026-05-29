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

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
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
        className="bottom-sheet-backdrop absolute inset-0 bg-black/64 backdrop-blur-sm"
        onClick={onClose}
        type="button"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <div
          className="bottom-sheet-panel pointer-events-auto w-full max-w-md overflow-hidden rounded-t-[34px] border border-[rgba(214,184,255,0.2)] bg-[linear-gradient(180deg,rgba(31,22,42,0.98),rgba(13,9,18,0.99))] shadow-[0_-24px_70px_rgba(0,0,0,0.62)]"
          data-bottom-sheet-panel="true"
        >
          <div className="mx-auto mt-3 h-1.5 w-12 rounded-full bg-white/18" />

          <div className="max-h-[82vh] overflow-y-auto px-5 pb-[calc(env(safe-area-inset-bottom)+20px)] pt-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                {eyebrow ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lavender)]">
                    {eyebrow}
                  </p>
                ) : null}
                <h3 className="mt-2 font-serif text-[30px] font-semibold leading-none text-[var(--text)]">
                  {title}
                </h3>
              </div>
              <button
                aria-label="Закрыть"
                className="tap-lift grid size-10 shrink-0 place-items-center rounded-full border border-[var(--line-soft)] bg-white/[0.06] text-xl leading-none text-[var(--muted-strong)] transition hover:border-[var(--line-strong)] hover:bg-white/[0.09]"
                onClick={onClose}
                type="button"
              >
                ×
              </button>
            </div>

            <div className="mt-5">{children}</div>
            {footer ? <div className="mt-5">{footer}</div> : null}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
