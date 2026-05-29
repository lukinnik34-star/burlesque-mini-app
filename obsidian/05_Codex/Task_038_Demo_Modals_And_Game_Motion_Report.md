# Task 038: Demo Modals And Game Motion Report

## 1. Что изменилось в Призах

- Кнопка `Подробнее` теперь открывает bottom sheet.
- Старый detail block внизу страницы убран из обычного потока.
- В bottom sheet показываются:
  - название привилегии;
  - описание;
  - badge `Демо`;
  - пояснение, что это пример будущего сценария;
  - статус: реальная выдача будет подключена позже;
  - кнопка `Понятно`.
- Claim / redeem / QR / barcode / activation copy не добавлялись.

## 2. Что изменилось в Играх

- Кнопка `Открыть демо` у Scratch Card и Wheel Of Prizes теперь открывает bottom sheet.
- Большие demo-блоки больше не появляются как отдельные sections внизу экрана.
- Выбранная игра по-прежнему обновляет frontend session state через `onPreviewGame`, поэтому профиль может показывать текущую demo-активность в рамках сессии.
- Тексты остаются demo-safe: результат не сохраняется, призы пока не выдаются.

## 3. Общий BottomSheet component

Создан общий компонент:

- `app/src/components/BottomSheet.tsx`

Компонент использует текущий исправленный pattern:

- portal в `document.body`;
- `fixed inset-0 z-50`;
- backdrop;
- panel pinned to bottom;
- body scroll lock with cleanup;
- close by `×`;
- close by backdrop;
- close by `Escape`;
- optional footer/action.

Events screen также переведен на общий `BottomSheet`, чтобы поведение bottom sheets было единым.

## 4. Scratch / Wheel demo animations

Scratch Card:

- Добавлен controlled state `closed -> revealing -> revealed`.
- При запуске demo закрытая card уходит через premium wipe / light sweep.
- После reveal показывается нейтральный блок `Пример результата`.
- Результат не сохраняется.

Wheel Of Prizes:

- Добавлен controlled spin preview.
- Wheel вращается по фиксированной CSS-анимации и останавливается в фиксированной demo-position.
- После spin показывается нейтральный блок `Пример результата`.
- Random, probability и real prize result не добавлялись.

Добавленные CSS:

- `scratch-demo-cover`
- `scratch-demo-wipe`
- `scratch-demo-light-sweep`
- `wheel-demo-spin`

## 5. Что осталось demo-only

- Scratch Card.
- Wheel Of Prizes.
- Reward details.
- Profile activity.
- Все результаты и выбранные элементы живут только в текущем frontend state.

## 6. Что не реализовывалось

- Backend.
- API routes.
- Auth validation.
- CRM.
- Database.
- localStorage / cookies / session persistence.
- Real prize issuing.
- Claim / redeem.
- Payments.
- Random / probabilities.
- Real game mechanics.
- New dependencies.

## 7. Результат проверки

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.
- `npm.cmd run dev` — started and checked in browser preview.

Проверено:

- Призы: `Подробнее` открывает bottom sheet.
- Призы: close by `Понятно` works.
- Игры: Scratch `Открыть демо` открывает bottom sheet.
- Игры: Scratch `Запустить демо` показывает reveal/result.
- Игры: Wheel `Открыть демо` открывает bottom sheet.
- Игры: Wheel `Запустить демо` показывает neutral result.
- Escape closes bottom sheet.
- Body scroll lock works while sheet is open.
- BottomNav remains under sheet.
- No horizontal scroll.

Viewport checks:

- `390x844`
- `375x812`
- `430x932`

## 8. Что проверить после deploy в Telegram

- Bottom sheets открываются корректно в Telegram WebView.
- Scratch wipe не лагает.
- Wheel spin не выглядит как casino/roulette.
- Backdrop и close actions работают.
- BottomNav не перекрывает sheet.
- Нет copy, обещающей реальные призы или выдачу.
