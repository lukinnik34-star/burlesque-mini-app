# Task 004 Report: Mock Data Layer

## Дата

2026-05-25

## Что создано

- Создана папка `app/src/data`.
- Добавлены локальные TypeScript mock-данные:
  - `games.ts`
  - `prizes.ts`
  - `profile.ts`
  - `home.ts`
- Добавлены минимальные типы mock-данных в `app/src/types/mocks.ts`.
- Экраны `Home`, `Games`, `Prizes`, `Profile` обновлены и теперь импортируют данные из `app/src/data`.
- В интерфейсе явно отмечено, что данные являются mock/demo.

## Какие файлы изменены

- `app/src/types/mocks.ts`
- `app/src/data/games.ts`
- `app/src/data/prizes.ts`
- `app/src/data/profile.ts`
- `app/src/data/home.ts`
- `app/src/features/screens/HomeScreen.tsx`
- `app/src/features/screens/GamesScreen.tsx`
- `app/src/features/screens/PrizesScreen.tsx`
- `app/src/features/screens/ProfileScreen.tsx`
- `obsidian/05_Codex/Task_004_Mock_Data_Layer_Report.md`

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

- Backend.
- База данных.
- CRM.
- Авторизация.
- Серверная проверка Telegram `initData`.
- Реальные игры.
- Scratch Card механика.
- Wheel Of Prizes механика.
- Выдача призов.
- Вероятности выигрыша.
- Оплата.
- Аналитика.
- Внешние зависимости.
- Глобальный state manager.
- API-запросы.

## Технические решения

- Mock data layer сделан обычными TypeScript export-массивами и объектами.
- Типы оставлены минимальными: игры, призы, профильные показатели и данные главной.
- Игры имеют статусы `coming_soon` и `locked`, чтобы не создавать впечатление доступной механики.
- Все призы помечены как `mock`, без правил доступности и без выдачи.

## Следующий шаг

Следующая логичная задача: добавить простую frontend-only логику отображения состояний игр и призов без настоящей выдачи, backend и CRM.
