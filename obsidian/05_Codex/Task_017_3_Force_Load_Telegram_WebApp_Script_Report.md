# Task 017.3 — Force Load Telegram WebApp Script Report

## 1. Почему понадобился fallback loader

Диагностика на телефоне показала:

- `Среда: Telegram WebView`;
- `Telegram object: найден`;
- `WebApp API: не найден`;
- `Telegram user: не найден`;
- `UserAgent Telegram: да`;
- `initData length: 0`.

Это значит, что страница действительно открыта внутри Telegram WebView, но `window.Telegram.WebApp` не появился. `next/script` уже подключал официальный Telegram script, но этого оказалось недостаточно для надежной диагностики в конкретном runtime.

## 2. Что изменено

- В `useTelegramRuntime.ts` добавлен client-side fallback loader для `telegram-web-app.js`.
- Fallback запускается, если:
  - `window.Telegram?.WebApp` отсутствует;
  - `navigator.userAgent` содержит `telegram`.
- После fallback script load запускаются дополнительные проверки:
  - сразу;
  - через `100` ms;
  - через `300` ms;
  - через `700` ms;
  - через `1500` ms.
- Основной retry schedule сохранен:
  - `0`;
  - `100`;
  - `250`;
  - `500`;
  - `1000`;
  - `2000`;
  - `3500` ms.
- Если `WebApp API` найден, дальнейшие проверки останавливаются.

## 3. Как работает защита от duplicate script

Fallback loader:

- использует id `telegram-web-app-script`;
- сначала ищет существующий script по id;
- затем ищет script по `src*="telegram-web-app.js"`;
- если script уже найден, новый script не добавляется;
- если найденный script не имеет id, ему назначается `telegram-web-app-script`;
- если script не найден, создается один новый script с `src="https://telegram.org/js/telegram-web-app.js"`.

## 4. Какие diagnostics добавлены

В `TelegramRuntimeDiagnostics` добавлено:

- `hasTelegramScriptTag`.

В профиле теперь отображается строка:

- `Telegram script: найден / не найден`.

Это помогает понять, загрузился ли официальный script хотя бы как DOM script tag.

## 5. Результат npm.cmd run lint

Успешно, ошибок нет.

## 6. Результат npm.cmd run build

Успешно, production build собран.

## 7. Что проверить в Telegram Desktop и на телефоне

После push/Vercel deploy открыть:

- `https://t.me/n8ntest182_bot/burlesque`

Затем перейти в `Профиль` и проверить карточку `Среда запуска`.

Лучший вариант:

- `Среда: Telegram Mini App`;
- `Telegram object: найден`;
- `WebApp API: найден`;
- `Telegram script: найден`;
- `initData length: больше 0` или `0`.

Минимально приемлемый диагностический вариант:

- `Среда: Telegram WebView`;
- `Telegram object: найден`;
- `WebApp API: не найден`;
- `Telegram script: найден`;
- `UserAgent Telegram: да`.

Если даже после fallback loader:

- `Telegram script: не найден`;

значит script не грузится в Telegram WebView, и следующим шагом нужно проверять доступность script, Network/CSP и способ открытия Mini App.

## 8. Что сознательно не реализовано

- Backend.
- API routes.
- CRM.
- Настоящая авторизация.
- Hash validation.
- `localStorage`.
- Cookies.
- Session.
- Выдача призов.
- Полный вывод `initData`.
- Вывод `hash` / `query_id`.
- Признание пользователя авторизованным.
