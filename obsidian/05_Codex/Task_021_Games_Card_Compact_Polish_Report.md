# Task 021 — Games Card Compact Polish Report

## 1. Что было слишком высоким

На экране `Игры` карточки Scratch Card и Wheel Of Prizes занимали слишком много вертикального места:

- visual-зоны были высокими;
- Scratch Card занимала почти весь первый экран;
- Wheel Of Prizes появлялся ниже, чем нужно;
- CTA второй карточки мог оказываться близко к BottomNav.

## 2. Что уменьшено

- Visual area карточек уменьшена с `min-h-40` до `min-h-32`.
- Padding visual-зоны уменьшен с `p-5` до `px-4 py-4`.
- Scratch image уменьшен примерно с `132x152` до `108x128`.
- Wheel image уменьшен примерно с `138` до `112`.
- Карточки теперь идут с `gap-3` вместо `gap-4`.
- Description/CTA area уменьшена с `p-5` до `px-4 py-4`.
- CTA `Открыть` получил `min-h-11`.
- Descriptions в `app/src/data/games.ts` сокращены:
  - Scratch: `Клубная карточка-сюрприз для будущих розыгрышей.`
  - Wheel: `Колесо привилегий для будущих промо-кампаний.`

## 3. Какие viewport проверены

Через Playwright/browser responsive проверены:

- `390x844`;
- `375x812`;
- `430x932`.

Проверялось:

- переход на вкладку `Игры`;
- отображение Scratch Card;
- отображение Wheel Of Prizes;
- click по CTA `Открыть` для Wheel.

## 4. Результат npm.cmd run lint

`npm.cmd run lint` — успешно, ошибок нет.

## 5. Результат npm.cmd run build

`npm.cmd run build` — успешно, production build собран.

## 6. Что осталось без изменений

- Backend.
- Game result logic.
- Prize logic.
- `localStorage`.
- Cookies.
- API.
- New dependencies.
- New assets.
- Scratch/Wheel demo result mechanics.

## 7. Что проверить после deploy в Telegram

- Wheel Of Prizes появляется раньше на реальном mobile viewport.
- Вторая кнопка `Открыть` не упирается в BottomNav.
- Game visuals остаются читаемыми.
- Нет horizontal scroll.
- Demo-компоненты открываются как раньше.
