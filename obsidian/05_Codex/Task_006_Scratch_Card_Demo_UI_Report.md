# Task 006 Report: Scratch Card Demo UI

## Дата

2026-05-25

## Что создано

- Создан frontend-only компонент `ScratchCardDemo`.
- Добавлены минимальные типы Scratch demo:
  - `ScratchCardDemoStatus`
  - `ScratchCardDemoResult`
- Добавлен статичный mock-результат для Scratch demo.
- `GamesScreen` обновлен: при выборе `Scratch Card` и статусе demo preview показывает `ScratchCardDemo`.
- Закрытая mock-карточка раскрывается по кнопке `Открыть demo`.
- После раскрытия показывается статичный mock-результат и предупреждение, что приз не выдается.

## Какие файлы изменены

- `app/src/features/games/scratch-card/ScratchCardDemo.tsx`
- `app/src/features/games/scratch-card/types.ts`
- `app/src/features/games/scratch-card/scratchCardDemoData.ts`
- `app/src/features/screens/GamesScreen.tsx`
- `obsidian/05_Codex/Task_006_Scratch_Card_Demo_UI_Report.md`

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

- Настоящая scratch-card механика.
- Canvas.
- Random.
- Вероятности выигрыша.
- Реальный результат игры.
- Claim/redeem.
- Выдача призов.
- Backend.
- База данных.
- CRM.
- Авторизация.
- Серверная проверка Telegram `initData`.
- Оплата.
- Аналитика.
- Внешние зависимости.
- Сохранение состояния в `localStorage` или cookies.
- Отдельный route для игры.

## Технические решения

- Состояние Scratch demo хранится локально внутри `ScratchCardDemo` через `useState`.
- Используются только состояния `closed` и `revealed`.
- Результат статичный и импортируется из `scratchCardDemoData.ts`.
- UI встроен в существующий `GamesScreen`, без Next.js routing.

## Следующий шаг

Следующая логичная задача: добавить frontend-only экран мероприятий и mock events data, не подключая backend, CRM и реальные лендинги.
