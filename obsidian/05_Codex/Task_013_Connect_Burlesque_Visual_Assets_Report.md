# Task 013 — Connect Burlesque Visual Assets

## 1. Какие ассеты подключены

- `hero_glow_blob.png`
- `hero_burgundy_wave.png`
- `hero_soft_orbit.png`
- `event_velvet_nights.png`
- `event_golden_hour.png`
- `scratch_card.png`
- `wheel_of_prizes.png`
- `prize_drink.png`
- `prize_discount.png`
- `prize_table.png`
- `profile_member_card_bg.png`

## 2. Где используются

- Главная:
  - hero glow/blob/wave/orbit используются как декоративные фоновые слои hero card.
- Афиша:
  - `event_velvet_nights.png` используется в большой карточке Velvet Nights;
  - `event_golden_hour.png` используется как cover/thumbnail для Golden Hour;
  - поверх cover оставлен бордовый overlay для читаемости.
- Игры:
  - `scratch_card.png` используется в карточке Scratch Card и закрытом состоянии Scratch demo;
  - `wheel_of_prizes.png` используется в карточке Wheel Of Prizes и demo wheel.
- Призы:
  - `prize_drink.png`, `prize_discount.png`, `prize_table.png` заменяют цифры в карточках привилегий.
- Профиль:
  - `profile_member_card_bg.png` используется как фон member card с темным overlay.

## 3. Измененные файлы

- `app/src/data/assets.ts`
- `app/src/types/mocks.ts`
- `app/src/app/globals.css`
- `app/src/data/events.ts`
- `app/src/data/prizes.ts`
- `app/src/features/screens/HomeScreen.tsx`
- `app/src/components/EventCard.tsx`
- `app/src/features/screens/GamesScreen.tsx`
- `app/src/features/games/scratch-card/ScratchCardDemo.tsx`
- `app/src/features/games/wheel-of-prizes/WheelOfPrizesDemo.tsx`
- `app/src/features/screens/PrizesScreen.tsx`
- `app/src/components/UserCard.tsx`

## 4. Команды

```bash
npm.cmd run lint
npm.cmd run build
```

Dev preview проверен на уже запущенном `http://localhost:3000`.

## 5. Результат lint

`npm.cmd run lint` — успешно, ошибок нет.

## 6. Результат build

`npm.cmd run build` — успешно, production build собран.

## 7. Ручная проверка

Проверено через Playwright:

- `http://localhost:3000`;
- вкладки: Главная, Афиша, Игры, Призы, Профиль;
- Scratch Card demo;
- Wheel Of Prizes demo;
- выбор mock-приза;
- detail block мероприятия;
- viewport `390x844`;
- viewport `375x812`;
- viewport `430x932`;
- горизонтального скролла нет;
- BottomNav не режет подписи;
- все 11 файлов из `/assets/burlesque/` были загружены как browser resources;
- Velvet Nights cover остается читаемым благодаря overlay;
- prize icons не ломают layout;
- profile background не ухудшает читаемость.

## 8. Что сознательно не реализовано

- backend;
- база данных;
- CRM;
- авторизация;
- Telegram `initData` validation;
- новые routes;
- новые бизнес-фичи;
- реальные игры;
- random;
- вероятности;
- выдача призов;
- claim/redeem;
- оплата;
- аналитика;
- внешние библиотеки;
- icon library;
- animation library;
- canvas;
- загрузка изображений с внешних URL.

## 9. Визуальные компромиссы

- Изображения подключены как CSS background layers, чтобы избежать broken image icon и сохранить fallback-цвета.
- Для event cover и member card используются overlay/gradient слои ради читаемости текста.
- Для “Доступ к спецсобытию” отдельного ассета нет, поэтому оставлен текущий текстовый fallback.
- Анимации ограничены мягкими CSS-only эффектами hero assets.
