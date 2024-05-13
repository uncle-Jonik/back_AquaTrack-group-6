import { Router } from "express";

import { checkCreateUserData, checkLogInData, checkRefreshData, checkUpdateUserData, protect, refreshUserData, uploadAvatar } from "../middlewares/userMiddleware.js";
import { createUser, currentUser, loginUser, logoutUser, refreshUser, updateUser } from "../controllers/userController.js";

export const usersRouter = Router();

usersRouter.post("/register", checkCreateUserData, createUser);

usersRouter.post("/login", checkLogInData, loginUser);

usersRouter.post("/logout", protect, logoutUser);

usersRouter.post("/refresh", checkRefreshData, refreshUserData, refreshUser);

usersRouter.get("/current", protect, currentUser);

usersRouter.put(
    "/current",
    protect,
    checkUpdateUserData,
    uploadAvatar,
    updateUser
);