# Task 008 — UI QA And Mobile Polish Report

## Что исправлено

- Убран блок `Shell Status` из обычного пользовательского интерфейса через константу `SHOW_DEBUG_PANEL = false`.
- Добавлен увеличенный нижний padding в `AppShell`, чтобы fixed bottom navigation не перекрывала последний контент.
- Улучшена нижняя навигация: активная вкладка стала заметнее, кликабельная зона сохранена крупной, подписи не слипаются на мобильной ширине.
- Исправлен экран призов: пустая желтая плашка заменена на компактную кнопку `Подробнее` с читаемым текстом.
- Карточки mock-призов приведены к аккуратному виду, detail block стал понятнее.
- Уточнены тексты на экранах игр, призов и профиля: mock/demo предупреждения видны без лишнего debug-шумa.
- Обновлены тексты mock data и mock user, чтобы интерфейс был читаемым на русском языке.
- Локально проверены мобильные состояния Home, Games, Prizes и Profile.

## Измененные файлы

- `app/src/components/AppShell.tsx`
- `app/src/components/BottomNav.tsx`
- `app/src/components/UserCard.tsx`
- `app/src/components/ui/Button.tsx`
- `app/src/components/ui/Badge.tsx`
- `app/src/features/screens/HomeScreen.tsx`
- `app/src/features/screens/GamesScreen.tsx`
- `app/src/features/screens/PrizesScreen.tsx`
- `app/src/features/screens/ProfileScreen.tsx`
- `app/src/features/games/scratch-card/ScratchCardDemo.tsx`
- `app/src/features/games/scratch-card/scratchCardDemoData.ts`
- `app/src/features/games/wheel-of-prizes/WheelOfPrizesDemo.tsx`
- `app/src/features/games/wheel-of-prizes/wheelDemoData.ts`
- `app/src/data/home.ts`
- `app/src/data/games.ts`
- `app/src/data/prizes.ts`
- `app/src/data/profile.ts`
- `app/src/lib/telegram.ts`
- `obsidian/05_Codex/Task_008_UI_QA_And_Mobile_Polish_Report.md`

## Выполненные команды

- `npm.cmd run lint`
- `npm.cmd run build`
- `npm.cmd run dev -- --hostname 127.0.0.1 --port 3000`
- `Invoke-WebRequest -UseBasicParsing http://127.0.0.1:3000 | Select-Object StatusCode`
- `npm.cmd run dev -- --hostname 127.0.0.1 --port 3001`

## Результаты проверки

- `npm.cmd run lint` — успешно, без ошибок.
- `npm.cmd run build` — успешно, production build собран.
- `http://127.0.0.1:3000` — отвечает `200`.
- Порт `3000` уже был занят работающим Next dev server текущего проекта.
- Попытка запустить отдельный dev server на `3001` остановлена Next.js, потому что уже активен dev server проекта на `3000`.

## Ручная проверка

Проверено через Playwright в мобильном viewport `390x844`:

- Главная — читаемая, без горизонтального скролла.
- Игры — карточки и кнопки читаемые, активная вкладка заметна.
- Призы — нет пустых желтых кнопок, `Подробнее` отображается корректно.
- Профиль — нет `Shell Status`, demo-state показан в пользовательском виде.

Дополнительно проверены viewport screenshots:

- `task-008-home-mobile.png`
- `task-008-games-mobile.png`
- `task-008-prizes-mobile-fixed.png`
- `task-008-profile-mobile.png`
- `task-008-profile-full-mobile.png`

## Что сознательно не реализовано

- Backend.
- База данных.
- CRM.
- Авторизация.
- Проверка Telegram `initData`.
- Настоящие игры.
- Random и вероятности выигрыша.
- Выдача призов, claim/redeem.
- Оплата.
- Аналитика.
- Внешние UI-библиотеки.
- Глобальный state manager.
- Новые routes.
