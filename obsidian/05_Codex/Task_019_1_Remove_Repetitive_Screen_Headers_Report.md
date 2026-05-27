# Task 019.1 — Remove Repetitive Screen Headers Report

## 1. Какие header-блоки убраны

- Убран повторяющийся branded eyebrow `Burlesque Mini App` из `ScreenHeader`.
- На вкладках `Афиша`, `Игры`, `Призы`, `Профиль` остался только компактный screen heading: заголовок и короткое описание.
- Логотип `B`, название `Burlesque Mini App`, подпись `мини-приложение` и маленький `MVP` badge оставлены только в `AppShell`.
- `MVP` badge в `AppShell` сделан менее заметным и компактным.

## 2. Что оставлено на Главной

На Главной большой welcome hero сохранен:

- приветствие;
- CTA `Смотреть афишу`;
- CTA `Мои привилегии`;
- ближайшее событие;
- preview-блоки.

## 3. Что изменено в Профиле

- Удален нижний информационный блок `Демо-профиль`.
- Оставлены:
  - member card;
  - clean runtime card;
  - progress card;
  - stats grid;
  - current activity.
- Runtime block по-прежнему показывает только:
  - `Среда`;
  - `Telegram user`;
  - `Авторизация`.

## 4. Что изменено в BottomNav

- Убраны английские буквенные markers `B/A/G/P/U`.
- Используются минимальные нейтральные symbols:
  - `•` Главная;
  - `◇` Афиша;
  - `✦` Игры;
  - `□` Призы;
  - `○` Профиль.

## 5. Какие экраны проверены

Локально через Playwright проверены:

- Главная;
- Афиша;
- Игры;
- Призы;
- Профиль.

Viewport:

- `390x844`;
- `375x812`;
- `430x932`.

## 6. Результат lint

`npm.cmd run lint` — успешно, ошибок нет.

## 7. Результат build

`npm.cmd run build` — успешно, production build собран.

## 8. Что не менялось

- Backend.
- Auth.
- Telegram runtime parsing.
- CRM.
- Prize logic.
- Routes.
- Assets.
- Packages.
