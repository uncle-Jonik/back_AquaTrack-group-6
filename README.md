AquaTrack is an API designed to help users track their water intake and manage their user profiles. This application is built with Express and documented using Swagger. The project is managed by Group 6.

Routes

Ping Route

GET /api/ping: Checks if the server is working.

User Routes

POST /api/users/register: Registers a new user.

POST /api/users/login: Logs in a user.

GET /api/users/logout: Logs out the current user.

POST /api/users/refresh: Updates the access token using the refresh token.

GET /api/users/current: Gets the current user profile.

PUT /api/users/update: Updates the user profile.

Water Routes

POST /api/water/day: Adds water intake for a day.

PUT /api/water/day/:id: Updates water intake for a specific entry.

PATCH /api/water/day/:id: Partially updates water intake for a specific entry.

DELETE /api/water/day/:id: Deletes a specific water intake entry.

POST /api/water/fullDay: Gets water intake for a full day.

POST /api/water/fullMonth: Gets water intake for a full month.

Running the Server

The server will be running on the port specified in the .env file, and you can access the API at http://localhost:3001/api/. To start the server, use the following command: npm run dev

AquaTrack - це API, розроблений, щоб допомогти користувачам відстежувати споживання води та керувати своїми профілями. Ця програма створена за допомогою Express та задокументована за допомогою Swagger. Проектом керує Група 6.

Маршрути

Пінговий маршрут

GET /api/ping: Перевіряє, чи працює сервер.

Маршрути користувачів

POST /api/users/register: Реєструє нового користувача.

POST /api/users/login: Входить в систему користувача.

GET /api/users/logout: Виводить поточного користувача з системи.

POST /api/users/refresh: Оновлює токен доступу за допомогою токена refresh.

GET /api/users/current: Отримує профіль поточного користувача.

PUT /api/users/update: Оновлення профілю користувача.

Водні маршрути

POST /api/water/day: Додає споживання води за день.

PUT /api/water/day/:id: Оновлює споживання води для певного запису.

PATCH /api/water/day/:id: Частково оновлює споживання води для певного запису.

DELETE /api/water/day/:id: Видаляє певний запис про водозабір.

POST /api/water/fullDay: Отримує споживання води за цілий день.

POST /api/water/fullMonth: Отримує споживання води за повний місяць.

Запуск сервера

Сервер буде працювати на порту, вказаному у файлі .env, а доступ до API можна отримати за адресою http://localhost:3001/api/. Щоб запустити сервер, скористайтеся наступною командою: npm run dev
