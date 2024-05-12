import { Router } from "express";

import { checkCreateUserData } from "../middlewares/userMiddleware.js";
import { checkLogInData } from "../middlewares/userMiddleware.js";
import { checkUpdateUserData } from "../middlewares/userMiddleware.js";
import { protect } from "../middlewares/userMiddleware.js";
import { uploadAvatar } from "../middlewares/userMiddleware.js";
import { createUser } from "../controllers/userController.js";
import { currentUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";
import { logoutUser } from "../controllers/userController.js";
import { updateUser } from "../controllers/userController.js";

export const usersRouter = Router();

usersRouter.post("/register", checkCreateUserData, createUser);

usersRouter.post("/login", checkLogInData, loginUser);

usersRouter.post("/logout", protect, logoutUser);

usersRouter.get("/current", protect, currentUser);

usersRouter.put(
  "/current",
  protect,
  checkUpdateUserData,
  uploadAvatar,
  updateUser
);
