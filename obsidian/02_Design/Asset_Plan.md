# Asset Plan

## Источник ассетов

Все подключенные visual assets лежат в:

- `app/public/assets/burlesque/`

Manifest ассетов:

- `app/src/data/assets.ts`

## Подключенные ассеты

### `hero_glow_blob.png`

- Где используется: `HomeScreen`.
- Назначение: мягкий декоративный glow layer в hero card.
- Возможные улучшения: оптимизировать вес, подготовить вариант под очень маленькие экраны.

### `hero_burgundy_wave.png`

- Где используется: `HomeScreen`.
- Назначение: бордовый декоративный слой в нижней части hero.
- Возможные улучшения: подготовить более спокойный вариант, если wave снова будет спорить с CTA.

### `hero_soft_orbit.png`

- Где используется: `HomeScreen`.
- Назначение: легкий premium ornament рядом с hero-заголовком.
- Возможные улучшения: проверить прозрачность на реальных устройствах.

### `event_velvet_nights.png`

- Где используется: `EventCard` для featured Velvet Nights.
- Назначение: главный event cover.
- Возможные улучшения: подготовить web-optimized версию, проверить читаемость overlay на разных экранах.

### `event_golden_hour.png`

- Где используется: `EventCard` для Golden Hour compact preview.
- Назначение: thumbnail / compact event cover.
- Возможные улучшения: подготовить отдельные thumbnail sizes.

### `scratch_card.png`

- Где используется: `GamesScreen`, `ScratchCardDemo`.
- Назначение: визуал промо-карты и закрытого состояния demo.
- Возможные улучшения: подготовить вариант с прозрачным фоном или отдельный compact version.

### `wheel_of_prizes.png`

- Где используется: `GamesScreen`, `WheelOfPrizesDemo`.
- Назначение: visual object колеса призов.
- Возможные улучшения: оптимизировать вес, проверить вращение на слабых устройствах.

### `prize_drink.png`

- Где используется: `PrizesScreen`.
- Назначение: иконка для приза `Приветственный напиток`.
- Возможные улучшения: подготовить consistent icon set для всех призов.

### `prize_discount.png`

- Где используется: `PrizesScreen`.
- Назначение: иконка для приза `Купон на скидку`.
- Возможные улучшения: подготовить более компактный вариант, так как ассет широкий.

### `prize_table.png`

- Где используется: `PrizesScreen`.
- Назначение: иконка для приза `Бонус на резерв стола`.
- Возможные улучшения: проверить читаемость на маленьких viewport.

### `profile_member_card_bg.png`

- Где используется: `UserCard`.
- Назначение: background image для member club card.
- Возможные улучшения: подготовить lighter/darker overlay presets для разных текстовых состояний.

## Недостающие ассеты

- Нет отдельной иконки для `Доступ к спецсобытию`.
- В будущем нужен fourth prize icon, чтобы список привилегий был визуально ровным.

## Общие будущие задачи

- Оптимизировать PNG по весу.
- Проверить assets на реальных mobile devices.
- Подготовить fallback policy для production.
- При необходимости добавить responsive variants.
