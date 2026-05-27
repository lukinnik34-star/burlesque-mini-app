# Task 019.2 — Final Mobile Viewport Polish Report

## 1. Какие экраны проверены

- Главная.
- Афиша.
- Игры.
- Призы.
- Профиль.

## 2. Какие spacing/layout правки сделаны

- `AppShell` получил более компактный верхний padding.
- Верхний header стал ниже: logo `B` уменьшен с `size-12` до `size-11`.
- Отступ после AppShell header уменьшен, чтобы внутренние экраны начинались выше.
- Общий нижний padding скорректирован под более компактный BottomNav.
- На Главной добавлен `break-words` для длинного Telegram имени в welcome hero.
- В `GamesScreen` уменьшена высота верхней визуальной зоны карточек и чуть уменьшены Scratch/Wheel visuals.

## 3. Что изменено в BottomNav

- Убраны верхние symbols над labels.
- Навигация стала labels-only:
  - Главная;
  - Афиша;
  - Игры;
  - Призы;
  - Профиль.
- Высота nav item уменьшена до `h-11`.
- Active state сохранен, но стал компактнее.

## 4. Какие microcopy правки сделаны

- В `PrizesScreen` badge `Демо-режим` сокращен до `Демо`.
- Подпись `Скоро доступно` сокращена до `Скоро`.
- Новых обещаний реальных призов, авторизации или CRM не добавлялось.

## 5. Какие viewport размеры проверены

Через Playwright/browser responsive проверены:

- `390x844`;
- `375x812`;
- `430x932`.

Проверялись вкладки и действия:

- Главная;
- Афиша;
- Игры;
- Scratch Card demo;
- Призы;
- выбор mock-приза;
- Профиль.

В локальном `next dev` браузере появился Next dev overlay из-за ошибки загрузки внешнего `https://telegram.org/js/telegram-web-app.js` в browser preview. Это локальная dev-среда/сетевой доступ к внешнему script; production build проходит успешно.

## 6. Результат npm.cmd run lint

`npm.cmd run lint` — успешно, ошибок нет.

## 7. Результат npm.cmd run build

`npm.cmd run build` — успешно, production build собран.

## 8. Что осталось frontend-only/demo

- Афиша и detail block мероприятия.
- Scratch Card demo.
- Wheel Of Prizes demo.
- Призы и privilege detail.
- Profile stats.
- Telegram runtime preview.

## 9. Что проверить после deploy в Telegram

- Mini App открывается через Telegram `web_app` кнопку.
- Профиль показывает Telegram user, если launch params доступны.
- Debug rows не видны.
- BottomNav не режется на реальном телефоне.
- Последние CTA и карточки не перекрываются BottomNav.
- Нет горизонтального скролла.

## 10. Что не менялось

- Backend.
- API routes.
- CRM.
- Auth validation.
- Telegram runtime parser.
- Cookies / session / localStorage.
- Real prize logic.
- Routes.
- Assets.
- Packages.
