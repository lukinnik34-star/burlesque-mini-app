# Database

## Статус

В MVP база данных не нужна. Используем моковые данные. Документ фиксирует будущую модель, чтобы не проектировать интерфейс в отрыве от данных.

## Будущая база

- PostgreSQL.
- Prisma как ORM.

## Возможные сущности

### User

- id.
- telegramId.
- firstName.
- lastName.
- username.
- avatarUrl.
- points.
- createdAt.
- updatedAt.

### Event

- id.
- title.
- description.
- imageUrl.
- startsAt.
- clubId.
- landingUrl.
- bookingUrl.
- status.

### Club

- id.
- name.
- address.
- phone.
- mapUrl.
- routeUrl.
- taxiUrl.
- city.

### Game

- id.
- type.
- title.
- status.
- startsAt.
- endsAt.

### Prize

- id.
- title.
- description.
- promoCode.
- type.
- expiresAt.

### UserPrize

- id.
- userId.
- prizeId.
- gameId.
- status.
- issuedAt.
- redeemedAt.

### GameAttempt

- id.
- userId.
- gameId.
- result.
- createdAt.

## Правило

Выдача призов должна быть серверной операцией. Клиент может показывать анимацию и результат, но не должен самостоятельно решать, какой приз выдан.

