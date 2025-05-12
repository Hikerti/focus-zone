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
   ```bash
   # Запуск фронтенда
   cd focuszone
   npm run dev

   # Запуск бэкенда
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

---

## 📡 API Роуты

| Метод  | URL                                     | Описание                                        |
|--------|-----------------------------------------|-------------------------------------------------|
| GET    | `/cafe/get`                             | Получить список кофе                            |
| POST   | `/cafe/create`                          | Создать кофе                                    | 
| DELETE | `/cafe/delete`                          | Удалить кофе                                    |
| PUT    | `/cafe/update`                          | Изменить элемент контента                       | 
| GET    | `/cafe/card_filter/:filter/:page/:limit` | Фильтрация кофе по фильтрам на сайте            |
| GET    | `/cafe/get_by_id/:id`                   | Фильрация кофе по id                            | 
| GET    | `/cafe/card_pagination/:page/:limit`     | Пагинации на странице                           |
| GET    | `/cafe/cards_length`                    | Получение длинны списка кафе                    | 
| GET    | `/user/get_users`                             | Получение пользователя                          |
| GET    | `/user/get_users/:id`                          | Получение пользователя по id                    | 
| GET    | `/user/get_user/:email`                             | Получение пользователя по email                 |
| POST   | `/user/create`                          | Создать пользователя                            | 
| POST   | `/auth/register`                             | Регистрация пользователя                        |
| POST   | `/auth/login`                          | Аунтетификация пользователя                     | 
| POST   | `/auth/logout`                          | Выход пользователя из профиля                   | 
| GET    | `/message/get_user_messages:userId`                             | Получить списка комментариев по id пользователя |
| POST   | `/message/create_messages`                          | Создать отзыва                                  | 
| PUT    | `/message/update_messages/:id`                          | Обновление отзыва                               | 
| DELETE | `/message/delete_messages/:id`                             | Удаление отзыва                                 |
| GET    | `/message/get_cafe_messages/:cafeId`                          | Получить списка комментариев по id кафе         | 
| GET    | `/message/get_id_messages/:id`                          | Получить списка комментариев по id отзыва       | 
---

## 👨‍💻 Автор и лицензия

**Автор:** Аникаев Роман  
Лицензия: MIT

---

_Присоединяйтесь к Focus Zone и откройте свой город по-новому!_
