# Task 031 Fix Telegram Script Hydration Warning Report

## Причина hydration warning

Официальный `telegram-web-app.js` был подключен в `app/src/app/layout.tsx` через `next/script` со стратегией `beforeInteractive`.

В local dev script успевал изменить `style` на `<html>` до React hydration. React сравнивал server-rendered HTML с уже измененным DOM и показывал hydration mismatch / dev overlay.

## Что изменено

- Убран ранний `next/script` из `app/src/app/layout.tsx`.
- Telegram script теперь грузится только client-side в `useTelegramRuntime` после mount.
- В обычном browser preview без Telegram launch params / Telegram user agent / `window.Telegram` script больше не загружается.
- Fallback loader остался idempotent:
  - использует id `telegram-web-app-script`;
  - не добавляет duplicate script;
  - повторно проверяет runtime после загрузки script;
  - не падает вне Telegram.
- Launch params fallback сохранен и расширен: detection умеет смотреть `tgWebAppData` в `location.hash` и `location.search`.

## Как теперь работает script loading

1. После mount hook вызывает `getTelegramRuntimeInfo`.
2. Если WebApp API уже доступен, вызываются `ready()` и `expand()`.
3. Если WebApp API не найден, script догружается только при Telegram-сигналах:
   - `navigator.userAgent` содержит Telegram;
   - URL содержит `tgWebAppData`;
   - найден `window.Telegram`, но без `WebApp`.
4. В обычном localhost/browser preview script не вставляется и не меняет `<html>` до hydration.

## Почему Telegram runtime не должен сломаться

- `location.hash` / `location.search` fallback для `tgWebAppData` сохранен.
- Parsed Telegram user продолжает попадать в `runtimeInfo`.
- `photo_url` продолжает передаваться в profile avatar.
- Если официальный script нужен внутри Telegram WebView, он догружается после mount.
- Raw `initData`, `hash`, `signature`, `query_id` не выводятся.

## Проверка в browser preview

Проверено локально через `npm.cmd run dev` и Playwright:

- `http://localhost:3000` открывается без hydration mismatch.
- В обычном browser preview `telegram-web-app.js` не добавляется в DOM.
- `<html>` не получает Telegram style vars.
- Red error overlay отсутствует.
- Профиль в browser preview показывает `Демо-гость`.

Дополнительно проверен локальный URL с тестовыми Telegram launch params:

- Profile показывает `Nick`.
- Profile показывает `@heyonick`.
- Telegram script догружается после mount.
- Error overlay отсутствует.

## Команды

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.
- `npm.cmd run dev` — checked locally.

## Что проверить после deploy в Telegram

- Mini App открывается через Telegram `web_app` кнопку.
- Telegram user отображается в профиле.
- Telegram avatar/photo_url отображается, если доступен.
- Debug rows скрыты по умолчанию.
- BottomNav и вкладки работают.

## Что не менялось

- Backend.
- Auth validation.
- CRM.
- Storage/cookies/session.
- Routes/API.
- Real prize logic.
- Visual UI direction.
