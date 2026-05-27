# Telegram Auth

## Принцип

Telegram Mini App передает данные запуска, но их можно использовать для идентификации пользователя только после серверной проверки подписи. Frontend может читать Telegram runtime signals и показывать demo/runtime status, но не должен считать пользователя авторизованным.

## Итог текущей проверки

- `window.Telegram.WebApp` может быть недоступен в текущем Telegram runtime.
- Telegram launch params приходят через `location.hash`.
- В `location.hash` доступен `tgWebAppData` с user, auth_date, signature и hash.
- Frontend fallback parser использует эти данные только для runtime preview.
- Parsed user нельзя считать авторизованным без server-side signature validation.
- Для реального профиля, CRM, баллов и призов нужна backend validation.

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

## Что можно делать на frontend

- Определять browser preview / Telegram WebView / Telegram Mini App runtime.
- Показывать display name из Telegram user, если он доступен через WebApp API или launch params.
- Показывать platform/version только в debug diagnostics.
- Показывать длину initData в debug diagnostics, но не сам initData.

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
