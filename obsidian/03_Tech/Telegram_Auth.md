# Telegram Auth

## Принцип

Telegram Mini App передает данные запуска, но их можно использовать для идентификации пользователя только после серверной проверки подписи. Frontend может читать наличие Telegram окружения и показывать demo/runtime status, но не должен считать пользователя авторизованным.

## Источники данных на frontend

В текущем frontend detection поддерживаются два источника:

1. `window.Telegram.WebApp`, если Telegram WebApp API доступен.
2. Telegram launch params из `location.hash`, если WebApp API недоступен, но Telegram передал параметры запуска.

Telegram launch params могут содержать:

- `tgWebAppData`;
- `tgWebAppVersion`;
- `tgWebAppPlatform`;
- `tgWebAppThemeParams`.

Внутри `tgWebAppData` могут быть `query_id`, `user`, `auth_date`, `signature`, `hash`. На frontend допускается использовать только безопасный preview subset, например имя пользователя из `user`, и только для runtime/demo UI.

## Task 017: frontend runtime detection

Task 017 добавляет только безопасное frontend-only определение Telegram окружения:

- открыт ли интерфейс в обычном браузере;
- доступен ли `window.Telegram.WebApp`;
- есть ли непустой `initData`;
- есть ли `initDataUnsafe.user`;
- есть ли Telegram launch params в `location.hash`;
- какое имя можно аккуратно показать в demo UI.

Важно:

- `initData` / `tgWebAppData` читаются, но не валидируются;
- данные не отправляются на backend;
- `hash`, `signature`, `query_id` и полный payload не показываются в UI;
- parsed user из launch params не считается авторизованным пользователем;
- данные не сохраняются в `localStorage`, cookies или session.

## Что можно делать на frontend

- Определять browser preview / Telegram WebView / Telegram Mini App runtime.
- Вызывать `Telegram.WebApp.ready()`, если объект доступен.
- Вызывать `Telegram.WebApp.expand()`, если это не ломает layout.
- Показывать короткий статус: `Открыто в Telegram` или `Браузерный просмотр`.
- Показывать display name из Telegram user, если он доступен через WebApp API или launch params.
- Показывать platform/version как diagnostics.
- Показывать длину initData, но не сам initData.

## Что нельзя делать на frontend

- Нельзя считать `initData` или `tgWebAppData` валидными без backend validation.
- Нельзя доверять parsed user без server-side signature validation.
- Нельзя выдавать призы на основании client-side user id.
- Нельзя менять баллы, статусы, промокоды или CRM-профиль на основании frontend-данных.
- Нельзя хранить Telegram user как доверенный профиль.
- Нельзя передавать bot token во frontend.
- Нельзя показывать полный `initData`, `tgWebAppData`, `hash`, `signature`, `query_id` или технический JSON в пользовательском UI.

## Будущий поток авторизации

1. Клиент получает `initData` через Telegram WebApp API или launch params.
2. Клиент отправляет raw `initData` на backend.
3. Backend проверяет подпись через bot token.
4. Backend проверяет `auth_date`.
5. Backend создает или обновляет пользователя.
6. Backend возвращает безопасный профиль или сессию приложения.
7. Только после этого можно использовать данные для призов, баллов, CRM и персонализации.

## MVP status

В текущем MVP реализовано только frontend runtime detection и preview данных. Настоящая авторизация, backend validation, CRM и выдача призов не реализованы.
