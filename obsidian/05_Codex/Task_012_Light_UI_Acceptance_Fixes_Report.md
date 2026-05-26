# Task 012 — Light UI Acceptance Fixes

## 1. Что исправлено

- Исправлена большая карточка Афиши: теперь featured event card имеет бордовый градиент, белый контрастный текст, читаемый статус и видимую кнопку.
- Исправлена нижняя навигация: подписи всех 5 пунктов помещаются без ellipsis на `390x844`, `375x812`, `430x932`.
- Увеличен нижний padding shell до `140px`, чтобы контент не попадал под fixed bottom nav.
- Убран лишний technical/demo шум из видимых текстов.
- Призы переведены на русский:
  - Приветственный напиток;
  - Купон на скидку;
  - Бонус на резерв стола;
  - Доступ к спецсобытию.
- Карточки призов сделаны более похожими на привилегии, badge `Demo` уменьшен.
- Профиль очищен от debug-like формулировок и стал ближе к guest/member screen.
- Игры визуально разведены: Scratch Card получила мотив клубной карты, Wheel Of Prizes — CSS-only колесо.

## 2. Измененные файлы

- `app/src/components/EventCard.tsx`
- `app/src/components/BottomNav.tsx`
- `app/src/components/AppShell.tsx`
- `app/src/components/UserCard.tsx`
- `app/src/features/screens/HomeScreen.tsx`
- `app/src/features/screens/EventsScreen.tsx`
- `app/src/features/screens/GamesScreen.tsx`
- `app/src/features/screens/PrizesScreen.tsx`
- `app/src/features/screens/ProfileScreen.tsx`
- `app/src/features/games/scratch-card/ScratchCardDemo.tsx`
- `app/src/features/games/wheel-of-prizes/WheelOfPrizesDemo.tsx`
- `app/src/features/games/scratch-card/scratchCardDemoData.ts`
- `app/src/features/games/wheel-of-prizes/wheelDemoData.ts`
- `app/src/data/events.ts`
- `app/src/data/home.ts`
- `app/src/data/games.ts`
- `app/src/data/prizes.ts`
- `app/src/data/profile.ts`

## 3. Команды

```bash
npm.cmd run lint
npm.cmd run build
```

Dev preview проверялся на уже запущенном `http://localhost:3000`.

## 4. Результат lint

`npm.cmd run lint` — успешно, ошибок нет.

## 5. Результат build

`npm.cmd run build` — успешно, production build собран.

## 6. Ручная проверка

Проверено через Playwright:

- `http://localhost:3000`;
- вкладки: Главная, Афиша, Игры, Призы, Профиль;
- большая карточка Афиши: фон темно-бордовый, текст и CTA читаются;
- BottomNav: подписи `Главная`, `Афиша`, `Игры`, `Призы`, `Профиль` не обрезаются;
- Scratch Card demo: открытие и demo-result;
- Wheel Of Prizes demo: запуск и demo-result;
- выбор приза и detail block;
- detail block мероприятия;
- viewport `390x844`;
- viewport `375x812`;
- viewport `430x932`;
- горизонтального скролла нет;
- нижний padding `140px`, nav height около `84px`.

## 7. Что сознательно не реализовано

- backend;
- база данных;
- CRM;
- авторизация;
- проверка Telegram `initData`;
- реальные игры;
- random;
- вероятности;
- выдача призов;
- claim/redeem;
- оплата;
- аналитика;
- новые routes;
- Zustand/Redux;
- внешние UI-kit зависимости;
- icon library;
- animation library;
- canvas;
- внешние изображения.

## 8. Визуальные компромиссы

- Иконки BottomNav остаются простыми символами без icon library.
- Игровые мотивы сделаны CSS-only, без canvas и без внешних ассетов.
- Badge `Demo` оставлен в интерфейсе, но сделан менее заметным.
