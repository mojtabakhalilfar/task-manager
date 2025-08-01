const express = require('express')
const router = express.Router()
const validation  = require('./validation')
const controller = require('./controller')

router.post("/register" ,validation.registerValidation() ,controller.register , controller.validation )
router.post("/login" ,validation.loginValidation() ,controller.login , controller.validation )

module.exports= router