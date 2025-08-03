const express = require("express");
const router = express.Router();
const validation = require("./validation");
const controller = require("./controller");
const {isLoggined}=require('../../middleware/auth')

router.get("/me",isLoggined, controller.getUser);
router.put("/me",isLoggined,validation.editeUser(), controller.validation, controller.editeUser);
router.delete("/me",isLoggined, controller.deleteUser);

module.exports = router;
