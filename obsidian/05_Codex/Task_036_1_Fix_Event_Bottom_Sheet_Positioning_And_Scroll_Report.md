# Task 036.1 Fix Event Bottom Sheet Positioning And Scroll Report

## В чем была причина

Bottom sheet рендерился внутри screen container, который анимируется через transform (`screen-soft-enter`). CSS transform создает containing block для `position: fixed`, поэтому overlay переставал быть настоящим viewport-fixed элементом.

Из-за этого:

- backdrop начинался не от края viewport;
- sheet мог появляться ниже видимой области;
- появлялся пустой scroll;
- BottomNav/контент могли визуально спорить с popup.

## Как исправлено позиционирование

- Bottom sheet вынесен через React portal в `document.body`.
- Overlay теперь действительно `fixed inset-0 z-50`.
- Backdrop — `absolute inset-0`.
- Sheet wrapper — `absolute inset-x-0 bottom-0`.
- Panel расположен внизу viewport и находится поверх BottomNav.
- Анимация sheet упрощена: вместо `translateY(100%)` используется небольшой `translateY(18px)`, чтобы не ломать bottom anchoring.

## Как исправлен scroll

- Пока sheet открыт, включается scroll lock:
  - `document.body.style.overflow = "hidden"`.
- При закрытии или unmount прежнее значение `overflow` восстанавливается.
- Scroll разрешен только внутри sheet content:
  - `max-h-[82vh]`;
  - `overflow-y-auto`.
- После закрытия страница снова скроллится нормально.

## Как работает закрытие

Bottom sheet закрывается:

- по кнопке `×`;
- по кнопке `Понятно`;
- по клику на backdrop;
- по `Escape` в browser preview.

## Проверка

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.
- `npm.cmd run dev` — checked locally.
- Проверено через Playwright на `390x844`:
  - overlay рендерится в `document.body`;
  - backdrop покрывает весь viewport;
  - panel bottom равен `0`;
  - panel полностью виден;
  - sheet находится выше BottomNav;
  - body scroll lock включается и восстанавливается;
  - Velvet Nights открывается;
  - Golden Hour открывается;
  - Afterglow Party открывается;
  - close by `Понятно`, backdrop и `Escape` работает;
  - horizontal scroll не обнаружен.

## Что проверить в Telegram

- Sheet прикреплен к низу экрана.
- Нет пустого scroll-поля.
- Нет полос/артефактов.
- Backdrop закрывает весь экран.
- BottomNav не находится поверх sheet.
- Touch-закрытие работает через backdrop и `Понятно`.
