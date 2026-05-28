# Task 026: Adopt New Stitch Guest App Direction Report

## 1. Which Stitch Screens Were Used As Reference

- `burlesque_club_final_2` — reference for Home composition: compact top app header, centered greeting, two clean CTA buttons, nearest event section and strong event card.
- `burlesque_club_island_nav` — reference for BottomNav and Profile: floating island navigation, lavender active state, member dashboard composition, avatar area, stats, progress and compact activity modules.

## 2. What Was Adopted

- Dark premium club app mood.
- Very dark plum / near black background.
- Lavender / soft violet primary accent.
- Compact app-like header.
- Centered Home hero with larger premium typography.
- Strong event pass card composition.
- Floating bottom navigation with icons and Russian labels.
- Profile as member dashboard instead of technical status screen.
- Cleaner compact buttons, chips and card hierarchy.

## 3. What Was Rejected

- Stitch code was not copied.
- No external fonts, CDN icons, Material Symbols, Unsplash or AI portraits were added.
- No white rewards screen direction was used.
- No casino / gambling language or visuals were added.
- No active booking, claim, redeem, payment or real loyalty state was added.

## 4. What Changed In Navigation

- BottomNav now uses inline SVG icons for Главная, Афиша, Игры, Призы and Профиль.
- Active item uses a lavender translucent pill and glow.
- Inactive items use muted gray-lavender text.
- The nav remains a floating dark island with safe-area padding.
- Letter markers were not used.

## 5. What Changed In Buttons / Chips / Cards

- Primary buttons now use lavender / violet fill.
- Secondary buttons use dark glass with subtle violet border.
- Event filters are compact dark chips with lavender active state.
- Cards are differentiated by purpose: hero/access card, event pass, compact list card, privilege card, member card, progress card and activity card.

## 6. What Changed On Home

- Home was rebuilt around a centered greeting.
- CTA block now has two clean actions: `Смотреть афишу` and `Мои привилегии`.
- Nearest event is presented as a large dark club event card.
- Preview cards were kept compact below the main content.

## 7. What Changed On Profile

- Profile now reads as a member dashboard.
- `UserCard` supports Telegram `photo_url` when available and falls back to initials.
- Member card shows name, username/fallback, `Silver`, three demo stats and a short note.
- Visible Telegram runtime/status product block was removed from normal UI.
- Runtime diagnostics remain available only behind `NEXT_PUBLIC_SHOW_TELEGRAM_DEBUG === "true"`.
- Progress and activity cards were kept compact and demo-safe.

## 8. What Changed Across Other Screens

- Афиша now uses stronger event pass cards and lavender chips.
- Игры now use compact dark digital club mechanic cards.
- Призы now use dark compact privilege cards and violet/wine icon containers.
- Scratch Card and Wheel demo components were retuned to lavender/purple club styling.
- Copy was cleaned to avoid false real-auth or real-prize claims.

## 9. What Stayed Frontend-Only

- Backend was not added.
- API routes were not added.
- CRM was not added.
- Auth validation was not added.
- Telegram runtime parser and launch params fallback were not changed beyond reading optional `photo_url`.
- Storage, sessions, cookies and persistent state were not added.
- Real prize logic, booking, payment and loyalty logic were not added.

## 10. Check Results

- `npm.cmd run lint` — passed.
- `npm.cmd run build` — passed.

## Manual Checks

Checked locally at `http://localhost:3000`:

- 390x844
- 375x812
- 430x932

Checked:

- Главная
- Афиша
- Игры
- Призы
- Профиль
- Scratch Card demo
- Wheel Of Prizes demo
- prize detail
- event detail

Result:

- no horizontal scroll on checked mobile widths;
- BottomNav is readable and uses icons;
- debug rows are hidden in normal Profile UI;
- Telegram user display logic remains in place;
- no backend/auth/CRM changes were made.
