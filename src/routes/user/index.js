/**
 * @swagger
 * tags:
 *   name: User
 *   description: عملیات مربوط به کاربر لاگین‌شده
 */

/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: دریافت اطلاعات کاربر لاگین‌شده
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: اطلاعات کاربر با موفقیت دریافت شد
 *       401:
 *         description: احراز هویت انجام نشد
 */

/**
 * @swagger
 * /users/me:
 *   put:
 *     summary: ویرایش اطلاعات کاربر
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ali Rezaei
 *               email:
 *                 type: string
 *                 example: ali@example.com
 *     responses:
 *       200:
 *         description: اطلاعات با موفقیت ویرایش شد
 *       400:
 *         description: خطای اعتبارسنجی
 *       401:
 *         description: احراز هویت انجام نشد
 */

/**
 * @swagger
 * /users/me:
 *   delete:
 *     summary: حذف حساب کاربری کاربر لاگین‌شده
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: حساب کاربری و تسک‌های مرتبط با موفقیت حذف شدند
 *       401:
 *         description: احراز هویت انجام نشد
 *       404:
 *         description: کاربر یافت نشد
 */



const express = require("express");
const router = express.Router();
const validation = require("./validation");
const controller = require("./controller");
const {isLoggined}=require('../../middleware/auth')


router.get("/me",isLoggined, controller.getUser);
router.put("/me",isLoggined,validation.editeUser(), controller.validation, controller.editeUser);
router.delete("/me",isLoggined, controller.deleteUser);

module.exports = router;
