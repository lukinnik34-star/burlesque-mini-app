# Task 017.4 — Debug Telegram Object Keys Report

## 1. Зачем добавлена диагностика

В Telegram WebView сейчас определяется:

- `Telegram object: найден`;
- `Telegram script: найден`;
- `UserAgent Telegram: да`;
- `WebApp API: не найден`.

Чтобы понять, что реально находится внутри `window.Telegram`, добавлена временная безопасная диагностика списка ключей объекта.

## 2. Что она показывает

В `TelegramRuntimeDiagnostics` добавлено:

- `telegramObjectKeys: string[]`.

Логика:

- если `window.Telegram` существует и является объектом, берутся только имена ключей через `Object.keys(window.Telegram).slice(0, 20)`;
- если ключей нет, показывается `нет`.

В профиле добавлена строка:

- `Telegram keys`.

Пример возможного значения:

- `WebApp, Utils`.

## 3. Что она не показывает

Диагностика не показывает:

- значения полей `window.Telegram`;
- полный JSON;
- `initData`;
- `hash`;
- `query_id`;
- пользовательские payload-данные;
- bot token.

## 4. Результат npm.cmd run lint

Успешно, ошибок нет.

## 5. Результат npm.cmd run build

Успешно, production build собран.

## 6. Что проверить в Telegram

После push/Vercel deploy:

1. Открыть Mini App через Bot API `web_app` кнопку.
2. Перейти в `Профиль`.
3. Посмотреть строку `Telegram keys`.
4. Зафиксировать:
   - есть ли ключ `WebApp`;
   - какие ключи есть вместо него;
   - остается ли `WebApp API: не найден`.

Это поможет понять, проблема в Telegram runtime object, загрузке script или способе открытия Mini App.

## 7. Что сознательно не реализовано

- Backend.
- Auth.
- CRM.
- `localStorage`.
- Cookies.
- Session.
- Вывод значений Telegram object.
- Вывод `initData`, `hash`, `query_id`.
