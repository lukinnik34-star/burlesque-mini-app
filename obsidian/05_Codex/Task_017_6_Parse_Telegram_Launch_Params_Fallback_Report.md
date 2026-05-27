# Task 017.6 — Parse Telegram Launch Params Fallback Report

## 1. Что показал `tg-test.html`

Статический тест показал, что при правильном запуске через Bot API `web_app` кнопку URL содержит Telegram launch params в `location.hash`:

- `tgWebAppData`;
- `tgWebAppVersion`;
- `tgWebAppPlatform`;
- `tgWebAppThemeParams`.

Внутри `tgWebAppData` есть `query_id`, `user`, `auth_date`, `signature`, `hash`.

При этом `window.Telegram.WebApp` может оставаться недоступным.

## 2. Почему добавлен fallback parser

Telegram launch params приходят корректно через `location.hash`, но WebApp API объект в текущем окружении не появляется. Поэтому добавлен fallback parser, который использует launch params только для frontend runtime detection и preview UI.

Это нужно, чтобы приложение могло корректно показать:

- что оно открыто как Telegram Mini App;
- platform/version;
- безопасный preview имени пользователя, если `user` есть в launch params.

## 3. Какие данные читаются из `location.hash`

Из верхнего уровня hash читаются:

- наличие `tgWebAppData`;
- длина `tgWebAppData`;
- `tgWebAppVersion`;
- `tgWebAppPlatform`;
- наличие `tgWebAppThemeParams`.

Из `tgWebAppData` читается только:

- `user`, чтобы получить `first_name`, `last_name`, `username`, `language_code`, `is_premium` для demo UI.

## 4. Какие данные не показываются

В UI и static test больше не выводятся:

- raw `location.href` с Telegram params;
- raw `location.hash`;
- raw `tgWebAppData`;
- `query_id`;
- `hash`;
- `signature`;
- полный user JSON;
- значения полей Telegram object.

Показываются только safe summary fields:

- наличие hash;
- длина hash;
- наличие `tgWebAppData`;
- длина `tgWebAppData`;
- platform/version;
- наличие user;
- user preview: `first_name` / `username`.

## 5. Почему это все еще не авторизация

Данные из `location.hash` находятся на клиенте и не проверены сервером. Parsed user можно использовать только для preview/runtime UI.

Для настоящей авторизации обязательно нужен backend:

- принять raw `initData`;
- проверить подпись через bot token;
- проверить `auth_date`;
- создать безопасную session/user mapping.

Без server-side signature validation нельзя:

- считать пользователя авторизованным;
- выдавать призы;
- менять баллы;
- подключать CRM-профиль;
- доверять Telegram user id.

## 6. Результат npm.cmd run lint

Успешно, ошибок нет.

## 7. Результат npm.cmd run build

Успешно, production build собран.

## 8. Что проверить в Telegram

После deploy:

1. Открыть Mini App через Bot API inline `web_app` кнопку.
2. Перейти в `Профиль`.
3. Ожидаемый результат:
   - `Среда: Telegram Mini App`;
   - `Launch params: найдены`;
   - `Telegram user: найден`, если user есть в `tgWebAppData`;
   - имя пользователя отображается в UserCard;
   - `WebApp API` может оставаться `не найден`;
   - `Авторизация: будет подключена позже`.
4. Открыть `/tg-test.html`.
5. Проверить, что static test больше не показывает полный raw hash/href и показывает только safe summary fields.

## 9. Что сознательно не реализовано

- Backend.
- API routes.
- CRM.
- Настоящая авторизация.
- Signature validation.
- Cookies.
- `localStorage`.
- Session.
- Выдача призов.
- Claim/redeem.
