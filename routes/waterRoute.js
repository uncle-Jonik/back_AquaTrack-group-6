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
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
/**
 * @swagger
 * tags:
 *   name: Water
 *   description: Operations about water record
 * /water/day:
 *   post:
 *     summary: Create water
 *     tags: [Water]
 *     operationId: createWaterRecord
 *     requestBody:
 *       required: true
 *       description: This can only be done by the logged in user.
 *       content:
 *         application/json:
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
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "201":
 *         description: Created
 *       "401":
 *         description: Invalid user data
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Water not found
 *
 *
 * /water/day/{id}:
 *   delete:
 *     summary: Delete water record on id
 *     tags: [Water]
 *     operationId: deleteWaterRecord
 *     parameters:
 *       - name: water record id
 *         in: path
 *         description: This can only be done by the logged in user.
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: Deleter
 *       "401":
 *         description: Invalid user data
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Water not found
 *
 *
 *   put:
 *     summary: Edit water record on id
 *     tags: [Water]
 *     operationId: editWaterRecordPut
 *     parameters:
 *       - name: water record id
 *         in: path
 *         description: This can only be done by the logged in user.
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "201":
 *         description: Updated
 *       "401":
 *         description: Invalid user data
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Water not found
 *
 *
 *   patch:
 *     summary: Edit water record on id
 *     tags: [Water]
 *     operationId: editWaterRecordPatch
 *     parameters:
 *       - name: water record id
 *         in: path
 *         description: This can only be done by the logged in user.
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "201":
 *         description: Updated
 *       "401":
 *         description: Invalid user data
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Water not found
 *
 *
 * /water/fullDay:
 *   post:
 *     summary: geted all water record on active day
 *     tags: [Water]
 *     operationId: getWaterRecordFullDay
 *     requestBody:
 *       required: true
 *       description: This can only be done by the logged in user.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               localDate:
 *                 type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "201":
 *         description: Created
 *       "401":
 *         description: Invalid user data
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Water not found
 *
 *
 * /water/fullMonth:
 *   post:
 *     summary: geted all water record on active month
 *     tags: [Water]
 *     operationId: getWaterRecordFullMonth
 *     requestBody:
 *       required: true
 *       description: This can only be done by the logged in user.
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               localDate:
 *                 type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "201":
 *         description: Created
 *       "401":
 *         description: Invalid user data
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Water not found
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
