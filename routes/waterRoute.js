import { Router } from "express";

import { addWaterController } from "../controllers/waterController.js";
import { updateWaterController } from "../controllers/waterController.js";
import { deleteWaterController } from "../controllers/waterController.js";
import { checkWaterDataMiddleware } from "../middlewares/waterMiddleware.js";
import { checkIdMiddleware } from "../middlewares/waterMiddleware.js";

const router = Router();

// спочатку має бути міделвара ПРОТЕКТ!
router.post("/day", checkWaterDataMiddleware, addWaterController);

router.use("/day/:id", checkIdMiddleware);
router
  .route("/day/:id")
  .put(checkWaterDataMiddleware, updateWaterController)
  .patch(checkWaterDataMiddleware, updateWaterController)
  .delete(deleteWaterController);

export { router };
