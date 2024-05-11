import { Router } from "express";

import { addWaterController } from "../controllers/waterController.js";
import { checkAddWaterRate } from "../middlewares/waterMiddleware.js";

const router = Router();

// спочатку має бути міделвара ПРОТЕКТ!
router.post("/day", checkAddWaterRate, addWaterController);

export { router };
