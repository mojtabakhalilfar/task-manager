const express = require('express')
const router = express.Router()
const validation  = require('./validation')
const controller = require('./controller')

router.post("/register" ,validation.registerValidation(), controller.validation ,controller.register  )
router.post("/login" ,validation.loginValidation(), controller.validation ,controller.login  )

module.exports= router