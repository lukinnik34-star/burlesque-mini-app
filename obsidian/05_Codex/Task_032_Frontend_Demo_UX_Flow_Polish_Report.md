# Task 032 Frontend Demo UX Flow Polish Report

## Какие CTA проверены

- Главная: `Смотреть афишу`, `Мои привилегии`, quick cards `Афиша`, `Игры`, `Призы`, `Профиль`.
- Афиша: filters `Все`, `Сегодня`, `Скоро`, CTA `Подробнее`.
- Игры: `Открыть демо` для Scratch Card и Wheel Of Prizes.
- Призы: `Подробнее` у каждой privilege card.
- Профиль: activity block для выбранной demo game / privilege.

## Какие переходы и состояния добавлены

- Quick cards на Главной теперь переключают вкладки через существующий local tab state.
- `Смотреть афишу` открывает вкладку `Афиша`.
- `Мои привилегии` открывает вкладку `Призы`.
- Event filters в Афише выбирают активный filter chip и обновляют выбранное событие.
- `Подробнее` в Афише показывает details block выбранного события.
- `Подробнее` в Призах показывает compact detail panel выбранной привилегии.
- Профиль показывает выбранную demo game / privilege в блоке `Активность`.

## Как работают demo games

- Scratch Card и Wheel Of Prizes открываются как frontend-only demo preview.
- Можно переключать active demo между Scratch Card и Wheel Of Prizes.
- В demo copy явно указано: результат не сохраняется, призы пока не выдаются.
- Claim/redeem/win flow не добавлялся.

## Как работают reward details

- Каждая privilege card открывает detail panel.
- Detail panel использует тексты `Демо-привилегия`, `Показано для примера`, `будет подключено позже`.
- CTA остается `Подробнее` и не выглядит как выдача или активация приза.

## Что осталось demo-only

- Афиша, фильтры и details.
- Scratch Card / Wheel Of Prizes.
- Призы и privilege details.
- Profile stats, progress и activity.
- Telegram profile preview без backend validation.

## Что сознательно не реализовано

- Backend/API routes.
- Auth validation.
- CRM.
- Database.
- localStorage/cookies/session.
- Real booking.
- Real prize claim/redeem.
- Real balance logic.
- Payment flow.
- New dependencies.
- Visual redesign.

## Проверка

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.
- `npm.cmd run dev` — checked locally.
- Browser preview checked without hydration overlay.
- Viewport checked through Playwright at `390x844`.

## Что проверить после deploy в Telegram

- Главная CTA и quick cards переключают вкладки.
- Афиша filters и `Подробнее` работают.
- Scratch Card demo и Wheel Of Prizes demo открываются.
- Призы открывают detail panel.
- Профиль показывает выбранные demo game / privilege в текущей frontend session.
- Debug rows скрыты.
- Telegram user/photo_url не сломаны.
