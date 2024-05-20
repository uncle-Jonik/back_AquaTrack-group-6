/**
 * @swagger
 * components:
 *   schemas:
 *     Ping:
 *       type: object
 *       properties:
 *         text:
 *           type: string
 *           description: PING - DONE!
 *
 */
/**
 * @swagger
 * tags:
 *   name: Ping
 *   description: Checking if the server is working API
 * /ping:
 *   get:
 *     summary: Lists all the books
 *     tags: [Ping]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ping'
 */

import { Router } from "express";

import { pingController } from "../controllers/pingController.js";
import { pingMiddleware } from "../middlewares/pingMiddleware.js";

const router = Router();

router.get("/ping", pingMiddleware, pingController);

export { router };

// /**
//  * @swagger
//  * tags:
//  *   name: Books
//  *   description: The books managing API
//  * /book:
//  *   get:
//  *     summary: Lists all the books
//  *     tags: [Books]
//  *     responses:
//  *       200:
//  *         description: The list of the books
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 $ref: '#/components/schemas/Books'
