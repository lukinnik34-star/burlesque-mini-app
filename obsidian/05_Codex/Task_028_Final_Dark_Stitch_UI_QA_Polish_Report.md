# Task 028: Final Dark Stitch UI QA Polish Report

## Bottom Safe Padding

- Increased global AppShell bottom padding from `safe-area + 142px` to `safe-area + 178px`.
- Added explicit bottom padding to internal screens:
  - `EventsScreen`
  - `GamesScreen`
  - `PrizesScreen`
  - `ProfileScreen`
  - `HomeScreen`
- Verified that the last visible content block stays above the fixed BottomNav on checked mobile viewports.

## Home Changes

- Reduced Home screen vertical rhythm from `space-y-5` to `space-y-4`.
- Reduced hero vertical padding.
- Slightly reduced headline size while keeping the premium greeting.
- Reduced spacing between label, title, intro text and CTA buttons.
- Reduced featured event card padding and internal vertical gaps.

## Games / Rewards / Profile Changes

- `GamesScreen`: reduced card min-height and internal padding so the second game card has more room above BottomNav.
- `PrizesScreen`: made `Подробнее` CTA more compact with a smaller pill height.
- `ProfileScreen`: added bottom padding so stats/activity do not sit under BottomNav.
- `UserCard`: fallback avatar was darkened to a violet/plum/lavender gradient with readable lavender initials.

## Copy Check

Checked source copy for forbidden wording:

- no `авторизован`;
- no `Telegram привязан`;
- no `аккаунт синхронизирован`;
- no `получить`;
- no `забрать`;
- no `выиграть`;
- no `активировать`;
- no `забронировать`.

## Viewports Checked

Checked locally at `http://localhost:3000`:

- 390x844
- 375x812
- 430x932

Checked tabs:

- Главная
- Афиша
- Игры
- Призы
- Профиль

Observed:

- no horizontal scroll;
- BottomNav does not cover the last checked content block;
- Home is slightly more compact;
- Games do not visually run into BottomNav;
- dark Stitch direction is preserved.

## Lint / Build

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.

## What To Check In Telegram

- Verify the last cards on Афиша / Игры / Призы / Профиль remain readable above BottomNav.
- Verify Home feels less like a tall landing hero.
- Verify fallback avatar is no longer too bright on real Telegram device.
- Verify no debug rows are visible in normal UI.
