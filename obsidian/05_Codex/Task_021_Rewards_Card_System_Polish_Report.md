# Task 021 — Rewards Card System Polish Report

## 1. Что было перегружено

Экран `Призы` содержал слишком много мелких элементов внутри каждой карточки:

- icon;
- title;
- badge;
- description;
- отдельная status row `Скоро`;
- CTA `Подробнее`;
- отдельные demo/disclaimer notes в detail card.

Из-за этого reward cards выглядели ближе к техническому списку, чем к premium privilege showcase.

## 2. Что упрощено

В карточках оставлены только основные элементы:

- icon / visual marker;
- title;
- short description;
- compact badge;
- CTA `Подробнее`.

Отдельная нижняя status row удалена. Общий дисклеймер вынесен вниз экрана одним тихим текстом:

`Пока это демонстрационный раздел. Выдача привилегий будет подключена позже.`

## 3. Как теперь устроены badges

- Для preview rewards используется короткий badge `Демо`.
- Длинные статусы вроде `Демо-режим` и `Скоро доступно` внутри карточек не используются.
- Badge не должен конкурировать с заголовком и не должен переноситься на две строки.

## 4. Что сделано с fallback icon

Для `Доступ к спецсобытию` числовой fallback заменен на CSS-only ornamental mark:

- cream/champagne icon container;
- белая внутренняя подложка;
- маленький burgundy/champagne ромб.

Новые ассеты, emoji и icon library не добавлялись.

## 5. Какие файлы изменены

- `app/src/features/screens/PrizesScreen.tsx`
- `obsidian/02_Design/Screens.md`
- `obsidian/06_Production/Backlog.md`
- `obsidian/05_Codex/Task_021_Rewards_Card_System_Polish_Report.md`

## 6. Результат npm.cmd run lint

`npm.cmd run lint` — успешно, ошибок нет.

## 7. Результат npm.cmd run build

`npm.cmd run build` — успешно, production build собран.

## 8. Что проверено локально

Через Playwright/browser responsive проверен экран `Призы`:

- `390x844`;
- `375x812`;
- `430x932`;
- переход на вкладку `Призы`;
- click по `Подробнее`;
- detail block.

В локальном browser preview сохраняются console errors от внешнего Telegram script, если он недоступен. Это не связано с изменениями reward cards.

## 9. Что проверить после deploy в Telegram

- Карточки призов не выглядят тесно на реальном телефоне.
- Badge `Демо` не переносится.
- CTA `Подробнее` не перекрывается BottomNav.
- Fallback icon для спецсобытия выглядит согласованно.
- Экран не обещает получение, активацию или выдачу реального приза.

## 10. Что сознательно не реализовано

- Backend.
- Auth.
- CRM.
- Real prize claim.
- Redeem.
- QR / barcode.
- Storage.
- `localStorage`.
- Cookies.
- New packages.
- Icon library.
- New assets.
