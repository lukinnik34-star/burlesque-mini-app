# Task 030 Final Profile Fallback Name Fix Report

## Причина фикса

В browser preview на карточке профиля fallback-name `Демо-гость` визуально обрезался как `Демо-го...`. Это выглядело как незавершенный UI перед visual freeze.

## Что исправлено

- В `UserCard` для fallback-пользователя отключено агрессивное `truncate`.
- Для `Демо-гость` задан чуть более компактный размер текста `text-[22px]`, чтобы имя помещалось в member card.
- Для реальных Telegram names сохранено прежнее поведение `truncate text-2xl`, чтобы длинные имена не ломали layout.
- Username/subtitle остался аккуратно ограниченным через `truncate`.

## Файлы изменены

- `app/src/components/UserCard.tsx`
- `obsidian/05_Codex/Task_030_Final_Profile_Fallback_Name_Fix_Report.md`

## Проверка

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.
- Локально проверен профиль в browser preview на viewport `390x844`.
- Проверено, что `Демо-гость` отображается отдельным текстовым узлом без `text-overflow: ellipsis`.

## Что не менялось

- Dark Stitch visual direction.
- Структура профиля.
- Telegram runtime parser.
- Backend/auth/CRM.
- Storage/routes/API.
- Логика реального Telegram user.

## Что проверить после deploy

- Browser preview: `Демо-гость` не режется.
- Telegram Mini App: имя Telegram user, например `Nick`, выглядит как раньше.
- BottomNav не перекрывает нижний контент.
