# Design Reference

## Current Accepted Direction

Текущий принятый дизайн: `Dark Stitch Guest App Direction`.

Это темный mobile-first club app style:

- dark plum / near black background;
- lavender / soft violet primary accent;
- dark glass surfaces;
- warm white / pale lavender text;
- muted gray-lavender secondary text;
- bottom nav with icons;
- centered Home greeting;
- strong event pass cards;
- member dashboard profile;
- compact demo cards for games and rewards.

Предыдущее cream/burgundy направление больше не является текущей дизайн-базой. Его можно считать архивным этапом.

Без отдельного явного решения не делать новый global redesign. Следующие изменения должны быть только точечными QA/polish-правками или задачами по продуктовым данным.

## Task 026 Guest App Direction

Текущий visual direction обновлен в сторону `dark premium club guest app`.

Новый ориентир:

- темный plum / near black фон;
- dark purple-black surfaces;
- lavender / soft violet primary accent;
- muted wine как вторичный клубный акцент;
- warm white / pale lavender text;
- floating island BottomNav с иконками;
- centered Home greeting;
- strong event pass card;
- member dashboard profile.

Stitch screens `burlesque_club_final_2` и `burlesque_club_island_nav` использованы только как visual/interface reference. Stitch code, external fonts/icons/images, AI portraits, white rewards screen, casino wording и active booking/claim/redeem logic не переносились.

Это frontend-only UI direction. Backend, CRM, auth validation, storage, routes и Telegram parser не менялись.

## Task 024 Experimental Direction: Dark Obsidian Noir

Текущий визуальный direction prototype переведен в экспериментальное направление `dark Obsidian Noir`.

Цель направления:

- ощущение private club membership app;
- темный graphite / warm charcoal фон;
- glassmorphic cards с тонкими champagne borders;
- deep plum, muted wine и dusty rose accents;
- champagne highlights для активных элементов;
- premium serif headings и чистая mobile-first иерархия;
- компактный Telegram Mini App shell без лендингового ощущения.

Из Stitch archive взяты только визуальные идеи: темная палитра, стеклянные поверхности, event pass cards, premium member card и floating bottom navigation. Stitch code, CDN, Material Symbols, Unsplash images, casino/roulette wording, white prizes screen, person avatars и чужой бренд не переносились.

Это направление пока считается visual prototype. Backend, auth validation, CRM, реальные призы, claim/redeem, storage и Telegram parser не менялись.

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
