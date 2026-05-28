# Task 036 Events Detail Bottom Sheet Report

## Что было неудобно

Раньше `Подробнее` в Афише выбирал событие, а детали показывались отдельной карточкой внизу экрана. Пользователь нажимал кнопку на карточке, но должен был скроллить вниз, чтобы увидеть информацию.

## Как теперь работает `Подробнее`

- `Подробнее` открывает modal / bottom sheet сразу поверх Афиши.
- Старый нижний details block удален из обычного потока.
- Пользователь остается на текущем месте списка событий.
- Bottom sheet показывает:
  - title события;
  - дату;
  - время;
  - локацию;
  - описание;
  - статус `Бронирование появится в следующем этапе.`;
  - кнопку `Понятно`.

## Какие события поддержаны

- Velvet Nights.
- Golden Hour.
- Afterglow Party.

Все три события открывают bottom sheet с собственными данными.

## Как закрывается bottom sheet

- По кнопке `×`.
- По кнопке `Понятно`.
- По клику на backdrop.
- По клавише `Escape` в browser preview.

## Что не реализовывалось

- Реальное бронирование.
- Покупка билета.
- Оплата.
- Backend/API.
- Auth validation.
- CRM.
- Storage/localStorage/cookies/session.
- Новые routes.
- Новые зависимости.

## Проверка

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.
- `npm.cmd run dev` — checked locally.
- Проверено через Playwright на `390x844`:
  - Афиша открывается;
  - `Подробнее` открывает bottom sheet;
  - старый нижний details block не виден до открытия sheet;
  - все 3 события открываются;
  - `Понятно` закрывает sheet;
  - backdrop click закрывает sheet;
  - `Escape` закрывает sheet;
  - horizontal scroll не обнаружен.

## Что проверить в Telegram

- Bottom sheet не уходит под системные зоны Telegram.
- Backdrop и close работают на touch.
- Контент помещается на реальных экранах 375-430 px.
- BottomNav не мешает popup.
