# Task 024: Dark Obsidian Noir Visual Direction Prototype Report

## 1. What Stitch Ideas Were Adopted

- Dark graphite / warm charcoal app background.
- Glassmorphic cards with subtle borders and soft elevation.
- Wine, plum, dusty rose and champagne accents.
- Premium private club member-card feeling for the profile.
- Dark event pass direction for the афиша cards.
- Floating dark bottom navigation with a quiet active state.
- Larger serif-style headings where they help the premium tone.

## 2. What Stitch Parts Were Rejected

- Stitch HTML/CSS code was not copied.
- CDN Tailwind config, Google Fonts links, Material Symbols and external images were not added.
- Unsplash/person avatars were not used.
- White prizes screen direction was not copied.
- Casino/roulette/gambling wording was not used.
- Claim/redeem/booking logic and real reward language were not added.
- Random generated brand copy such as `blur_` was not used.

## 3. Files Changed

- `app/src/app/globals.css`
- `app/src/components/AppShell.tsx`
- `app/src/components/BottomNav.tsx`
- `app/src/components/EventCard.tsx`
- `app/src/components/UserCard.tsx`
- `app/src/components/ui/Button.tsx`
- `app/src/components/ui/Card.tsx`
- `app/src/components/ui/Badge.tsx`
- `app/src/data/profile.ts`
- `app/src/features/screens/HomeScreen.tsx`
- `app/src/features/screens/EventsScreen.tsx`
- `app/src/features/screens/GamesScreen.tsx`
- `app/src/features/screens/PrizesScreen.tsx`
- `app/src/features/screens/ProfileScreen.tsx`
- `app/src/features/games/scratch-card/ScratchCardDemo.tsx`
- `app/src/features/games/wheel-of-prizes/WheelOfPrizesDemo.tsx`
- `obsidian/02_Design/Design_Reference.md`
- `obsidian/02_Design/Screens.md`
- `obsidian/06_Production/Backlog.md`

## 4. How Dark Theme Tokens Were Implemented

Global CSS variables were moved from light cream/burgundy to an Obsidian Noir palette:

- app background: near black graphite;
- surfaces: translucent charcoal/plum glass;
- primary accents: muted wine and dusty rose;
- secondary accents: champagne;
- text: warm off-white with muted rose-gray secondary text;
- borders: subtle champagne/warm outlines;
- shadows: deeper black/wine elevation.

The app background now includes subtle radial ambient glow and a very light texture layer without new libraries.

## 5. What Stayed Frontend-Only

- Telegram runtime detection and launch params fallback were not changed.
- No backend, API routes, CRM, auth validation, sessions, cookies or storage were added.
- Games remain visual demo mechanics.
- Prizes remain demo/future privileges.
- Profile data remains demo/runtime preview and does not claim real authorization.

## 6. Check Results

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.

## 7. Manual / Viewport Checks

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

Checked interactions:

- Scratch Card demo opens and reveals static demo state.
- Wheel Of Prizes demo opens and reaches static demo state.
- Prize detail opens.
- Event cards remain selectable.

Observed:

- no horizontal scroll on checked mobile widths;
- BottomNav remains readable;
- dark shell and cards render correctly;
- debug rows are not visible in profile.

## 8. What To Check Manually In Telegram

- Open the Vercel deployment through the Telegram `web_app` button.
- Verify Telegram user still appears in Profile.
- Verify BottomNav labels remain readable in Telegram WebView.
- Verify event covers, game assets and member card background remain readable in the dark palette.
- Compare the dark Obsidian Noir prototype against the previous light premium direction before choosing the final production style.
