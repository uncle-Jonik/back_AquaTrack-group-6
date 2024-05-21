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

To start the server, use the following command: npm run dev
