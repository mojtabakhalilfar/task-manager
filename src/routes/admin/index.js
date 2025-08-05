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
