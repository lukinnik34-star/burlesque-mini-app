# Task 019 — MVP UI/UX Polish Pass With Stitch Reference Report

## 1. Что улучшено по экранам

### Главная

- Hero card стал более editorial: больше воздуха, крупнее заголовок, мягче декоративные assets.
- CTA `Смотреть афишу` и `Мои привилегии` приведены к единой системе кнопок.
- Блоки ниже работают как preview афиши, промо-механик, привилегий и профиля гостя.
- Текст стал короче и менее техническим.

### Афиша

- Главный `Velvet Nights` card сохранен как выразительная burgundy event card.
- Детали события расширены: дата, время, локация, статус бронирования.
- Текст про бронь стал мягче: `Бронирование появится в следующем этапе`.
- Secondary events остались спокойнее и светлее.

### Игры

- Scratch Card и Wheel Of Prizes оформлены как premium club promo mechanics.
- Визуалы игр остались крупными и читаемыми.
- Copy не обещает выигрыш, получение или выдачу приза.
- Demo-компоненты используют более пользовательские подписи.

### Призы

- Карточки призов поданы как premium privilege showcase.
- Badge стал спокойнее, для призов используется `Демо-режим`.
- Подпись в карточках заменена на `Скоро доступно`.
- Detail block сохранен, но текст стал короче и чище.

### Профиль

- UserCard усилен как member preview.
- Профиль показывает Telegram name / username, если они найдены через launch params.
- Runtime block в обычном UI показывает только:
  - `Среда`;
  - `Telegram user`;
  - `Авторизация`.
- Debug rows скрыты за `NEXT_PUBLIC_SHOW_TELEGRAM_DEBUG=true`.

## 2. Что взято из Stitch reference

- Больше воздуха между секциями.
- Более крупная и уверенная typography hierarchy.
- Чистый cream/ivory mobile layout.
- Более мягкие rounded cards и shadows.
- Floating bottom navigation с аккуратным active state.
- Profile/member card как сильный визуальный блок.
- Privilege cards как спокойная витрина ценностей.

## 3. Что сознательно не копировалось

- Бренд L'ÉCLAT.
- Театральный/балетный контент.
- “Лебединое озеро”, “Большой театр”.
- SPA/delivery privileges.
- “Система: активна”.
- “Elite Status”, “Signature Elite” как реальные статусы.
- Любые тексты, которые обещают активную авторизацию, реальные призы, CRM или работающую систему лояльности.

## 4. Какие тексты изменены

- Убраны грубые dev-формулировки.
- Оставлены честные, короткие состояния:
  - `Демо-режим`;
  - `Скоро доступно`;
  - `будет подключена позже`;
  - `Показано для примера`.
- Игры описаны как будущие клубные розыгрыши.
- Призы описаны как будущие привилегии.
- Профиль описан как preview, а не авторизованный аккаунт.

## 5. Какие компоненты затронуты

- `app/src/app/globals.css`
- `app/src/components/AppShell.tsx`
- `app/src/components/BottomNav.tsx`
- `app/src/components/EventCard.tsx`
- `app/src/components/UserCard.tsx`
- `app/src/components/ui/Card.tsx`
- `app/src/components/ui/Badge.tsx`
- `app/src/components/ui/ScreenHeader.tsx`
- `app/src/features/screens/HomeScreen.tsx`
- `app/src/features/screens/EventsScreen.tsx`
- `app/src/features/screens/GamesScreen.tsx`
- `app/src/features/screens/PrizesScreen.tsx`
- `app/src/features/screens/ProfileScreen.tsx`
- `app/src/features/games/scratch-card/ScratchCardDemo.tsx`
- `app/src/features/games/wheel-of-prizes/WheelOfPrizesDemo.tsx`

Также обновлены тексты mock data:

- `app/src/data/home.ts`
- `app/src/data/events.ts`
- `app/src/data/games.ts`
- `app/src/data/prizes.ts`
- `app/src/data/profile.ts`

## 6. Что осталось demo-only

- Афиша и detail block мероприятия.
- Scratch Card demo.
- Wheel Of Prizes demo.
- Призы и privilege detail.
- Profile stats.
- Telegram runtime preview.

## 7. Что не реализовывалось

- Backend.
- API routes.
- CRM.
- Настоящая авторизация.
- Telegram signature validation.
- Cookies / session / localStorage.
- Реальные баллы.
- Реальная выдача призов.
- Claim/redeem flow.
- Новые routes.
- Новые packages.
- Shader / animated background experiment.

## 8. Результат npm.cmd run lint

`npm.cmd run lint` — успешно, ошибок нет.

## 9. Результат npm.cmd run build

`npm.cmd run build` — успешно, production build собран.

## 10. Что проверить в браузере и Telegram

В браузере:

- `http://localhost:3000`
- Главная;
- Афиша;
- Игры;
- Призы;
- Профиль;
- Scratch Card demo;
- Wheel Of Prizes demo;
- выбор mock-приза.

В Telegram после deploy:

- открытие через Telegram `web_app` кнопку;
- профиль показывает Telegram user;
- debug rows не видны без `NEXT_PUBLIC_SHOW_TELEGRAM_DEBUG=true`;
- все вкладки кликаются;
- нет горизонтального скролла;
- BottomNav не перекрывает последний контент.
