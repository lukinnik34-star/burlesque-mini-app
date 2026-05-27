# Task 018 — Clean Telegram Runtime UI And Document Result Report

## 1. Что было подтверждено на Task 017

- Mini App запускается через Bot API `web_app` кнопку.
- `window.Telegram.WebApp` может быть недоступен.
- Telegram launch params приходят через `location.hash`.
- `tgWebAppData.user` успешно читается frontend fallback parser.
- Профиль может показать Telegram имя и username.
- Это не является настоящей авторизацией без backend validation.

## 2. Почему добавлен fallback parser

Fallback parser добавлен потому, что Telegram передает корректные launch params, но WebApp API объект в текущем runtime может не появляться. Parser используется только для runtime preview и не считается доверенным источником авторизации.

## 3. Что убрано из пользовательского UI

Из обычной карточки профиля убраны технические строки:

- Telegram object;
- WebApp API;
- Telegram script;
- Telegram keys;
- Launch params;
- initData length;
- Platform;
- Version.

## 4. Как теперь выглядит runtime block

Обычный UI показывает только:

- Среда: `Telegram Mini App`, `Telegram WebView` или `Browser preview`;
- Telegram user: `найден` / `не найден`;
- Авторизация: `будет подключена позже`.

Дополнительный текст:

- `Telegram найден. Профиль пока показан в демо-режиме.`

## 5. Как включить debug diagnostics

Debug-блок оставлен в коде, но скрыт по умолчанию.

Для включения:

```bash
NEXT_PUBLIC_SHOW_TELEGRAM_DEBUG=true
```

Debug-блок не показывает raw `initData`, `tgWebAppData`, `hash`, `signature`, `query_id` или полный JSON.

## 6. Какие файлы изменены

- `app/src/features/screens/ProfileScreen.tsx`
- `app/src/components/UserCard.tsx`
- `obsidian/03_Tech/Telegram_Auth.md`
- `obsidian/06_Production/Roadmap.md`
- `obsidian/06_Production/Backlog.md`
- `obsidian/05_Codex/Task_018_Clean_Telegram_Runtime_UI_And_Document_Result_Report.md`

## 7. Результат npm.cmd run lint

Успешно, ошибок нет.

## 8. Результат npm.cmd run build

Успешно, production build собран.

## 9. Что проверить в Telegram

После deploy:

1. Открыть Mini App через Telegram `web_app` кнопку.
2. Перейти в `Профиль`.
3. Проверить:
   - имя Telegram-пользователя отображается;
   - username отображается;
   - среда: `Telegram Mini App`;
   - авторизация: `будет подключена позже`;
   - технический debug UI не виден.

В обычном браузере:

- профиль показывает `Browser preview`;
- Telegram user: `не найден`;
- приложение не падает.

## 10. Что сознательно не реализовано

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
