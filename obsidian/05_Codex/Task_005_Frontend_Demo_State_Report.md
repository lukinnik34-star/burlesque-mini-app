# Task 005 Report: Frontend Demo State

## Дата

2026-05-25

## Что создано

- Создан тип demo-state в `app/src/types/demo-state.ts`.
- Создан frontend-only hook `useDemoState` в `app/src/features/demo-state/useDemoState.ts`.
- `AppShell` подключает demo-state локально и передает данные/callbacks в экраны.
- `GamesScreen` умеет выбрать доступную mock-игру для demo preview.
- `PrizesScreen` умеет выбрать mock-приз и показать detail block.
- `ProfileScreen` показывает текущее demo-состояние:
  - выбранная игра;
  - выбранный mock-приз;
  - статус demo-сессии.
- Затронутые файлы с интерфейсным текстом пересохранены в корректном UTF-8.

## Какие файлы изменены

- `app/src/types/demo-state.ts`
- `app/src/features/demo-state/useDemoState.ts`
- `app/src/components/AppShell.tsx`
- `app/src/features/screens/GamesScreen.tsx`
- `app/src/features/screens/PrizesScreen.tsx`
- `app/src/features/screens/ProfileScreen.tsx`
- `app/src/data/games.ts`
- `app/src/data/prizes.ts`
- `obsidian/05_Codex/Task_005_Frontend_Demo_State_Report.md`

## Какие команды выполнены

```bash
npm.cmd run lint
npm.cmd run build
```

## Результат npm.cmd run lint

`npm.cmd run lint` выполнен успешно, ошибок нет.

## Результат npm.cmd run build

`npm.cmd run build` выполнен успешно.

Результат сборки:

- Next.js 16.2.6
- production build compiled successfully
- TypeScript finished successfully
- route `/` prerendered as static content

## Что сознательно не реализовано

- Настоящие игры.
- Scratch Card механика.
- Wheel Of Prizes механика.
- Вероятности выигрыша.
- Выдача призов.
- Claim/redeem.
- Backend.
- База данных.
- CRM.
- Авторизация.
- Проверка Telegram `initData`.
- Оплата.
- Аналитика.
- Внешние зависимости.
- Глобальный state manager.
- Сохранение состояния в `localStorage` или cookies.

## Технические решения

- Demo-state хранится только в памяти React через `useState`.
- Состояние не сохраняется между перезагрузками.
- Scratch Card помечена как `available` только для demo preview, без игровой механики и без результата.
- Данные призов остаются mock/demo, выбор приза открывает только карточку деталей.

## Следующий шаг

Следующая логичная задача: добавить frontend-only экран или modal для Scratch Card preview без настоящей scratch-механики, выдачи призов и backend.
