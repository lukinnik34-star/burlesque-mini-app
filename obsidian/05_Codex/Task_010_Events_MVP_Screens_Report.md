# Task 010 — Events MVP Screens Report

## Что создано

- Добавлен frontend-only mock data layer для мероприятий.
- Добавлена вкладка `Афиша` в нижнюю навигацию.
- Создан экран `EventsScreen` со списком mock-мероприятий.
- Создан переиспользуемый компонент `EventCard`.
- Добавлен detail block выбранного мероприятия внутри `EventsScreen`.
- На главную добавлен preview ближайшего события.
- Сохранен premium dark/mobile стиль после Task 009.

## Измененные файлы

- `app/src/types/mocks.ts`
- `app/src/types/navigation.ts`
- `app/src/data/events.ts`
- `app/src/data/home.ts`
- `app/src/components/AppShell.tsx`
- `app/src/components/BottomNav.tsx`
- `app/src/features/events/EventCard.tsx`
- `app/src/features/screens/EventsScreen.tsx`
- `app/src/features/screens/HomeScreen.tsx`
- `obsidian/05_Codex/Task_010_Events_MVP_Screens_Report.md`

## Выполненные команды

- `npm.cmd run lint`
- `npm.cmd run build`
- `git status --short`

## Результаты проверки

- `npm.cmd run lint` — успешно, без ошибок.
- `npm.cmd run build` — успешно, production build собран.

## Ручная проверка

Проверено через Playwright:

- `390x844` — главная страница с preview ближайшего события.
- `390x844` — вкладка `Афиша`, список мероприятий, карточки и detail block.
- Нижняя навигация с 5 пунктами помещается в mobile viewport.
- Контент остается frontend-only, без новых routes и backend-запросов.

Скриншоты проверки:

- `task-010-home-390.png`
- `task-010-events-390.png`
- `task-010-events-full-390.png`

## Что сознательно не реализовано

- Backend.
- База данных.
- CRM.
- Авторизация.
- Проверка Telegram `initData`.
- Реальное бронирование.
- Регистрация на мероприятие.
- Оплата.
- Реальные ссылки на лендинги.
- Админка мероприятий.
- Аналитика.
- Новые routes.
- Внешние UI-библиотеки.
