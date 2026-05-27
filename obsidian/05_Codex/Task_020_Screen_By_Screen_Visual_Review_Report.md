# Task 020 — Screen By Screen Visual Review Report

## Review Context

- Review type: visual/UI/UX only.
- Code was not changed.
- `npm.cmd run dev` was used for local review.
- `npm.cmd run lint` was not required.
- `npm.cmd run build` was not required.

Local browser note: in `next dev`, the external Telegram script produced a dev overlay because `https://telegram.org/js/telegram-web-app.js` could not load in the local browser session. This did not require code changes and should be rechecked after deploy in Telegram/Vercel.

## Screen-by-screen Review

| Screen | What works | What feels weak | Suggested fix | Priority |
|---|---|---|---|---|
| Главная | Hero is now the strongest entry point. Cream/burgundy palette feels consistent. CTA hierarchy is clear. | Hero still takes a lot of vertical space on 375x812, so the nearest event can sit lower than ideal. Preview cards are useful but visually similar to each other. | Slightly compress hero vertical padding or make the nearest event card more compact. Add small visual differentiation between preview cards without adding more copy. | Medium |
| Главная | Telegram name personalization is useful and feels native. | A long first name can still make the hero title feel heavy, even with wrapping. | Consider a max display length or smaller title size only when a name is present. | Low |
| Афиша | Compact header improved the screen a lot. Filters are close to the title and no longer float under a huge branded block. Featured Velvet Nights card feels premium. | Detail card repeats quite a lot of event information after the cards. It may push useful content too far down. | Make details card more condensed or transform it into a sticky-style selected summary later. Keep date/time/location, reduce description length. | Medium |
| Афиша | Featured card readability is good with burgundy overlay. | Secondary cards are clean but less distinctive; Golden Hour and Afterglow can feel like generic list cards. | Give secondary cards a small consistent editorial accent, e.g. left border/accent strip or stronger thumbnail treatment. | Low |
| Игры | Scratch/Wheel visuals read clearly as promo mechanics. CTA is consistent. No false claim/redeem copy. | Cards are still tall for a mobile viewport; user may need more scroll before seeing both mechanics and demo result. | Reduce visual area a little more or use a 2-step layout: compact cards first, expanded demo below. | Medium |
| Игры | Demo warnings are honest and not too loud. | “Демо” badge appears in several places and can feel repetitive. | Keep badge on card only; inside demo component use state labels like `Закрыто`, `Открыто`, `Готово`. | Low |
| Призы | Icons and card rhythm are much better after asset polish. Short `Демо` badge fits mobile. | Cards still have many small elements: icon, title, badge, description, status row, button. This can feel busy. | Consider removing the separate `Скоро` row and keeping only `Подробнее` plus badge, or move `Скоро` into the badge. | High |
| Призы | Prize names and descriptions feel user-facing. | Fallback icon for special event access is still numeric and less premium than the image icons. | Add a fourth visual asset later or replace numeric fallback with a styled ornamental symbol. | Medium |
| Профиль | Member card is the strongest screen element. Telegram user preview works conceptually without saying “authorized”. Runtime card is clean after debug removal. | Profile screen is long because runtime card, progress, stats, and activity all have similar visual weight. | Reduce runtime card visual weight or make it a compact status strip. Make progress/stats feel like one profile section. | High |
| Профиль | Stats grid is readable. | `Gold Guest` may imply a real status progression even though loyalty is demo. | Consider `До следующего уровня` without named tier, or add a subtle `пример` label near progress. | Medium |
| AppShell / Header | Header is compact and no longer acts as a second hero. Single brand source is clear. | MVP badge is still visible on every screen; useful for demo, but slightly product-internal. | For stakeholder demo keep it; before wider preview consider moving MVP indicator into profile/about/debug only. | Low |
| BottomNav | Labels-only nav is cleaner than symbol + label. Text is readable and no English initials remain. | Without icons, active tab relies mostly on background and text color. It is clean, but a little plain. | Keep labels-only for now. Later add proper custom icons/assets if needed, not text initials. | Low |
| Safe area / viewport | Bottom padding appears intentional and nav does not obviously clip content on reviewed screens. | Need final confirmation inside Telegram WebView because local dev overlay can interfere with browser checks. | After deploy, test on real Telegram mobile viewport and verify last card/CTA on each tab. | High |

## Recommended next visual tasks

1. **Rewards card system polish**  
   Simplify prize cards by reducing the extra status row and making the card feel less like a form/list item.

2. **Profile compact status layout**  
   Convert runtime card into a lighter status strip and visually merge progress/stats into a cleaner member profile section.

3. **Events secondary card refinement**  
   Give Golden Hour / Afterglow cards a stronger but subtle editorial identity so the list feels less generic.

4. **Games compact demo flow**  
   Keep game cards compact and let selected demo take focus below, especially on 375x812.

5. **Real Telegram viewport QA after deploy**  
   Check Vercel build inside Telegram WebView: safe area, BottomNav, last CTA visibility, Telegram user in profile, and absence of debug rows.

## Viewport Notes

Checked / attempted via Playwright:

- `390x844`: main screen navigation and screen review completed.
- `375x812`: viewport resize performed; further clicks were affected by local Next dev overlay.
- `430x932`: should be rechecked after deploy or in a clean production preview.

Recommended for the next manual pass:

- Use Vercel production URL rather than `next dev` to avoid local dev overlay from Telegram script load errors.
- Test inside Telegram through the `web_app` button.

## Final Note

This task intentionally produced a review report only. No application code, runtime parser, backend, auth, CRM, routes, packages, or prize logic were changed.
