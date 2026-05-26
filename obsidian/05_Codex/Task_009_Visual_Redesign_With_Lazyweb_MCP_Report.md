# Task 009 — Visual Redesign With Lazyweb MCP Report

## Lazyweb MCP

Подключенный `lazyweb MCP` в текущем окружении недоступен.

- `tool_search` по запросу `lazyweb MCP UI patterns mobile web app dark premium Telegram Mini App` не вернул lazyweb-инструмент.
- `tool_search` по точному запросу `lazyweb` вернул `0 tools`.

Чтобы не останавливать задачу, дизайн-исследование выполнено через доступный web research и ручную UI QA. Это ограничение зафиксировано явно.

## Что было найдено и использовано

- Telegram Mini Apps поддерживают theme params и CSS-переменные Telegram, поэтому интерфейс должен оставаться mobile-first и учитывать Telegram viewport/safe-area: https://core.telegram.org/bots/webapps
- Для основных разделов мобильного приложения подходит bottom navigation на 3–5 пунктов с очевидным активным состоянием.
- Touch targets должны оставаться крупными: ориентир 44–48px минимум.
- Для premium dark UI лучше использовать ограниченную палитру, глубокую графитовую базу, мягкие акценты, стеклянные поверхности и аккуратные тени, а не яркие плоские желтые блоки.

## Примененные визуальные решения

- Пересобрана палитра: deep black / graphite base, warm champagne accent, muted text.
- Добавлены мягкие radial gradients в фон и hero-блоки.
- Карточки переведены на glass/blur стиль с тонкими border/ring и глубокой тенью.
- Кнопки стали pill-shaped, с мягким premium gradient и понятным disabled-состоянием.
- BottomNav стал floating glass panel с крупными touch targets, короткими символами и ясным active state.
- AppShell стал ближе к Telegram Mini App: компактный верх, safe-area padding, fixed nav, mobile max-width.
- HomeScreen получил сильный hero-блок `Tonight concierge` и более продуктовые тексты.
- GamesScreen получил визуально различимые premium promo cards для Scratch Card и Wheel Of Prizes.
- ScratchCardDemo получил более аккуратную закрытую карточку с textured overlay и мягким reveal.
- WheelOfPrizesDemo получил более современное CSS-колесо и outcome card.
- PrizesScreen оформлен как premium offers, без пустых кнопок.
- ProfileScreen оформлен как guest/member preview, без лишнего технического шума.

## Что сознательно отклонено

- Casino-like визуал: не подходит Burlesque Mini App и может сделать продукт слишком игровым.
- Яркие кислотные акценты: конфликтуют с premium nightlife направлением.
- Тяжелые анимации и animation libraries: не нужны для MVP и могут ухудшить Telegram WebView.
- Icon library: запрещена задачей, поэтому использованы только простые текстовые символы в навигации.
- Реальная тема Telegram через backend/auth: задача только про UI, без авторизации и backend.

## Измененные файлы

- `app/src/app/globals.css`
- `app/src/components/AppShell.tsx`
- `app/src/components/BottomNav.tsx`
- `app/src/components/UserCard.tsx`
- `app/src/components/ui/Button.tsx`
- `app/src/components/ui/Card.tsx`
- `app/src/components/ui/Section.tsx`
- `app/src/components/ui/Badge.tsx`
- `app/src/components/ui/ScreenHeader.tsx`
- `app/src/features/screens/HomeScreen.tsx`
- `app/src/features/screens/GamesScreen.tsx`
- `app/src/features/screens/PrizesScreen.tsx`
- `app/src/features/screens/ProfileScreen.tsx`
- `app/src/features/games/scratch-card/ScratchCardDemo.tsx`
- `app/src/features/games/wheel-of-prizes/WheelOfPrizesDemo.tsx`
- `app/src/data/home.ts`
- `app/src/data/games.ts`
- `app/src/data/profile.ts`
- `obsidian/05_Codex/Task_009_Visual_Redesign_With_Lazyweb_MCP_Report.md`

## Выполненные команды

- `npm.cmd run lint`
- `npm.cmd run build`
- `git diff -- ... --stat`

## Результаты проверки

- `npm.cmd run lint` — успешно, без ошибок.
- `npm.cmd run build` — успешно, production build собран.

## Ручная проверка

Проверено через Playwright:

- `390x844` — Главная, Игры, Scratch Card demo, Wheel Of Prizes demo.
- `375x812` — Призы, кнопки `Подробнее`, отсутствие пустых плашек.
- `430x932` — Профиль, demo-state, guest preview.
- `900x900` — desktop preview, mobile контейнер остается центрированным.

Скриншоты проверки:

- `task-009-home-390.png`
- `task-009-games-390.png`
- `task-009-scratch-revealed-390.png`
- `task-009-wheel-390.png`
- `task-009-wheel-result-390.png`
- `task-009-prizes-375.png`
- `task-009-profile-430.png`
- `task-009-desktop-preview.png`

## Что сознательно не реализовано

- Backend.
- База данных.
- CRM.
- Авторизация.
- Проверка Telegram `initData`.
- Настоящие игры.
- Random.
- Вероятности.
- Выдача призов.
- Claim/redeem.
- Оплата.
- Аналитика.
- Новые routes.
- Zustand/Redux.
- Внешние UI-kit зависимости.
- Icon library.
- Animation library.
- Canvas scratch.
- Реальные игровые результаты.
