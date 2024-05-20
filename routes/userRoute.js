/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       uniqueItems:
 *         - email
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: The auto-generated id of the User
 *         email:
 *           type: string
 *           description: Unique email user
 *         password:
 *           type: string
 *           description: User password
 *         accessToken:
 *           type: string
 *           default:  null
 *           description: Token for invoking private requests
 *         refreshToken:
 *           type: string
 *           default:  null
 *           description: Token to update AccessToken
 *
 *         name:
 *           type: string
 *           description: User name
 *         gender:
 *           type: string
 *           default:  null
 *           enum: [female, male]
 *           description: Token to update AccessToken
 *         avatar:
 *           type: string
 *           default:  null
 *           description: User avatar url
 *         weight:
 *           type: string
 *           default:  null
 *           description: User weight in "string"
 *         sportsActivity:
 *           type: string
 *           default:  null
 *           description: User sports activity in "string"
 *         waterRate:
 *           type: string
 *           default:  1.5
 *           description: User waterRate in "string"
 */
/**
 * @swagger
 * tags:
 *   name: User
 *   description: Operations about user
 * /users/register:
 *   post:
 *     summary: Create user
 *     tags: [User]
 *     operationId: createUser
 *     requestBody:
 *       required: true
 *       description: Created user object
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *
 *     responses:
 *       "201":
 *         description: Created
 *       "401":
 *         description: Invalid user data
 *
 * /users/login:
 *   post:
 *     summary: Login user
 *     tags: [User]
 *     operationId: loginUser
 *     requestBody:
 *       required: true
 *       description: ''
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *
 *     responses:
 *       "200":
 *         description: LogIn
 *       "401":
 *         description: Invalid user data
 *
 * /users/logout:
 *   get:
 *     summary: Logs out current logged in user session
 *     tags: [User]
 *     operationId: logoutUser
 *     description: This can only be done by the logged in user.
 *     parameters: []
 *
 *     responses:
 *       "204":
 *         description: No Content
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *
 * /users/refresh:
 *   post:
 *     summary: Update Access Token using Refresh Token
 *     tags: [User]
 *     operationId: refreshUser
 *     requestBody:
 *       required: true
 *       description: ''
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *             required:
 *               - refreshToken
 *
 *     responses:
 *       "200":
 *         description: OK
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *
 * /users/current:
 *   get:
 *     summary: Update Access Token using Refresh Token
 *     tags: [User]
 *     operationId: currentUser
 *     parameters: []
 *     security:
 *       - basicAuth: []
 *
 *     responses:
 *       "200":
 *         description: OK
 *       "403":
 *         description: Forbidden
 *
 *
 *
 * /users/update:
 *   put:
 *     summary: Update user profile
 *     tags: [User]
 *     operationId: updateUser
 *     requestBody:
 *       required: true
 *       description: ''
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               gender:
 *                 type: string
 *               avatar:
 *                 type: string
 *                 format: binary
 *               weight:
 *                 type: string
 *               sportsActivity:
 *                 type: string
 *               waterRate:
 *                 type: string
 *
 *     responses:
 *       "200":
 *         description: OK
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *
 *components:
 *  securitySchemes:
 *    bearerAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
import { Router } from "express";

import {
  checkCreateUserData,
  checkLogInData,
  checkRefreshData,
  checkUpdateUserData,
  protect,
  refreshUserData,
  uploadAvatar,
} from "../middlewares/userMiddleware.js";
import {
  createUser,
  currentUser,
  loginUser,
  logoutUser,
  refreshUser,
  updateUser,
} from "../controllers/userController.js";

export const usersRouter = Router();

usersRouter.post("/register", checkCreateUserData, createUser);

usersRouter.post("/login", checkLogInData, loginUser);

usersRouter.get("/logout", protect, logoutUser);

usersRouter.post("/refresh", checkRefreshData, refreshUserData, refreshUser);

usersRouter.get("/current", protect, currentUser);

usersRouter.put(
  "/update",
  protect,
  checkUpdateUserData,
  uploadAvatar,
  updateUser
);
