# Task 022.1 — Rewards Final Compact Pass Report

## 1. Что было слишком высоким

После предыдущего упрощения reward cards стали чище, но оставалась лишняя вертикаль:

- CTA `Подробнее` выглядел чуть крупнее, чем нужно для showcase card;
- расстояние между description и CTA создавало пустоту;
- карточки занимали немного больше высоты, чем нужно для Telegram viewport.

## 2. Что уменьшено

В `app/src/features/screens/PrizesScreen.tsx`:

- карточка изменена с `py-4` на `py-3.5`;
- общий gap между cards уменьшен с `gap-3` до `gap-2.5`;
- description spacing уменьшен с `mt-2` до `mt-1.5`;
- description line-height уменьшен с `leading-6` до `leading-5`;
- CTA `Подробнее` уменьшен:
  - `mt-4` → `mt-3`;
  - `min-h-9` → `min-h-8`;
  - `px-4` → `px-3.5`.

## 3. Microcopy

Intro под заголовком заменен на:

`Будущие комплименты и предложения для гостей Burlesque.`

Запрещенные claim/redeem формулировки не добавлялись.

## 4. Какие viewport проверены

Через Playwright/browser responsive проверены:

- `390x844`;
- `375x812`;
- `430x932`.

Проверялось:

- переход на вкладку `Призы`;
- reward cards;
- CTA `Подробнее`;
- detail block выбранной привилегии.

## 5. Результат npm.cmd run lint

`npm.cmd run lint` — успешно, ошибок нет.

## 6. Результат npm.cmd run build

`npm.cmd run build` — успешно, production build собран.

## 7. Что проверить после deploy в Telegram

- На первом экране видно больше reward cards.
- CTA `Подробнее` не доминирует над содержимым.
- Последняя карточка и detail block не перекрываются BottomNav.
- Badge `Демо` не переносится.
- Экран не обещает получение, активацию или выдачу реального приза.

## 8. Что не менялось

- Backend.
- Auth.
- CRM.
- Real prize claim.
- Redeem.
- Storage.
- API.
- New assets.
- New dependencies.
