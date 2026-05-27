# Screens

## Фактические экраны MVP

### HomeScreen

Назначение: дать гостю быстрый вход в продукт и показать ключевые направления: афиша, привилегии и ближайшее событие.

Что сейчас работает:

- welcome hero card;
- CTA на Афишу;
- CTA на Призы / привилегии;
- карточка ближайшего mock-события;
- decorative hero assets.

Mock-данные:

- текст главного описания;
- список действий;
- ближайшее событие из mock events.

Позже подключается:

- реальные ближайшие события;
- реальные быстрые действия;
- персонализация под Telegram-пользователя.

### EventsScreen

Назначение: показать афишу Burlesque и дать гостю посмотреть детали мероприятия.

Что сейчас работает:

- вкладка Афиша;
- фильтры-пиллы: Все / Сегодня / Скоро;
- featured event card;
- compact event cards;
- detail block выбранного мероприятия;
- event covers для Velvet Nights и Golden Hour.

Mock-данные:

- список мероприятий;
- статусы;
- дата, время, зал, описание, tags;
- CTA без реального перехода/брони.

Позже подключается:

- реальные мероприятия из backend/CRM;
- реальные ссылки на лендинги;
- бронирование;
- актуальные статусы доступности.

### GamesScreen

Назначение: показать промо-механики как часть MVP и дать визуальный demo preview.

Что сейчас работает:

- карточки Scratch Card и Wheel Of Prizes;
- выбор игры;
- Scratch Card demo;
- Wheel Of Prizes demo;
- frontend-only demo state.

Mock-данные:

- названия, описания и статусы игр;
- demo-result для Scratch;
- demo-result для Wheel.

Позже подключается:

- реальные правила доступности;
- backend-результаты;
- лимиты попыток;
- связь с призами и CRM.

### PrizesScreen

Назначение: показать будущие привилегии и призы в формате premium offers.

Что сейчас работает:

- список mock-призов;
- prize icon assets;
- выбор приза;
- detail block выбранной привилегии;
- короткое demo-предупреждение.

Mock-данные:

- названия призов;
- описания;
- статусы;
- notes;
- icon mapping.

Позже подключается:

- реальные призы пользователя;
- правила выдачи;
- claim/redeem flow;
- история использования.

### ProfileScreen

Назначение: показать member preview и будущий личный кабинет гостя.

Что сейчас работает:

- UserCard / member card;
- mock-user данные;
- mock stats;
- текущий demo-state: выбранная игра, выбранный приз, статус demo-сессии;
- короткое предупреждение, что авторизация будет подключена позже.

Mock-данные:

- имя/initials;
- статус гостя;
- визиты, бонусы, события;
- demo activity.

Позже подключается:

- Telegram user из проверенного backend flow;
- реальные бонусы;
- история призов;
- история посещений;
- CRM-профиль.

## Task 019 UI/UX Polish Notes

UI/UX polish pass выполнен для текущего frontend-only MVP. Stitch reference использован как визуальное вдохновение: больше воздуха, editorial-композиция, крупнее типографика, спокойные cream/burgundy cards и более чистая bottom navigation.

Фактическое состояние экранов после polish:

- `HomeScreen`: hero card стал крупнее и спокойнее, CTA оформлены единообразно, нижние карточки работают как preview афиши, механик, привилегий и профиля.
- `EventsScreen`: экран афиши использует более мягкие формулировки про будущую бронь, detail block стал менее техническим.
- `GamesScreen`: Scratch Card и Wheel Of Prizes поданы как demo-механики будущих клубных розыгрышей, без обещания реальных призов.
- `PrizesScreen`: карточки призов выглядят как витрина будущих привилегий, CTA `Подробнее` сохранен, подписи стали менее техническими.
- `ProfileScreen`: runtime block очищен от debug-строк, обычный UI показывает только среду запуска, наличие Telegram user и статус будущей авторизации.

MVP остается frontend-only. Telegram profile сейчас является runtime preview, а не настоящей авторизацией. Контент и бренд Stitch не копировались.

## Task 019.2 Final Mobile Viewport Polish

Финальный mobile polish после удаления повторяющихся headers:

- `AppShell`: верхняя шапка стала ниже, `MVP` badge сделан тише.
- `BottomNav`: убраны верхние символы, оставлены только русские labels для лучшей читаемости на 375–430 px.
- `GamesScreen`: верхние визуальные зоны карточек слегка уплотнены.
- `PrizesScreen`: badge сокращен до `Демо`, подпись статуса сокращена до `Скоро`.
- `HomeScreen`: заголовок поддерживает перенос длинного Telegram имени.

Backend/auth/CRM/prize logic не менялись.

## Task 021 Rewards Card System Polish

Экран `PrizesScreen` упрощен после visual review:

- из reward cards убрана отдельная status row;
- в карточках остались icon, title, short description, compact badge и CTA `Подробнее`;
- badge остается коротким: `Демо`;
- общий disclaimer вынесен вниз экрана одним тихим текстом;
- fallback icon для `Доступ к спецсобытию` заменен с цифры на CSS-only ornamental mark.

Экран остается demo-only showcase будущих привилегий. Claim/redeem, real prize issuing, backend/auth/CRM не добавлялись.

## Task 021 Games Card Compact Polish

Экран `GamesScreen` уплотнен для Telegram mobile viewport:

- visual-зоны Scratch Card и Wheel Of Prizes уменьшены примерно на 20–25%;
- game visuals оставлены видимыми, но не занимают почти весь экран;
- descriptions сокращены до одной короткой фразы;
- vertical padding в карточках и CTA уменьшен;
- добавлен небольшой bottom padding у screen container.

Game result logic, prize logic, storage, backend/auth/CRM не менялись.
