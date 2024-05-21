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
/**
 * @swagger
 * tags:
 *   name: Water
 *   description: Operations about water record
 * /water/register:
 *   post:
 *     summary: Create water
 *     tags: [Water]
 *     operationId: createWaterRecord
 *     requestBody:
 *       required: true
 *       description: This can only be done by the logged in user.
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               localDate:
 *                 type: string
 *               localTime:
 *                 type: string
 *               waterValue:
 *                 type: number
 *             required:
 *               - waterValue
 *
 *     responses:
 *       "201":
 *         description: Created
 *       "401":
 *         description: Invalid user data
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
