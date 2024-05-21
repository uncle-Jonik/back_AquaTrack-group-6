/**
 * @swagger
 * components:
 *   schemas:
 *     Water:
 *       type: object
 *       required:
 *         - owner
 *         - waterValue
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: The auto-generated id of the Water
 *         owner:
 *           type: ObjectId
 *           description: The auto-generated id of the User
 *         localMonth:
 *           type: string
 *           description: current month
 *         localDate:
 *           type: string
 *           default:  func
 *           description: current day
 *         localTime:
 *           type: string
 *           default:  func
 *           description: current time
 *         waterValue:
 *           type: number
 *           description: emount of water drunk
 */

import { Router } from "express";

import { addWaterController } from "../controllers/waterController.js";
import { getDayWaterController } from "../controllers/waterController.js";
import { getMonthWaterController } from "../controllers/waterController.js";
import { updateWaterController } from "../controllers/waterController.js";
import { deleteWaterController } from "../controllers/waterController.js";
import { checkAllWaterDataMiddleware } from "../middlewares/waterMiddleware.js";
import { checkWaterDataMiddleware } from "../middlewares/waterMiddleware.js";
import { checkIdMiddleware } from "../middlewares/waterMiddleware.js";
import { protect } from "../middlewares/userMiddleware.js";

const router = Router();

router.use(protect);
router.post("/day", checkWaterDataMiddleware, addWaterController);

router.use("/day/:id", checkIdMiddleware);
router
  .route("/day/:id")
  .put(checkWaterDataMiddleware, updateWaterController)
  .patch(checkWaterDataMiddleware, updateWaterController)
  .delete(deleteWaterController);

router.post("/fullDay", checkAllWaterDataMiddleware, getDayWaterController);
router.post("/fullMonth", checkAllWaterDataMiddleware, getMonthWaterController);

export { router };
