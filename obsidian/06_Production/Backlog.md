# Backlog

## Task 026 Visual Direction Notes

- Done: adopted new Stitch guest app direction as a frontend-only UI prototype.
- Next design check: compare the new dark lavender guest app direction against the previous Obsidian Noir and light premium versions in Telegram WebView.

## Task 024 Visual Direction Notes

- Done: experimental dark Obsidian Noir visual direction prototype.
- Next design check: compare light premium direction and dark Obsidian Noir prototype on real Telegram mobile viewport.

## Done

- Проверить приложение внутри Telegram.
- Добавить Telegram environment detection.
- Добавить безопасное чтение Telegram WebApp окружения для demo UI.
- Добавить fallback parsing Telegram launch params из `location.hash`.
- Убрать debug UI из production view.
- Выполнить MVP UI/UX polish pass with Stitch reference direction.
- Выполнить final mobile viewport polish.
- Упростить rewards card system на экране `Призы`.
- Уплотнить game cards на экране `Игры`.
- Отполировать profile member area.

## Next

- Подготовить backend endpoint для Telegram `initData` validation.
- Подготовить safe `initData` validation plan.
- Не выдавать реальные призы без backend validation.
- После backend validation подключить реальный профиль / CRM.
- Описать CRM API requirements.
- Описать prize issuing rules.
- Проверить реальные mobile devices.

## Product

- Заменить demo copy перед production.
- Уточнить реальные события для первого наполнения афиши.
- Уточнить реальные статусы мероприятий.
- Описать пользовательский flow бронирования.
- Описать flow открытия Яндекс.Карт, маршрута и такси.
- Описать правила отображения призов для разных типов гостей.

## Design

- Добавить fourth prize icon для `Доступ к спецсобытию`.
- Оптимизировать ассеты по весу.
- Проверить изображения на реальных экранах iOS и Android.
- Отложенный experiment: shader / animated background для hero или premium ambience.
- Подготовить fallback visuals для отсутствующих cover assets.
- Проверить читаемость overlay для event covers.
- Подготовить empty/loading states.

## Tech

- Подготовить backend architecture для Telegram `initData` validation.
- Подготовить минимальные API routes.
- Подготовить PostgreSQL + Prisma plan.
- Описать модели пользователя, события, приза, game attempt и prize claim.
- Подготовить CRM adapter plan.
- Описать security requirements для призов и промокодов.

## Future

- Реальная Telegram-авторизация через backend.
- Реальная CRM-интеграция.
- Реальная выдача призов.
- Claim/redeem flow.
- Админка или data management.
- Аналитика событий.
- Production deployment.
