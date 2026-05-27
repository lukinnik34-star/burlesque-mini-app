# Backlog

## Done

- Проверить приложение внутри Telegram.
- Добавить Telegram environment detection.
- Добавить безопасное чтение Telegram WebApp окружения для demo UI.
- Добавить fallback parsing Telegram launch params из `location.hash`.
- Убрать debug UI из production view.

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
