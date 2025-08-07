/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: عملیات مربوط به احراز هویت کاربران
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: ثبت‌نام کاربر جدید
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ali
 *               email:
 *                 type: string
 *                 example: ali@example.com
 *               password:
 *                 type: string
 *                 example: Pass1234!
 *     responses:
 *       200:
 *         description: ثبت‌نام موفقیت‌آمیز
 *       400:
 *         description: خطای اعتبارسنجی
 *       500:
 *         description: خطای سرور
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: ورود کاربر
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: ali@example.com
 *               password:
 *                 type: string
 *                 example: Pass1234!
 *     responses:
 *       200:
 *         description: ورود موفق با دریافت توکن
 *       401:
 *         description: ایمیل یا رمز اشتباه است
 *       500:
 *         description: خطای سرور
 */


const express = require('express')
const router = express.Router()
const validation  = require('./validation')
const controller = require('./controller')

router.post("/register" ,validation.registerValidation(), controller.validation ,controller.register  )
router.post("/login" ,validation.loginValidation(), controller.validation ,controller.login  )

module.exports= router