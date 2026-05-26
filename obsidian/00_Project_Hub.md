# Burlesque Telegram Mini App

## Назначение проекта

Telegram Mini App для Burlesque — рабочее маркетинговое приложение внутри Telegram. Оно должно стать единой точкой входа для гостей: афиша, мероприятия, промо-игры, призы, профиль, адреса клубов и быстрые действия.

Главный принцип: сначала компактный frontend-only MVP, затем проверка внутри Telegram и только после этого подключение backend, CRM, авторизации и реальных сценариев выдачи призов.

## Current MVP State

- Проект находится на этапе `frontend-only visual MVP`.
- Основные экраны готовы: Главная, Афиша, Игры, Призы, Профиль.
- Visual direction зафиксирован как `light premium Burlesque`: теплый светлый фон, бордовый primary accent, cream/champagne cards, мягкие rounded cards и минимальная нижняя навигация.
- Burlesque visual assets подключены через `app/public/assets/burlesque` и manifest `app/src/data/assets.ts`.
- Данные мероприятий, игр, призов и профиля остаются mock/demo.
- Backend, CRM, база данных, реальная Telegram-авторизация и выдача призов еще не реализованы.
- Telegram runtime еще не проверялся внутри реального Telegram Mini App окружения.

## Карта документации

### Product

- [[01_Product/Vision|Vision]] — продуктовая идея, аудитория, ценность.
- [[01_Product/MVP|MVP]] — текущий scope MVP и ограничения.
- [[01_Product/User_Flows|User Flows]] — основные пользовательские сценарии.
- [[01_Product/Feature_List|Feature List]] — список функций по приоритетам.

### Design

- [[02_Design/Design_Reference|Design Reference]] — зафиксированное визуальное направление.
- [[02_Design/UI_Components|UI Components]] — базовые UI-компоненты интерфейса.
- [[02_Design/Screens|Screens]] — фактические экраны MVP.
- [[02_Design/Asset_Plan|Asset Plan]] — подключенные визуальные ассеты и будущие улучшения.

### Tech

- [[03_Tech/Tech_Stack|Tech Stack]] — выбранные технологии.
- [[03_Tech/Architecture|Architecture]] — структура приложения.
- [[03_Tech/Database|Database]] — будущая модель данных.
- [[03_Tech/Telegram_Auth|Telegram Auth]] — авторизация и проверка initData.
- [[03_Tech/CRM_Integration|CRM Integration]] — будущая интеграция с CRM.
- [[03_Tech/Security|Security]] — базовые правила безопасности.

### Games

- [[04_Games/Games_Overview|Games Overview]] — роль игр в продукте.
- [[04_Games/Scratch_Card|Scratch Card]] — demo UI первой промо-механики.
- [[04_Games/Wheel_Of_Prizes|Wheel Of Prizes]] — demo UI колеса призов.
- [[04_Games/Prize_Rules|Prize Rules]] — будущие правила призов и промокодов.

### Codex

- [[05_Codex/CODEX_MASTER_PROMPT|CODEX MASTER PROMPT]] — постоянная инструкция для Codex.
- [[05_Codex/Task_Template|Task Template]] — шаблон задач.
- [[05_Codex/Task_013_Connect_Burlesque_Visual_Assets_Report|Task 013 Report]] — отчет о подключении ассетов.
- [[05_Codex/Task_014_Asset_Visual_Polish_Report|Task 014 Report]] — отчет о визуальной полировке ассетов.

### Production

- [[06_Production/Roadmap|Roadmap]] — следующие этапы разработки.
- [[06_Production/Decisions_Log|Decisions Log]] — журнал решений.
- [[06_Production/Backlog|Backlog]] — будущие задачи.

## MVP в одну строку

Mobile-first Telegram Mini App с главной, афишей, карточками мероприятий, demo-промо-играми, mock-призами, mock-профилем и light premium визуальным стилем Burlesque.

## Не делаем в текущем MVP

- Реальную CRM-интеграцию.
- Реальную Telegram-авторизацию.
- Backend и базу данных.
- Оплату.
- Админку.
- Реальную выдачу призов.
- Реальное бронирование.
- Аналитику.
- Продакшен-деплой.
