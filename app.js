const express  = require('express')
const app = express()


require('./startup/db')

const port = process.env.PORT || 3000
app.listen(port , `listening to port ${port}`)