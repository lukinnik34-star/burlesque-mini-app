# Task 027: Stitch Dark Interface Polish Report

## 1. What Was Preserved From Task 026

- Dark Stitch-inspired club app direction.
- Lavender / purple accent system.
- Centered Home hero.
- BottomNav with icons.
- Event pass card direction.
- Profile member dashboard.
- Dark glass cards.
- Hidden Telegram technical diagnostics in normal UI.

## 2. Visual Issues Fixed

- Home hero was reduced in vertical height.
- Old light/cream hero asset was removed from the hero and replaced with CSS-only lavender/wine ambient glow.
- Featured event cards were slightly compressed.
- Games visual areas were rebalanced so assets sit centered with a subtle glow.
- Reward cards were made slightly more compact.
- Fallback profile avatar was moved into a violet/plum/lavender gradient.

## 3. Home Changes

- Reduced hero vertical padding.
- Reduced spacing between label, title, text and CTA buttons.
- Kept large premium greeting and personalization.
- Replaced the random light abstract asset with CSS-only dark lavender ambient layers.
- Reduced featured event card padding and spacing so the nearest event section appears earlier on mobile.

## 4. Games / Rewards / Profile Changes

- `GamesScreen`: visual zones are narrower, assets are centered, cards are slightly lower, CTA buttons are more compact.
- `PrizesScreen`: reward cards have smaller padding, smaller icon blocks and more compact `Подробнее` pills.
- `UserCard`: fallback avatar now uses dark violet / lavender / plum palette; Telegram `photo_url` still renders when available.
- `ProfileScreen`: visible activity defaults stay `Не выбрана` when no demo state is selected.

## 5. Microcopy Changes

- `Member preview` replaced with `Профиль гостя`.
- `special menu` replaced with `специальное меню`.
- `Show` / `Dinner` tags replaced with `Шоу` / `Ужин`.
- `Sold out` status replaced with `Мест нет`.
- Browser fallback text in the member card changed to `Демо-просмотр`.
- No forbidden real-auth, real-prize, booking, claim or redeem wording was added.

## 6. Check Results

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.

## 7. Manual Viewport Check

Checked locally at `http://localhost:3000`:

- 390x844
- 375x812
- 430x932

Checked screens:

- Главная
- Афиша
- Игры
- Призы
- Профиль

Observed:

- no horizontal scroll;
- BottomNav remains readable;
- Home is more compact;
- event section appears earlier;
- Profile fallback avatar matches the lavender/plum palette;
- debug rows are not visible in normal UI.

## 8. What To Check In Telegram

- Open Mini App through the Telegram `web_app` button.
- Verify Telegram user name and avatar/fallback still display correctly.
- Verify BottomNav does not cover important CTA buttons.
- Verify Home hero and featured event card feel compact enough on real device.
- Verify no Telegram technical/status block is visible unless debug env is enabled.
