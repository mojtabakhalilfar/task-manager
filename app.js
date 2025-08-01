const express  = require('express')
const app = express()
const router = require('./src/routes')

app.use(express.json())

app.use("/api" , router)
require('./startup/db')()

const port = process.env.PORT || 3000
app.listen(port ,()=>console.log(`listening to port ${port}`) )