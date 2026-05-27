# Task 018.1 — Hide Telegram Debug Rows Report

## 1. Причина фикса

После Task 018 в production UI профиля все еще могли быть видны технические строки Telegram runtime diagnostics при незаданной переменной `NEXT_PUBLIC_SHOW_TELEGRAM_DEBUG`.

Фикс уточняет использование debug-флага в `ProfileScreen.tsx`: если env-переменная не задана или не равна `"true"`, технический diagnostic block не рендерится.

## 2. Что спрятано

В обычном пользовательском UI больше не должны отображаться:

- Telegram object;
- WebApp API;
- Telegram script;
- Telegram keys;
- Launch params;
- initData;
- initData length;
- Platform;
- Version;
- UserAgent Telegram.

Эти строки остаются только в debug-блоке.

## 3. Что осталось в обычном UI

Карточка “Среда запуска” показывает только:

- Среда;
- Telegram user;
- Авторизация.

Тексты не называют пользователя авторизованным и не утверждают, что CRM или реальный профиль подключены.

## 4. Как включить debug

Для включения технической диагностики нужно задать переменную окружения:

```bash
NEXT_PUBLIC_SHOW_TELEGRAM_DEBUG=true
```

Если переменная не задана, debug считается выключенным.

## 5. Измененные файлы

- `app/src/features/screens/ProfileScreen.tsx`
- `obsidian/05_Codex/Task_018_1_Hide_Telegram_Debug_Rows_Report.md`

## 6. Результат lint

`npm.cmd run lint` — успешно, ошибок нет.

## 7. Результат build

`npm.cmd run build` — успешно, production build собран.

## 8. Что сознательно не реализовано

- Backend.
- API routes.
- CRM.
- Настоящая авторизация.
- Signature validation.
- Cookies / session / localStorage.
- Выдача призов.
- Изменения runtime parser.
- Изменения `tg-test.html`.
