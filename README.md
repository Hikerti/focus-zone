# 🌟 Focus Zone

**Focus Zone** — это веб-приложение, предлагающее создание уникальных маршрутов с элементами геймификации на основе пользовательских настроек.  
Сайт помогает интересно проводить время, открывая новые места родного города или исследуя другой населённый пункт.  
Пользователи могут получать **бонусы и купоны на скидку** от заведений-партнёров.

---

## 🚀 Технологии

### Frontend
- **React** + **TypeScript**
- **Tailwind CSS 4.0**

### Backend
- **Node.js** + **NestJS**
- **PostgreSQL** / **Redis**
- **Аутентификация:** JWT / сессии

### Контейнеризация
- **Docker**

---

## ⚙️ Установка и запуск проекта

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/Hikerti/focus-zone
   ```

2. **Установите зависимости:**
   ```bash
   cd focuszone
   npm install

   cd ../server
   npm install
   ```

3. **Создайте `.env` файл и заполните переменные окружения (пример ниже).**

4. **Запустите проект:**
    # Запуск docker
    docker compose up --build
   ```bash
   # Запуск фронтенда
   cd focuszone
   npm run dev

   # Запуск бэкенда
   # Запустить приложение Redis 
   # Запустить PostrgeSQL и заполнить базу данных
   
   cd ../server
   npm run start:dev
   ```

---

## 📄 Пример `.env` файла

```env
SERVER_PORT = 4000

POSTGRES_USER = "postgres"
POSTGRES_PASSWORD = "Roman13_D14AR"
POSTGRES_HOST = "localhost"
POSTGRES_PORT = 5432
POSTGRES_DB_NAME = cafe_db

USER_HOST = "localhost"
USER_PORT = 5173
USER_URL = "http://${USER_HOST}:${USER_PORT}"

COOKIE_SECRET = 'secret'
SESSION_SECRET = 'secret'
SESSION_NAME = "session"
SESSION_HTTP_ONLY = true
SESSION_SECURE = false

REDIS_HOST = "localhost"
REDIS_PORT = 6379

DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB_NAME}"
```

---

## 📁 Структура проекта

```
/focuszone                                      # Весь проект на фронтенде
/focuszone/src/components                       # Компоненты Shadcn UI
/focuszone/src/components-primary               # Кастомные компоненты
/focuszone/src/components-primary/entites       # Составные элементы 
/focuszone/src/components-primary/shared        # Базовые компоненты сайта
/focuszone/src/components-primary/widgets       # Обобщение нескольких entites в один компонент
/focuszone/src/helpers                          # Различные функции поддержки
/focuszone/src/lib                              # Конфигурация для Shadcn UI
/focuszone/src/page                             # Папка со всеми страницами
/focuszone/src/styles                           # Папка со стилями
/focuszone/App.tsx                              # Роуты для всего приложения и корневой файл
/focuszone/main.tsx                             # Главный файл для запуска

/server                                         # Код сервера на NestJS
/server/src                                     # Роутинг API
/server/prisma                                  # Папка с конфигурацией prisma
/server/prisma/schema                           # Модели базы данных
/.env                                           # Файл конфигурации окружения
```

## Шаблон данных для запросов создания элементов

```
Создание карточки места
{
    "title": "Название",
    "description": "Описание",
    "address": "Адрес",
    "imageUrl": "url",
    "locationLat": "54.34535",
    "locationLng": "34.3243432",
    "rating": [3, 1, 5, 5, 5]
}

Регистрация пользователя
{
    "email": "email",
    "password": "12345678",
    "name": "name",
    "surname": "surname",
    "login": "login",
    "phone": "+79999999999",
    "adress": "адрес",
    "description": "Я разрабочик этого приложения"
}

Создание сообщения
{
    "userId": "1147afd6-f185-4cde-b400-275480502a1d",
    "cafeId": 1,
    "content": "Описание"
}

