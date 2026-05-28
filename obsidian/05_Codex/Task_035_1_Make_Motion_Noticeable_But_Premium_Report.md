# Task 035.1 Make Motion Noticeable But Premium Report

## Какие motion effects усилены

- Screen transition стал заметнее:
  - `opacity 0 -> 1`;
  - `translateY 12px -> 0`;
  - `scale 0.985 -> 1`;
  - duration `300ms`.
- BottomNav active motion стал выразительнее:
  - active pill opacity/background усилен;
  - icon scale увеличен до `1.08`;
  - icon translateY `-2px`;
  - tap scale `0.96`.
- Home hero ambient glow усилен:
  - glow size увеличен;
  - lavender/wine opacity усилена;
  - drift стал заметнее, но остался медленным.
- Demo/detail reveal стал заметнее через общий `screen-soft-enter`.
- Selected game/reward card получили более заметный lavender border/glow.
- Profile progress fill стал заметнее:
  - duration `820ms`;
  - delayed start `80ms`;
  - smooth easing.
- Scratch shimmer немного усилен:
  - highlight opacity увеличен;
  - duration `3.2s`.

## Использованные значения

- Screen transition: `300ms cubic-bezier(0.22, 1, 0.36, 1)`.
- Screen transform start: `translate3d(0, 12px, 0) scale(0.985)`.
- Ambient drift: `12.5s ease-in-out`.
- Ambient opacity: примерно `0.55 -> 0.85`.
- Ambient scale: `1 -> 1.06`.
- Tap feedback: `scale(0.97)` globally, BottomNav `scale(0.96)`.
- BottomNav active icon: `scale(1.08)` and `translateY(-0.5rem class equivalent)`.
- Progress fill: `820ms cubic-bezier(0.22, 1, 0.36, 1) 80ms`.
- Scratch shimmer: `3.2s ease-in-out`.

## Prefers Reduced Motion

`prefers-reduced-motion` сохранен.

В reduced motion:

- decorative animations становятся почти мгновенными;
- long transitions отключаются через минимальную duration;
- tap transform отключается.

## Проверка

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.
- `npm.cmd run dev` — checked locally.
- Browser preview без hydration overlay.
- Проверено через Playwright на `390x844`:
  - screen transition duration `0.3s`;
  - Home ambient duration `12.5s`;
  - Scratch shimmer duration `3.2s`;
  - Profile progress duration `0.82s`;
  - selected game glow присутствует;
  - horizontal scroll не обнаружен.

## Что проверить в Telegram

- Переключение вкладок заметно, но не дергает scroll.
- BottomNav active item ощущается живее.
- Hero glow виден на темном фоне, но не отвлекает.
- Demo/detail panels появляются мягко.
- Profile progress заполняется заметно.
- Нет лагов в Telegram WebView.
