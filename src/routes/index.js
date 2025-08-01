const express = require('express')
const router = express.Router()
const routerAuth = require('./auth')
const routerTask = require('./tasks')
const routerUser = require('./user')
const {isLoggined} =require('../middleware/auth')

router.use('/auth' , routerAuth)
router.use('/tasks' ,isLoggined, routerTask)
router.use('/users' , routerUser)

router.get('/',(req , res)=>{
    res.json({data:"hiii"})
})

module.exports = router