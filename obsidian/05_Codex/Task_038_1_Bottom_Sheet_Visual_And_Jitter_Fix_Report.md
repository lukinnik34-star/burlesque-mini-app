# Task 038.1: Bottom Sheet Visual And Jitter Fix Report

## 1. Что было плохо во внешнем виде sheet

- Bottom sheet выглядел как отдельная большая страница.
- Внутри было слишком много vertical spacing.
- Games demo создавал ощущение карточки внутри карточки внутри карточки.
- Result blocks были крупнее, чем нужно для demo preview.
- Backdrop blur мог давать лишний repaint / jank.

## 2. Как упрощена структура popup

Обновлен общий компонент:

- `app/src/components/BottomSheet.tsx`

Изменения:

- уменьшен top / bottom padding;
- уменьшен drag handle;
- title сделан компактнее;
- max-height снижен до `78vh`;
- footer gap уменьшен;
- shadow стал легче;
- backdrop стал простым `bg-black/72` без `backdrop-blur`;
- sheet animation упрощена до `opacity + translateY(12px -> 0)`.

Events sheet:

- info grid стал компактнее;
- demo note стала легче;
- button `Понятно` остался без real booking action.

Prizes sheet:

- detail content стал компактнее;
- nested note card заменена на тихий текстовый note;
- claim / redeem copy не добавлялся.

## 3. Что изменено в Scratch

- Embedded mode теперь не использует внешний `Card`.
- В sheet остался один основной visual block.
- Убрана повторная нижняя фраза про demo, если она уже есть сверху в sheet.
- Visual block уменьшен по высоте.
- Result block стал compact info block, без дополнительной тяжелой карточки.
- Wipe animation сохранена.

## 4. Что изменено в Wheel

- Embedded mode теперь не использует внешний `Card`.
- Wheel object увеличен до более самостоятельного premium visual.
- Убран эффект маленькой картинки в большом пустом круге.
- Добавлены CSS-only ring / radial segment layers вокруг wheel.
- Pointer оставлен, но сделан компактнее.
- Result block стал compact и нейтральным.
- Casino / roulette / win copy не добавлялись.

## 5. Что сделано против jitter

- Scroll lock теперь сохраняет и восстанавливает:
  - `body.style.overflow`;
  - `body.style.paddingRight`.
- При открытии sheet считается scrollbar width:
  - `window.innerWidth - document.documentElement.clientWidth`;
  - если ширина больше 0, добавляется body padding compensation.
- Backdrop blur удален, чтобы снизить repaint / jank.
- Sheet animation упрощена:
  - duration `230ms`;
  - `translateY(12px -> 0)`;
  - без scale;
  - без тяжелого blur.

## 6. Результат проверки

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.
- `npm.cmd run dev` — started and checked in browser preview.

Проверено на `http://localhost:3000`:

- Events `Подробнее` opens compact bottom sheet.
- Prizes `Подробнее` opens compact bottom sheet.
- Scratch `Открыть демо` opens compact sheet.
- Scratch `Запустить демо` reveals neutral result.
- Wheel `Открыть демо` opens compact sheet.
- Wheel `Запустить демо` shows neutral result.
- Close by `×` works.
- Close by `Понятно` works where available.
- Scroll lock works.
- BottomNav stays below sheet.
- No horizontal scroll.

Viewport checks:

- `390x844`
- `375x812`
- `430x932`

Note:

- `127.0.0.1` in local Next dev showed blocked HMR / origin warnings. Manual interaction checks were performed on `localhost:3000`, which is the expected local dev URL.

## 7. Что не менялось

- Global dark Stitch visual direction.
- Home layout.
- BottomNav.
- Telegram parser.
- Backend / auth / CRM.
- Storage / API / routes.
- Real prize logic.
