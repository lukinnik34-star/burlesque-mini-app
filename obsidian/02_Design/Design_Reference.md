# Design Reference

## Финальное направление

Текущее визуальное направление зафиксировано как `light premium Burlesque`.

Интерфейс должен ощущаться как аккуратное мобильное приложение для guest experience: афиша, привилегии, промо-механики и профиль гостя. Это не лендинг, не dashboard, не casino UI и не тяжелый dark luxury.

## Зафиксированный стиль

- Теплый светлый фон.
- Основной акцент: глубокий бордовый.
- Вторичные цвета: ivory, cream, champagne, soft peach.
- Карточки: мягкие cream/white surfaces, тонкий border, деликатная тень.
- Border radius крупный, но спокойный.
- Typography: чистая mobile-first иерархия, elegant heading feel там, где это уместно.
- BottomNav: минимальный, светлый, компактный, с очевидной активной вкладкой.
- Visual assets: декоративные hero layers, event covers, game visuals, prize icons, member card background.
- Тексты короткие, пользовательские, без лишнего backend/CRM/dev шума.

## Что отвергнуто

Dark premium nightlife direction был протестирован и отвергнут в пользу light premium reference.

Не используем как основное направление:

- темный фон;
- heavy black/gold luxury;
- casino style;
- чрезмерное золото;
- агрессивные glow-эффекты;
- dashboard/admin look;
- технический dev UI;
- перегруз декоративными элементами.

## UI-принципы

- Mobile-first.
- Первый экран сразу дает понятные действия.
- Главная не должна быть маркетинговой заставкой.
- CTA должны быть крупными и читаемыми.
- Карточки мероприятий и призов должны выглядеть ценными, но не перегруженными.
- Demo/mock предупреждения нужны, но должны быть короткими и неброскими.
- Ассеты должны поддерживать композицию, а не спорить с текстом.
- На mobile viewport не должно быть горизонтального скролла.

## Reference image

Основной локальный референс:

- `obsidian/02_Design/references/burlesque_light_mobile_reference.png`

Из него взяты ощущения теплого mobile premium UI: cream cards, burgundy accent, мягкая навигация, аккуратные декоративные мотивы и спокойный premium tone.

## Task 019 Polish Direction

После UI/UX polish pass зафиксированы дополнительные правила:

- Stitch reference используется только как visual inspiration: editorial spacing, крупная типографика, мягкие privilege cards, чистая нижняя навигация.
- Не копировать бренд L'ÉCLAT, театральный/балетный контент, SPA/delivery privileges, ложные статусы и формулировки активной системы.
- Тексты должны звучать как пользовательский MVP, а не как dev-заглушка.
- Demo-состояния остаются честными, но формулируются коротко: `Демо-режим`, `Скоро доступно`, `Будет подключено позже`.
- Не использовать в основном UI лишние слова `frontend-only`, `mock`, `debug`, `CRM`, `backend`, если это не требуется для честного предупреждения.
- Карточки игр, призов и событий должны визуально принадлежать одной light premium системе.
- Нижняя навигация должна оставаться компактной и читаемой на 375–430 px viewport.
- Shader / animated background experiment отложен в backlog и не входит в текущий MVP polish.
