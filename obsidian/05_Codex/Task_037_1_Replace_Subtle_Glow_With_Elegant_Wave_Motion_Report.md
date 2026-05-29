# Task 037.1: Replace Subtle Glow With Elegant Wave Motion Report

## 1. Почему старая анимация была недостаточно заметной

После Task 037 ambient motion был построен в основном на мягких glow blobs и slow breathing. В темной Stitch direction это выглядело аккуратно, но слишком слабо: эффект читался как почти статичная точка / пульсация и не давал ощущения живой glass / velvet поверхности.

## 2. Где добавлена wave motion

Wave motion добавлена только в ключевые блоки:

- Home hero card — `ambient-hero`.
- Home featured event card — `ambient-card`.
- Афиша / Velvet Nights featured event card — `ambient-card`.
- Profile member card — `ambient-pass`.

На обычные карточки, BottomNav, bottom sheet, prizes, games list и второстепенные blocks эффект не распространялся.

## 3. Какие CSS classes/keyframes изменены

Обновлены существующие ambient classes:

- `ambient-hero`
- `ambient-card`
- `ambient-pass`

Главный animated layer теперь находится в `::before` и работает как широкий diagonal light wave.

Добавлены / заменены keyframes:

- `elegant-wave-sweep`
- `elegant-wave-sweep-reverse`

Старые breathe / haze keyframes для карточек заменены на wave motion. Вторичные glow layers в `::after` оставлены статичными и более тихими.

На Home hero старые `ambient-drift` glow dots ослаблены и сделаны статичными, чтобы главным эффектом стала световая волна.

## 4. Performance

- Не добавлялись новые зависимости.
- Не используется canvas, shaders, particles или JS animation loop.
- На каждой ключевой карточке используется только один animated wave layer.
- Анимируются только `transform` и `opacity`.
- Blur radius не анимируется.
- Decorative layers имеют `pointer-events: none`.
- Контент карточек поднят поверх wave layer через `relative z-[1]`, чтобы текст, avatar, stats и CTA оставались читаемыми.

## 5. Prefers reduced motion

Существующий `prefers-reduced-motion` сохранен.

Для ambient pseudo-elements:

- animation отключается;
- transform сбрасывается;
- gradients остаются статичными.

## 6. Результат проверки

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.
- `npm.cmd run dev` — started and checked in browser preview.

Проверено:

- Home hero wave активна.
- Velvet Nights / featured event wave активна.
- Profile member card wave активна.
- BottomNav не затронут.
- Event bottom sheet открывается поверх BottomNav.
- Body scroll lock работает во время bottom sheet.
- Browser preview без hydration overlay.

Viewport checks:

- `390x844` — no horizontal scroll.
- `375x812` — no horizontal scroll.
- `430x932` — no horizontal scroll.

## 7. Что проверить после deploy в Telegram

- Wave motion видна в Telegram WebView.
- Нет лагов, мерцания и полос.
- Текст в hero / event card / profile card остается читаемым.
- Scroll остается плавным.
- Bottom sheet не получает visual artifacts.

## 8. Что сознательно не реализовано

- Backend.
- Auth validation.
- CRM.
- Storage.
- Routes / API.
- Real prize / booking / game logic.
- New assets.
- New dependencies.
- Neon / casino / confetti / particle effects.
