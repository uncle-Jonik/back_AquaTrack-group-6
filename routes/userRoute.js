import { Router } from "express";

import { checkCreateUserData, checkLogInData, checkUpdateUserData, protect } from "../middlewares/userMiddleware.js";
import { createUser, currentUser, loginUser, logoutUser, updateUser } from "../controllers/userController.js";

export const usersRouter = Router();

usersRouter.post("/register", checkCreateUserData, createUser);

usersRouter.post("/login", checkLogInData, loginUser);

usersRouter.post("/logout", protect, logoutUser);

usersRouter.get("/current", protect, currentUser);

usersRouter.put(
    "/current",
    protect,
    checkUpdateUserData,
    uploadPhoto,
    updateUser
);