const express = require("express");
const router = express.Router();
const validation = require("./validation");
const controller = require("./controller");
const {isLoggined}=require('../../middleware/auth')

router.get("/users",isLoggined, controller.getUsers);
router.delete("/deleteuser/:id",isLoggined, controller.deleteUser);
router.put("/role",isLoggined, controller.changeRole);
router.get("/tasks",isLoggined, controller.showTask);
router.delete("/deletetask",isLoggined, controller.deleteTask);

module.exports = router;
