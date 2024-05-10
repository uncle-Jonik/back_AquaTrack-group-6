import { Router } from "express";

import { pingController } from "../controllers/pingController.js";
import { pingMiddleware } from "../middlewares/pingMiddleware.js";

const router = Router();

router.get("/ping", pingMiddleware, pingController);

export { router };
