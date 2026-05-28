# Task 037: Abstract Ambient Background Motion Report

## 1. Где добавлен ambient motion

- Global app background: добавлен общий слой `ambient-shell` за основным контентом приложения.
- Home hero card: добавлен класс `ambient-hero` с мягкими lavender / wine glow layers.
- Featured event card: добавлен класс `ambient-card` для карточки ближайшего события на Главной.
- Events featured card: добавлен класс `ambient-card` для большой карточки Velvet Nights / featured event в Афише.
- Profile member card: добавлен класс `ambient-pass` для member card в профиле.

## 2. Какие CSS/keyframes/classes добавлены

Добавлены CSS-классы:

- `ambient-shell`
- `ambient-hero`
- `ambient-card`
- `ambient-pass`

Добавлены keyframes:

- `ambient-shell-drift`
- `ambient-shell-drift-alt`
- `ambient-hero-breathe`
- `ambient-card-haze`
- `ambient-pass-breathe`

Анимации используют slow drift / breathing через `transform` и `opacity`.

## 3. Performance меры

- Не используется canvas, three.js, shaders или новые зависимости.
- Не анимируется blur radius, только `transform` и `opacity`.
- Animated layers ограничены крупными ключевыми зонами: shell, hero, event pass, profile pass.
- Все decorative layers имеют `pointer-events: none`.
- `will-change` применен только к ambient pseudo-elements.
- Layout, размеры карточек и логика экранов не менялись.

## 4. Prefers reduced motion

В `@media (prefers-reduced-motion: reduce)` добавлено отключение long ambient animations для:

- `ambient-shell`
- `ambient-hero`
- `ambient-card`
- `ambient-pass`

В reduced motion режиме gradients остаются статичными.

## 5. Результат проверки

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.
- `npm.cmd run dev` — started and checked in browser preview.

Проверено в browser preview:

- Home hero.
- Home featured event card.
- Афиша featured event card.
- Event bottom sheet.
- Profile member card.
- BottomNav.

Проверенные viewport:

- `390x844` — no horizontal scroll.
- `375x812` — no horizontal scroll.
- `430x932` — no horizontal scroll.

Event bottom sheet:

- overlay opens above BottomNav;
- panel is fixed to bottom;
- body scroll lock works while sheet is open;
- no horizontal scroll after ambient layers.

## 6. Что проверить в Telegram

- Motion не лагает в Telegram WebView.
- Ambient glow не мерцает при скролле.
- Текст в hero / event card / profile card остается читаемым.
- Bottom sheet открывается без полос и артефактов.
- BottomNav не перекрывается и остается кликабельным.

## 7. Что сознательно не реализовано

- Backend.
- Auth validation.
- CRM.
- Storage.
- Real prizes / booking / game logic.
- Canvas / shaders / three.js.
- New dependencies.
- New routes or external assets.
