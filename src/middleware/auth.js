const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/user')

async function isLoggined(req , res , next) {
    const token = req.header("x-auth-token")
    if(!token) return res.status(401).json("access denied")
    try {
        const dencoded = jwt.verify(token , config.get("jwt-key"))
        const user = await User.findById(dencoded)
        req.user = user
        next()
    } catch (error) {
        res.status(400).send("invalid token")
    }
}

module.exports = {isLoggined}


// {
//   "title":"qwer",
//   "description":"123456",
//   "dueDate":""
// }

// {
//   "email":"qwer@gamil.com",
//   "password":"123456"
// }