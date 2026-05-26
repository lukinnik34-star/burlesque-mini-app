# MVP

## Цель MVP

Собрать первую рабочую визуальную версию Telegram Mini App, которая показывает ценность продукта без сложной инфраструктуры. MVP нужен, чтобы проверить композицию, навигацию, экраны, визуальный стиль, promo mechanics и общий guest experience перед подключением Telegram runtime, backend и CRM.

Текущий MVP является `frontend-only visual MVP`: все данные локальные и демонстрационные.

## В MVP уже есть

- Главная.
- Афиша.
- Карточки мероприятий.
- Detail block мероприятия.
- Раздел Игры.
- Scratch Card demo.
- Wheel Of Prizes demo.
- Раздел Призы.
- Mock profile.
- BottomNav с вкладками: Главная, Афиша, Игры, Призы, Профиль.
- Frontend-only demo state.
- Mock data layer.
- Light premium Burlesque visual style.
- Подключенные visual assets из `app/public/assets/burlesque`.

## В MVP пока нет

- Реальной авторизации Telegram.
- Backend.
- CRM-интеграции.
- Базы данных.
- Реальной выдачи призов.
- Реального бронирования.
- Оплаты.
- Аналитики.
- Админки.
- Production deployment.
- Проверки приложения внутри Telegram runtime.

## Границы текущего MVP

MVP должен оставаться простым и проверяемым:

- данные берутся из локальных mock-файлов;
- demo-игры не используют random, вероятности и настоящие результаты;
- призы не выдаются и не активируются;
- пользователь не считается авторизованным;
- Telegram `initData` не валидируется на frontend;
- любые будущие реальные интеграции должны идти через backend.

## Критерии готовности visual MVP

- Приложение выглядит как mobile-first Telegram Mini App, а не как обычный сайт.
- Основные вкладки открываются без роутинга и сложного state manager.
- Афиша показывает mock-события и detail block.
- Игры показывают Scratch Card demo и Wheel Of Prizes demo как визуальные прототипы.
- Призы отображаются как premium privileges, но без claim/redeem.
- Профиль выглядит как member preview, но явно остается demo.
- Visual direction зафиксирован как light premium Burlesque.
- Lint и production build проходят успешно.

## Следующий фокус после visual freeze

Следующий этап — проверить приложение внутри Telegram Mini App окружения, аккуратно зафиксировать Telegram runtime behavior и подготовить безопасный план работы с `initData`.
