# Telegram Auth

## Принцип

Telegram Mini App передает `initData`, но эти данные можно использовать для идентификации пользователя только после серверной проверки подписи. Frontend может читать наличие Telegram WebApp окружения и показывать demo/runtime статус, но не должен считать пользователя авторизованным.

## Task 017: frontend runtime detection

Task 017 добавляет только безопасное frontend-only определение Telegram окружения:

- открыт ли интерфейс в обычном браузере;
- доступен ли `window.Telegram.WebApp`;
- есть ли непустой `initData`;
- есть ли `initDataUnsafe.user`;
- какое имя можно аккуратно показать в demo UI.

Важно:

- `initData` читается, но не валидируется;
- `initData` не отправляется на backend;
- `hash`, `query_id` и полный payload не показываются в UI;
- Telegram user из frontend не считается авторизованным пользователем;
- данные не сохраняются в `localStorage`, cookies или session.

## Что можно делать на frontend

- Определять browser preview / Telegram Mini App runtime.
- Вызывать `Telegram.WebApp.ready()`, если объект доступен.
- Вызывать `Telegram.WebApp.expand()`, если это не ломает layout.
- Показывать короткий статус: `Открыто в Telegram` или `Браузерный просмотр`.
- Показывать display name из Telegram user, если он доступен.
- Использовать user id только как runtime/demo info, если это понадобится в диагностике.

## Что нельзя делать на frontend

- Нельзя считать `initData` валидным без backend validation.
- Нельзя выдавать призы на основании client-side user id.
- Нельзя менять баллы, статусы, промокоды или CRM-профиль на основании frontend-данных.
- Нельзя хранить Telegram user как доверенный профиль.
- Нельзя передавать bot token во frontend.
- Нельзя показывать полный `initData`, `hash`, `query_id` или технический JSON в пользовательском UI.

## Будущий поток авторизации

1. Клиент получает `initData` через Telegram Mini App SDK.
2. Клиент отправляет `initData` на backend.
3. Backend проверяет подпись через bot token.
4. Backend проверяет `auth_date`.
5. Backend создает или обновляет пользователя.
6. Backend возвращает безопасный профиль или сессию приложения.
7. Только после этого можно использовать данные для призов, баллов, CRM и персонализации.

## MVP status

В текущем MVP реализовано только frontend runtime detection. Настоящая авторизация, backend validation, CRM и выдача призов не реализованы.
