# Task 011 — Light Premium Redesign From Reference

## 1. Lazyweb tools

- Использован `lazyweb_health`.
- Использован `lazyweb_search` по темам:
  - `premium light mobile app UI`;
  - `event app mobile UI`;
  - `loyalty app mobile UI`;
  - `Telegram Mini App UI`;
  - `cream burgundy mobile design`.

Lazyweb был доступен. Health-check вернул статус `healthy`.

## 2. Паттерны из Lazyweb

- Light mobile shell с большим воздухом и мягкими карточками.
- Event discovery: фильтры-pill, карточки с датой, временем, залом и коротким описанием.
- Loyalty/member app: member card, статус гостя, прогресс до следующего уровня, быстрые stats.
- Offer/rewards cards: компактные privilege-карточки с detail action.
- Telegram/mobile app pattern: fixed floating bottom navigation, большие touch targets, короткие тексты.

Отклонено:

- Темные nightlife/dark UI паттерны, потому что задача требует light premium.
- Casino/game-heavy визуал, потому что игры должны выглядеть как club promo mechanics.
- QR/barcode membership, платежные и ticketing-флоу, потому что это не входит в MVP.
- Photo-heavy карточки и внешние изображения, потому что ассеты и внешний asset pipeline запрещены.

## 3. Reference image

Изучен локальный reference:

`obsidian/02_Design/references/burlesque_light_mobile_reference.png`

Применены ключевые решения:

- теплый светлый фон;
- бордовый primary accent;
- cream/ivory карточки;
- мягкие округления;
- top bar с круглым `B`-логотипом;
- минимальная floating bottom navigation;
- hero card на главной;
- бордовая featured event card;
- profile/member card в бордовом стиле.

## 4. Измененные файлы

- `app/src/app/globals.css`
- `app/src/components/AppShell.tsx`
- `app/src/components/BottomNav.tsx`
- `app/src/components/UserCard.tsx`
- `app/src/components/EventCard.tsx`
- `app/src/components/ui/Button.tsx`
- `app/src/components/ui/Card.tsx`
- `app/src/components/ui/Section.tsx`
- `app/src/components/ui/Badge.tsx`
- `app/src/components/ui/ScreenHeader.tsx`
- `app/src/features/events/EventCard.tsx`
- `app/src/features/screens/HomeScreen.tsx`
- `app/src/features/screens/EventsScreen.tsx`
- `app/src/features/screens/GamesScreen.tsx`
- `app/src/features/screens/PrizesScreen.tsx`
- `app/src/features/screens/ProfileScreen.tsx`
- `app/src/features/games/scratch-card/ScratchCardDemo.tsx`
- `app/src/features/games/scratch-card/scratchCardDemoData.ts`
- `app/src/features/games/wheel-of-prizes/WheelOfPrizesDemo.tsx`
- `app/src/features/games/wheel-of-prizes/wheelDemoData.ts`
- `app/src/data/events.ts`
- `app/src/data/home.ts`
- `app/src/data/games.ts`
- `app/src/data/prizes.ts`
- `app/src/data/profile.ts`

## 5. Команды

Из папки `app`:

```bash
npm.cmd run lint
npm.cmd run build
npm.cmd run dev
```

Также проверялся dev preview через Playwright на `http://localhost:3000`.

## 6. Результат lint

`npm.cmd run lint` — успешно, ошибок нет.

## 7. Результат build

`npm.cmd run build` — успешно, production build собран.

## 8. Ручная проверка

Проверено в браузере через Playwright:

- `http://localhost:3000`;
- вкладки: Главная, Афиша, Игры, Призы, Профиль;
- Scratch Card demo: открытие и mock-result;
- Wheel Of Prizes demo: запуск, spinning state, mock-result;
- выбор mock-приза и detail block;
- detail block мероприятия;
- отображение demo-state в профиле;
- viewport `390x844`;
- viewport `375x812`;
- viewport `430x932`;
- горизонтального скролла нет;
- нижняя навигация имеет достаточный нижний padding и не перекрывает последний контент.

QA-замечание: на `127.0.0.1:3000` Playwright/dev окружение показывало HMR websocket ошибки и клики были нестабильны. На `localhost:3000` интерактивные проверки прошли корректно.

## 9. Что сознательно не реализовано

- backend;
- база данных;
- CRM;
- авторизация;
- проверка Telegram `initData`;
- реальные игры;
- random;
- вероятности выигрыша;
- выдача призов;
- claim/redeem;
- оплата;
- аналитика;
- новые routes;
- Zustand/Redux;
- внешние UI-kit, icon library, animation library;
- canvas;
- внешние изображения.

## 10. Визуальные компромиссы

- Декоративные feather/champagne/card мотивы сделаны CSS-only и типографикой, без новых ассетов.
- Иконки нижней навигации сделаны простыми символами без icon library.
- Serif-like headings реализованы через `font-serif`, без подключения внешнего шрифта.
- Reference использован как stylistic direction, не pixel-perfect макет.
