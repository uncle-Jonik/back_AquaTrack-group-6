import { Router } from "express";

import { addWaterController } from "../controllers/waterController.js";
import { deleteWaterController } from "../controllers/waterController.js";
import { checkAddWaterRateMiddleware } from "../middlewares/waterMiddleware.js";
import { checkIdMiddleware } from "../middlewares/waterMiddleware.js";

const router = Router();

// спочатку має бути міделвара ПРОТЕКТ!
router.post("/day", checkAddWaterRateMiddleware, addWaterController);

router.use("/day/:id", checkIdMiddleware);
router.route("/day/:id").put().patch().delete(deleteWaterController);

export { router };
