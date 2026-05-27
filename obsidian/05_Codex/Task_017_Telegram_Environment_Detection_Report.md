# Task 017 — Telegram Environment Detection Report

## 1. Что добавлено

- Минимальные типы Telegram WebApp runtime.
- Safe helper `getTelegramRuntimeInfo()`.
- Client hook `useTelegramRuntime()`.
- Вызов `Telegram.WebApp.ready()`, если объект доступен.
- Вызов `Telegram.WebApp.expand()`, если объект доступен.
- Аккуратное отображение Telegram/browser status в профиле.
- Отображение имени Telegram user в demo UI, если Telegram user доступен.
- Обновлен HomeScreen: если Telegram user найден, приветствие может использовать first name.

## 2. Какие файлы изменены

- `app/src/types/telegram.ts`
- `app/src/lib/telegram.ts`
- `app/src/features/telegram/useTelegramRuntime.ts`
- `app/src/components/AppShell.tsx`
- `app/src/components/UserCard.tsx`
- `app/src/features/screens/ProfileScreen.tsx`
- `app/src/features/screens/HomeScreen.tsx`
- `obsidian/03_Tech/Telegram_Auth.md`
- `obsidian/06_Production/Roadmap.md`
- `obsidian/06_Production/Backlog.md`
- `obsidian/05_Codex/Task_017_Telegram_Environment_Detection_Report.md`

## 3. Как определяется browser / Telegram

`getTelegramRuntimeInfo()` работает так:

- если `window` недоступен — статус `browser`;
- если `window.Telegram?.WebApp` недоступен — статус `browser`;
- если `WebApp` есть, но `initData` пустой — статус `telegram_without_init_data`;
- если `WebApp` есть и `initData` непустой — статус `telegram_with_init_data`.

Дополнительно читаются:

- `platform`;
- `version`;
- `colorScheme`;
- `initDataUnsafe.user`, если доступен.

Полный `initData`, `hash`, `query_id` и технический JSON в UI не выводятся.

## 4. Что показывается в UI

- В профиле отображается компактная карточка runtime status:
  - среда: `Telegram Mini App`, `Telegram без initData` или `Browser preview`;
  - Telegram user: `найден` / `не найден`;
  - авторизация: `будет подключена позже`.
- В UserCard:
  - если Telegram user доступен, показывается display name;
  - если Telegram user недоступен, показывается demo/browser preview состояние;
  - UI не говорит, что пользователь авторизован.
- На главной:
  - если доступен first name из Telegram user, приветствие может стать персональным.

## 5. Что сознательно не реализовано

- Backend.
- API routes.
- Database.
- CRM.
- Настоящая авторизация.
- Hash validation.
- Session.
- Cookies.
- `localStorage`.
- Выдача призов.
- Claim/redeem.
- Реальные баллы.
- Новые routes.
- Внешние библиотеки.
- Передача `initData` на backend.

## 6. Результат npm.cmd run lint

Успешно, ошибок нет.

## 7. Результат npm.cmd run build

Успешно, production build собран.

## 8. Что нужно проверить вручную

В браузере:

- открыть `http://localhost:3000`;
- проверить, что отображается browser preview / demo state;
- открыть вкладку Профиль;
- убедиться, что приложение не падает и не показывает технический JSON.

В Telegram после deploy:

- открыть production URL через тестового бота `n8ntest`;
- проверить, что профиль показывает Telegram runtime status;
- если Telegram user доступен, проверить отображение имени;
- убедиться, что UI не пишет `пользователь авторизован`;
- проверить, что вкладки продолжают работать.

## 9. Что проверено локально

- `npm.cmd run dev` запущен локально.
- `http://localhost:3000` открыт в browser preview.
- Вкладка Профиль открывается.
- В браузере отображается `Browser preview`.
- Telegram user отображается как `не найден`.
- Авторизация отображается как `будет подключена позже`.
- Полный `initData`, `hash`, `query_id` и технический JSON в пользовательском UI не показываются.
- Горизонтального скролла в viewport `390x844` нет.

## 10. Следующий этап

Следующий этап: backend initData validation planning.
