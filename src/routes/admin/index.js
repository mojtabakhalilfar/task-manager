/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: روت‌های مدیریتی برای مدیریت کاربران و تسک‌ها
 */

/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: دریافت لیست تمام کاربران (فقط ادمین)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: لیست کاربران
 *       403:
 *         description: دسترسی غیرمجاز
 *       500:
 *         description: خطای سرور
 */

/**
 * @swagger
 * /admin/deleteuser/{id}:
 *   delete:
 *     summary: حذف یک کاربر و تمام تسک‌های مرتبط (فقط ادمین)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: آیدی کاربر
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: کاربر و تسک‌ها با موفقیت حذف شدند
 *       401:
 *         description: احراز هویت نشده
 *       403:
 *         description: فقط ادمین دسترسی دارد
 *       404:
 *         description: کاربر پیدا نشد
 */

/**
 * @swagger
 * /admin/role/{id}:
 *   put:
 *     summary: تغییر نقش کاربر به ادمین یا کاربر عادی (فقط ادمین)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: آیدی کاربر
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               isAdmin:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: نقش کاربر با موفقیت تغییر کرد
 *       400:
 *         description: مقدار ارسالی اشتباه است
 *       401:
 *         description: احراز هویت نشده
 *       403:
 *         description: فقط ادمین دسترسی دارد
 *       404:
 *         description: کاربر پیدا نشد
 */

/**
 * @swagger
 * /admin/tasks/{id}:
 *   get:
 *     summary: مشاهده تمام تسک‌ها (فقط ادمین)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: آیدی اختیاری برای فیلتر کردن تسک‌ها (در صورت نیاز)
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: لیست تسک‌ها
 *       401:
 *         description: احراز هویت نشده
 *       403:
 *         description: فقط ادمین دسترسی دارد
 */

/**
 * @swagger
 * /admin/deletetask/{id}:
 *   delete:
 *     summary: حذف یک تسک خاص (فقط ادمین)
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: آیدی تسک
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: تسک با موفقیت حذف شد
 *       401:
 *         description: احراز هویت نشده
 *       403:
 *         description: فقط ادمین دسترسی دارد
 *       404:
 *         description: تسک پیدا نشد
 */


const express = require("express");
const router = express.Router();
const validation = require("./validation");
const controller = require("./controller");
const {isLoggined}=require('../../middleware/auth')

router.get("/users",isLoggined, controller.getUsers);
router.delete("/deleteuser/:id",isLoggined, controller.deleteUser);
router.put("/role/:id",isLoggined, controller.changeRole);
router.get("/tasks/:id",isLoggined, controller.showTask);
router.delete("/deletetask/:id",isLoggined, controller.deleteTask);

module.exports = router;
