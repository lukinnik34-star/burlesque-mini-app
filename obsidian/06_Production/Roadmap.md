# Roadmap

## Текущий порядок этапов

### 1. Visual MVP freeze — done

Результат:

- light premium UI зафиксирован;
- основные экраны готовы;
- mock data layer работает;
- Burlesque visual assets подключены;
- lint и build проходят;
- production URL опубликован на Vercel.

### 2. Telegram Mini App runtime check — done

Результат проверки:

- приложение открылось внутри Telegram Mini App;
- главная отображается корректно;
- BottomNav виден;
- вкладки кликаются;
- Афиша, Игры, Призы и Профиль открываются;
- Scratch Card demo и Wheel Of Prizes demo кликаются;
- ассеты грузятся;
- Vercel production URL подошел для Telegram WebView.

Использованный URL:

- `https://burlesque-mini-app.vercel.app/`

Telegram test bot:

- `n8ntest`

### 3. Telegram environment detection — next

Цель: аккуратно определить, запущено ли приложение внутри Telegram или в browser preview, без вывода лишнего debug UI гостю.

Ожидаемый результат:

- безопасные client-side helpers для чтения Telegram WebApp окружения;
- понятное различение Telegram runtime и browser preview;
- без реальной авторизации;
- без доверия frontend-данным.

### 4. Safe Telegram initData reading without real auth

Цель: подготовить безопасное чтение `initData` на клиенте без признания пользователя авторизованным и без доверия frontend-данным.

Важно: полноценная валидация `initData` должна выполняться только на backend.

### 5. Backend planning

Цель: описать минимальный backend слой для:

- Telegram `initData` validation;
- user session mapping;
- events API;
- prizes API;
- game attempt API.

### 6. CRM integration planning

Цель: описать CRM API requirements, ownership данных, ограничения, rate limits и backend-only adapter.

### 7. Prize rules model

Цель: описать правила доступности, лимиты, статусы, срок действия и audit trail для призов.

### 8. Real prize issuing flow

Цель: спроектировать безопасный flow выдачи и погашения призов без доверия frontend.

### 9. Admin/data management

Цель: определить, нужна ли простая админка, CMS, импорт из CRM или ручное управление данными.

### 10. Production deployment

Цель: подготовить production hosting, env vars, monitoring, security checks и rollout plan.

## Архив уже выполненных этапов

- Project documentation bootstrap.
- Next.js + TypeScript + Tailwind bootstrap.
- Telegram Mini App shell.
- UI components and screen skeletons.
- Mock data layer.
- Frontend-only demo state.
- Scratch Card demo UI.
- Wheel Of Prizes demo UI.
- UI QA and mobile polish.
- Light premium redesign.
- Events MVP screens.
- Light UI acceptance fixes.
- Burlesque visual assets integration.
- Asset visual polish.
- MVP visual freeze and project state update.
- Telegram Mini App runtime check.