Создание карточки со скидкой
{
    "userId": "1147afd6-f185-4cde-b400-275480502a1d",
    "cafeId": 1,
    "url": "url",
    "logo": "url_logo",
    "title": "Скидка на 10%",
    "description": "Лучшая курица в Rostics"
}

Создание достижения
{
    "userId": "1147afd6-f185-4cde-b400-275480502a1d",
    "cafeId": 1,
    "url": "url",
    "title": "Пройден маршрут длинной 5 км",
    "description": "Вы прошли путь длинной 5 км. Продолжайте в том же духе"
}
```

---

## 📡 API Роуты

| Метод  | URL                                                             | Описание                                        |
|--------|-----------------------------------------------------------------|-------------------------------------------------|
| GET    | `/places/get`                                                   | Получить список кофе                            |
| POST   | `/places/create`                                                | Создать кофе                                    | 
| DELETE | `/places/delete`                                                | Удалить кофе                                    |
| PUT    | `/places/update`                                                | Изменить элемент контента                       | 
| GET    | `/places/places_filter/:filter/:page/:limit`                          | Фильтрация кофе по фильтрам на сайте            |
| GET    | `/places/get_by_id/:id`                                         | Фильрация кофе по id                            | 
| GET    | `/places/places_pagination/:page/:limit`                        | Пагинации на странице                           |
| GET    | `/places/places_length`                                         | Получение длинны списка кафе                    | 
| GET    | `/user/get_users`                                               | Получение пользователя                          |
| GET    | `/user/get_users/:id`                                           | Получение пользователя по id                    | 
| GET    | `/user/get_user/:email`                                         | Получение пользователя по email                 |
| POST   | `/user/create`                                                  | Создать пользователя                            | 
| POST   | `/auth/register`                                                | Регистрация пользователя                        |
| POST   | `/auth/login`                                                   | Аунтетификация пользователя                     | 
| POST   | `/auth/refrech`                                                 | Обновление токенов на клиенте                   |
| POST   | `/auth/me`                                                      | Получение данных о пользователе после входа     |
| POST   | `/auth/logout`                                                  | Выход пользователя из профиля                   |
| GET    | `/message/get_user_messages:userId`                             | Получить списка комментариев по id пользователя |
| GET    | `/message/get_cafe_messages/:cafeId`                            | Получить списка комментариев по id кафе         | 
| GET    | `/message/get_id_messages/:id`                                  | Получить списка комментариев по id отзыва       | 
| POST   | `/message/create_messages`                                      | Создать отзыва                                  | 
| PUT    | `/message/update_messages/:id`                                  | Обновление отзыва                               | 
| DELETE | `/message/delete_messages/:id`                                  | Удаление отзыва                                 |
| GET    | `/discounts/get_discount`                                       | Получить списка скидок                          |
| GET    | `/discounts/get_discount_cafe_id/:cafe_id`                      | Получить списка скидок по id кафе               | 
| GET    | `/discounts/get_discount_user_id/:user_id`                      | Получить списка скидок по userId                | 
| POST   | `/discounts/create_discount`                                    | Создать скидку                                  | 
| PUT    | `/discount/update_discount/:discount_id`                        | Обновление скидок                               | 
| DELETE | `/descoun/delete_discount/:discount_id`                         | Удаление скидки                                 |
| GET    | `/achievement/get_discount`                                     | Получить списка достижений                      |
| GET    | `/achievement/get_achievement_cafe_id/:cafe_id`                 | Получить списка достижений по id кафе           | 
| GET    | `/achievement/get_achievement_user_id/:user_id`                 | Получить списка достижений по userId            | 
| POST   | `/achievement/create_achievement`                               | Создать достижение                              | 
| PUT    | `/achievement/update_achievement/:discount_id`                  | Обновление достижения                           | 
| DELETE | `/achievement/delete_achievement/:achievement_id`               | Удаление достижения                             |

---

## 👨‍💻 Автор и лицензия

**Автор:** Аникаев Роман

---

_Присоединяйтесь к Focus Zone и откройте свой город по-новому!_
