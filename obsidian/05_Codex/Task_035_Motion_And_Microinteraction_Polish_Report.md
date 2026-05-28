# Task 035 Motion And Microinteraction Polish Report

## Какие анимации добавлены

- Screen transition при переключении вкладок: легкий fade + translateY.
- Button tap feedback для primary/secondary/small actions.
- BottomNav microinteraction:
  - active item мягко меняет состояние;
  - icon слегка поднимается/scale;
  - tap feedback без bounce.
- Card tap feedback для кликабельных карточек:
  - Home quick cards;
  - event cards;
  - game cards;
  - reward cards.
- Home hero ambient motion:
  - очень мягкий drift/opacity shift для glow layers.
- Event card reveal:
  - fade/slide;
  - легкий stagger delay между карточками.
- Games demo polish:
  - Scratch Card закрытое состояние получило subtle shimmer;
  - demo panels появляются через мягкий reveal.
- Rewards detail panel:
  - detail panel появляется через fade/slide.
- Profile:
  - member card мягко появляется;
  - progress bar заполняется до 62%;
  - stat cards появляются мягко.

## Prefers Reduced Motion

Добавлен `@media (prefers-reduced-motion: reduce)`.

В reduced motion:

- long/decorative animations сводятся к минимальной длительности;
- transitions становятся почти мгновенными;
- tap transform отключается.

## Какие компоненты затронуты

- `app/src/app/globals.css`
- `app/src/components/AppShell.tsx`
- `app/src/components/BottomNav.tsx`
- `app/src/components/EventCard.tsx`
- `app/src/components/ui/Button.tsx`
- `app/src/features/screens/HomeScreen.tsx`
- `app/src/features/screens/EventsScreen.tsx`
- `app/src/features/screens/GamesScreen.tsx`
- `app/src/features/screens/PrizesScreen.tsx`
- `app/src/features/screens/ProfileScreen.tsx`
- `app/src/features/games/scratch-card/ScratchCardDemo.tsx`
- `app/src/features/games/wheel-of-prizes/WheelOfPrizesDemo.tsx`

## Что сознательно не добавлялось

- Новые зависимости.
- Three.js / shaders / canvas.
- Confetti.
- Casino spin / win effects.
- Aggressive bounce.
- Heavy infinite glow loops.
- Counters counting up для profile stats.
- Новая game/prize/business логика.

## Проверка

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.
- `npm.cmd run dev` — checked locally.
- Browser preview проверен без hydration overlay.
- Проверены вкладки: Главная, Афиша, Игры, Призы, Профиль.
- Проверены demo actions:
  - Scratch Card demo;
  - reward details;
  - profile progress.
- Viewport: `390x844`.
- Горизонтальный скролл не обнаружен.

## Что проверить в Telegram

- Анимации не лагают в Telegram WebView.
- BottomNav не перекрывает контент.
- Нажатия на buttons/cards/nav ощущаются нормально.
- Scratch shimmer выглядит тихо, не как casino effect.
- Profile progress не воспринимается как реальный backend/balance.
