# Task 017.2 — Telegram Runtime Diagnostics Report

## 1. Почему понадобился фикс

После подключения официального `telegram-web-app.js` приложение по-прежнему показывало в Telegram профиле:

- `Среда: Browser preview`;
- `Telegram user: не найден`.

Это означало, что frontend не видел `window.Telegram.WebApp` или видел его слишком поздно. Чтобы понять, проблема в коде detection, загрузке script, Telegram WebView или способе открытия Mini App, добавлена безопасная runtime diagnostics.

## 2. Какие diagnostics добавлены

В `TelegramRuntimeInfo` добавлено поле `diagnostics`:

- `hasWindow`;
- `hasTelegramObject`;
- `hasWebAppObject`;
- `hasInitDataUnsafe`;
- `initDataLength`;
- `userAgentIncludesTelegram`.

`initDataLength` показывает только длину строки, не сам payload.

## 3. Какие статусы теперь возможны

- `browser` — обычный браузер, Telegram-признаков нет.
- `telegram_webview_without_webapp` — userAgent похож на Telegram WebView, но `window.Telegram.WebApp` не найден.
- `telegram_without_init_data` — `window.Telegram.WebApp` найден, но `initData` пустой.
- `telegram_with_init_data` — `window.Telegram.WebApp` найден и `initData` непустой.

Ни один из этих статусов не означает авторизацию пользователя.

## 4. Что безопасно показывается

В профиле в карточке `Среда запуска` показывается:

- среда запуска;
- наличие Telegram object;
- наличие WebApp API;
- наличие initData;
- наличие Telegram user;
- userAgent Telegram signal;
- `initData length`;
- статус авторизации: `будет подключена позже`.

## 5. Что не показывается

В UI не показывается:

- полный `initData`;
- `hash`;
- `query_id`;
- технический JSON;
- bot token;
- утверждение, что пользователь авторизован;
- утверждение, что `initData` валидна.

## 6. Что изменено в коде

- `app/src/lib/telegram.ts`
  - добавлен статус `telegram_webview_without_webapp`;
  - добавлены safe diagnostics;
  - добавлена проверка `navigator.userAgent`;
  - сохранена логика без backend/auth.
- `app/src/features/telegram/useTelegramRuntime.ts`
  - добавлен retry schedule: `0`, `100`, `250`, `500`, `1000`, `2000`, `3500` ms;
  - дальнейшие проверки останавливаются, если статус стал не `browser`;
  - все таймеры очищаются в cleanup.
- `app/src/features/screens/ProfileScreen.tsx`
  - обновлена карточка `Среда запуска`;
  - diagnostics показаны как аккуратные строки, а не debug-console.
- `app/src/app/layout.tsx`
  - проверено, что официальный Telegram script подключен через `next/script` с `strategy="beforeInteractive"`.

## 7. Результат npm.cmd run lint

Успешно, ошибок нет.

## 8. Результат npm.cmd run build

Успешно, production build собран.

## 9. Что проверить в Telegram

После push/Vercel deploy:

1. Открыть Mini App через `n8ntest`.
2. Перейти в `Профиль`.
3. Проверить карточку `Среда запуска`.

Полезные результаты:

- Если `WebApp API: найден` и `initData: найден` — Telegram runtime работает корректно.
- Если `WebApp API: найден`, но `initData: нет` — Telegram object доступен, но запуск идет без initData.
- Если `Среда: Telegram WebView`, но `WebApp API: не найден` — Telegram WebView открыт, но WebApp API недоступен.
- Если все еще `Browser preview` — ни script, ни userAgent не дают признаков Telegram; нужно проверить способ открытия Mini App в BotFather / кнопке запуска.

## 10. Что сознательно не реализовано

- Backend.
- API routes.
- Настоящая авторизация.
- Hash validation.
- CRM.
- Session.
- Cookies.
- `localStorage`.
- Выдача призов.
- Claim/redeem.
- Новые routes.
