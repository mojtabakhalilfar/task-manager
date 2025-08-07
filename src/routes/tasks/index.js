/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: عملیات مربوط به تسک‌ها
 */

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: ساخت تسک جدید
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: تسک با موفقیت ایجاد شد
 *       400:
 *         description: اطلاعات نامعتبر
 *       401:
 *         description: احراز هویت نشده
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: دریافت لیست تسک‌های کاربر
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: لیست تسک‌ها
 *       401:
 *         description: احراز هویت نشده
 */

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: ویرایش یک تسک
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: آیدی تسک برای ویرایش
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: تسک با موفقیت ویرایش شد
 *       400:
 *         description: اطلاعات نامعتبر
 *       401:
 *         description: احراز هویت نشده
 *       404:
 *         description: تسک پیدا نشد
 */

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: حذف یک تسک
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: آیدی تسک برای حذف
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: تسک با موفقیت حذف شد
 *       401:
 *         description: احراز هویت نشده
 *       404:
 *         description: تسک پیدا نشد
 */


const express = require('express')
const router = express.Router()
const validation  = require('./validation')
const controller = require('./controller')

// router.get('/' , )
router.post('/' ,validation.postTasksValidation(), controller.postTasks , controller.validation )
router.get('/', controller.getTasks , controller.validation)
router.put('/:id',validation.putTasksValidation, controller.putTasks , controller.validation)
router.delete('/:id', controller.deleteTasks , controller.validation)

module.exports= router