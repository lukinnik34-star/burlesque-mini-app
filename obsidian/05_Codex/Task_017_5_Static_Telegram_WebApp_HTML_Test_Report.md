# Task 017.5 — Static Telegram WebApp HTML Test Report

## 1. Зачем создан `tg-test.html`

Создан чистый статический HTML-тест Telegram WebApp runtime, чтобы отделить проблему Next.js/React/App Router от проблемы Telegram WebView, BotFather или способа запуска Mini App.

Файл доступен как обычный static asset из `public`, без React, hydration, hooks и Next runtime.

## 2. Где находится файл

- `app/public/tg-test.html`

После deploy ожидаемый production URL:

- `https://burlesque-mini-app.vercel.app/tg-test.html`

## 3. Почему он важен

Основное приложение сейчас показывает:

- `Telegram object: найден`;
- `Telegram script: найден`;
- `UserAgent Telegram: да`;
- `WebApp API: не найден`;
- `initData length: 0`.

Если статический HTML-тест покажет то же самое, значит проблема почти наверняка не в Next.js/React, а в Telegram runtime, способе открытия WebApp или настройках BotFather.

Если статический HTML-тест покажет `webAppExists: true`, значит проблема находится в основном приложении или timing/loading логике.

## 4. Что проверяет тест

Тест показывает:

- текущий URL;
- `location.hash`;
- `navigator.userAgent`;
- существует ли `window.Telegram`;
- тип `window.Telegram`;
- ключи `window.Telegram`;
- существует ли `window.Telegram.WebApp`;
- тип `WebApp`;
- ключи `WebApp`;
- длину `initData`;
- наличие `initDataUnsafe`;
- наличие `initDataUnsafe.user`;
- `version`;
- `platform`;
- `colorScheme`.

## 5. Что тест не делает

Тест не делает:

- авторизацию;
- backend-запросы;
- hash validation;
- CRM;
- cookies;
- `localStorage`;
- session;
- выдачу призов;
- бизнес-логику.

Тест не выводит:

- полный `initData`;
- `hash` из Telegram payload;
- `query_id`;
- значения полей `window.Telegram`;
- полный JSON объекта Telegram.

`location.hash` временно отображается только как диагностический URL fragment на тестовой странице.

## 6. Результат npm.cmd run lint

Успешно, ошибок нет.

## 7. Результат npm.cmd run build

Успешно, production build собран.

## 8. Как проверять через Telegram

После push/Vercel deploy:

1. Открыть через Telegram Mini App launch URL:
   - `https://burlesque-mini-app.vercel.app/tg-test.html`
2. Посмотреть значения:
   - `telegramExists`;
   - `telegramKeys`;
   - `webAppExists`;
   - `webAppKeys`;
   - `initDataLength`;
   - `hasUser`;
   - `platform`;
   - `version`.
3. Сравнить результат с основным приложением.

Ожидаемо в обычном браузере:

- `webAppExists: false`;
- `initDataLength: 0`.

Полезная развилка:

- Если в Telegram `webAppExists: true`, проблема в основном приложении.
- Если в Telegram `webAppExists: false`, проблема вне Next.js: Telegram runtime, BotFather launch или способ открытия.
