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

Результат:

- приложение открылось внутри Telegram Mini App;
- основные вкладки работают;
- ассеты грузятся;
- Vercel production URL подошел для Telegram WebView.

### 3. Telegram environment detection — done

Результат:

- добавлено frontend-only определение browser / Telegram runtime;
- добавлена проверка `window.Telegram.WebApp`;
- добавлен fallback parser для Telegram launch params из `location.hash`;
- Telegram user preview читается из `tgWebAppData.user`, если WebApp API недоступен;
- профиль показывает Telegram user и среду запуска без технического debug UI;
- UI не сообщает, что пользователь авторизован;
- backend, session и validation не добавлялись.

### 4. Telegram launch params fallback — done

Результат:

- подтверждено, что `window.Telegram.WebApp` может быть недоступен;
- подтверждено, что launch params приходят через `location.hash`;
- fallback используется только для runtime preview;
- raw `tgWebAppData`, `hash`, `signature`, `query_id` не выводятся в UI.

### 5. Backend initData validation planning — next

Цель: описать backend endpoint и правила серверной проверки Telegram `initData`.

Ожидаемый результат:

- endpoint для приема raw `initData`;
- проверка подписи через bot token;
- проверка `auth_date`;
- модель безопасного user/session mapping;
- правила, запрещающие выдавать реальные призы без backend validation.

### 6. Backend planning

Цель: описать минимальный backend слой для событий, призов, игр и профиля.

### 7. CRM integration planning

Цель: описать CRM API requirements, ownership данных, ограничения, rate limits и backend-only adapter.

### 8. Prize rules model

Цель: описать правила доступности, лимиты, статусы, срок действия и audit trail для призов.

### 9. Real prize issuing flow

Цель: спроектировать безопасный flow выдачи и погашения призов без доверия frontend.

### 10. Production deployment

Цель: подготовить production hosting, env vars, monitoring, security checks и rollout plan.

## Архив выполненных этапов

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
- Telegram environment detection.
- Telegram launch params fallback.
- MVP UI/UX polish pass with Stitch reference direction.
- Final mobile viewport polish.

## Current Next Focus

После Task 019 текущий visual MVP готов к демонстрации как frontend-only Telegram Mini App. Stitch reference использован только как inspiration для editorial spacing, typography и premium card treatment.

Следующий крупный этап остается прежним:

1. Backend initData validation planning.
2. Безопасный backend endpoint для проверки Telegram `initData`.
3. План подключения реального профиля/CRM только после server-side validation.
4. Модель правил призов без доверия frontend.
