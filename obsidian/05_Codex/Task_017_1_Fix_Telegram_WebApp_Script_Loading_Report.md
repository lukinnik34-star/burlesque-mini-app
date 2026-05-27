# Task 017.1 — Fix Telegram WebApp Script Loading Report

## 1. В чем была проблема

После Task 017 приложение открывалось внутри Telegram Mini App, но профиль показывал:

- `Среда: Browser preview`;
- `Telegram user: не найден`.

Это означало, что frontend не видел `window.Telegram.WebApp` в момент runtime detection.

Вероятная причина: официальный Telegram WebApp script не был подключен в layout приложения, поэтому Telegram runtime object не был гарантированно доступен клиентскому коду.

## 2. Что добавлено

- В root layout подключен официальный Telegram WebApp script:

```tsx
<Script
  src="https://telegram.org/js/telegram-web-app.js"
  strategy="beforeInteractive"
/>
```

- `useTelegramRuntime()` оставлен client-side.
- Runtime helper по-прежнему вызывается после mount.
- Hook теперь делает первичную проверку и повторную проверку через короткую задержку, чтобы script/WebView успели выставить `window.Telegram.WebApp`.
- `ready()` и `expand()` вызываются только через safe helper, если `WebApp` доступен.

## 3. Какие файлы изменены

- `app/src/app/layout.tsx`
- `app/src/features/telegram/useTelegramRuntime.ts`
- `obsidian/05_Codex/Task_017_1_Fix_Telegram_WebApp_Script_Loading_Report.md`

## 4. Результат npm.cmd run lint

Успешно, ошибок нет.

## 5. Результат npm.cmd run build

Успешно, production build собран.

## 6. Что проверить в Telegram

После push/Vercel deploy:

1. Открыть Mini App через тестового бота `n8ntest`.
2. Перейти в `Профиль`.
3. Проверить, что статус больше не `Browser preview`.
4. Ожидаемые варианты:
   - `Telegram Mini App`, если `initData` доступен;
   - `Telegram без initData`, если `WebApp` найден, но `initData` пустой.
5. Проверить `Telegram user`:
   - `найден`, если Telegram передал user;
   - `не найден`, если user недоступен.
6. Проверить, что UI продолжает писать `Авторизация будет подключена позже`.
7. Убедиться, что UI не пишет:
   - `пользователь авторизован`;
   - `реальный профиль`;
   - `CRM подключена`;
   - `initData валидна`.

## 7. Что сознательно не реализовано

- Backend.
- API routes.
- CRM.
- Настоящая авторизация.
- Hash validation.
- `localStorage`.
- Cookies.
- Session.
- Новые routes.
- Выдача призов.
