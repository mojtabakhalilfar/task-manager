const express = require('express')
const router = express.Router()
const routerAuth = require('./auth')
const routerTask = require('./tasks')
const routerUser = require('./user')
const routerAdmiin = require('./admin')
const {isLoggined , isAdmin} =require('../middleware/auth')
const rateLimiter = require('../middleware/rateLimiter')

router.use('/auth' ,rateLimiter , routerAuth)
router.use('/tasks' ,isLoggined, routerTask)
router.use('/users',isLoggined , routerUser)
router.use('/admin',isLoggined , isAdmin, routerAdmiin)

router.get('/',(req , res)=>{
    res.json([
        "http://localhost:3000/api/auth" ,
        "http://localhost:3000/api/tasks" ,
        "http://localhost:3000/api/users" ,
        "http://localhost:3000/api/admin" ,
    ])
})

module.exports = router