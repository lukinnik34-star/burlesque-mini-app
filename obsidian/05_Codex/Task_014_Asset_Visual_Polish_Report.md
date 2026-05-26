# Task 014 — Asset Visual Polish Report

## 1. Что исправлено

- Увеличены иконки призов на экране `Призы`: добавлены premium icon blocks примерно 68 px с cream/champagne подложкой.
- Для широкого ассета скидочного купона задан отдельный размер, чтобы изображение не выглядело мелким пятном.
- Увеличены визуальные ассеты `Scratch Card` и `Wheel Of Prizes` в карточках игр.
- Усилен закрытый визуал `ScratchCardDemo`: карточка стала крупнее и читается как объект игры.
- Увеличен визуальный объект `WheelOfPrizesDemo`; существующее demo spinning-состояние сохранено.
- Ослаблен и опущен `hero_burgundy_wave.png` на главной, чтобы он не конфликтовал с CTA.
- Увеличен compact preview для `Golden Hour` в афише до более заметного event cover.

## 2. Какие файлы изменены

- `app/src/features/screens/PrizesScreen.tsx`
- `app/src/features/screens/GamesScreen.tsx`
- `app/src/features/games/scratch-card/ScratchCardDemo.tsx`
- `app/src/features/games/wheel-of-prizes/WheelOfPrizesDemo.tsx`
- `app/src/features/screens/HomeScreen.tsx`
- `app/src/components/EventCard.tsx`
- `obsidian/05_Codex/Task_014_Asset_Visual_Polish_Report.md`

## 3. Какие команды выполнены

- `npm.cmd run lint`
- `npm.cmd run build`
- `Invoke-WebRequest -UseBasicParsing -Uri http://localhost:3000 -TimeoutSec 3 | Select-Object StatusCode`

## 4. Результат npm.cmd run lint

Успешно, ошибок нет.

## 5. Результат npm.cmd run build

Успешно, production build собран без ошибок.

## 6. Что проверено вручную

- `http://localhost:3000` отвечает со статусом `200`.
- Проверены viewport:
  - `390x844`
  - `375x812`
  - `430x932`
- Проверено, что нет горизонтального скролла.
- Проверено, что BottomNav не режет подписи и остается доступной.
- Проверены вкладки:
  - Главная
  - Афиша
  - Игры
  - Призы
- Проверены visual sizes:
  - prize image blocks: контейнеры около `68x68`, изображения около `56x56`, coupon около `64x48`;
  - game card assets: Scratch и Wheel стали заметными визуальными объектами;
  - Wheel demo использует крупный wheel asset;
  - Golden Hour compact cover стал `72x72`.
- Проверены demo-действия:
  - выбор mock-приза и detail block;
  - открытие Wheel Of Prizes demo;
  - Scratch Card demo визуально остается доступным.

## 7. Что сознательно не реализовано

- Backend.
- CRM.
- Авторизация.
- Новые routes.
- Реальные игровые механики.
- Random / вероятности выигрыша.
- Выдача призов.
- Claim / redeem.
- Canvas.
- Внешние UI, icon или animation libraries.
- Новые ассеты и переименование существующих файлов.

## 8. Остались ли визуальные компромиссы

- `WheelOfPrizesDemo` при вращении визуально занимает больше места из-за transform bounding box, но остается в рамках карточки и не создает горизонтальный скролл.
- Для приза `Доступ к спецсобытию` отдельного ассета нет, поэтому сохранен текстовый fallback в том же premium icon block.
