require('express-async-errors')
const helmet  = require('helmet')
const express  = require('express')
const app = express()
const router = require('./src/routes')
const errorHandler = require('./src/middleware/errorHandler')
const { swaggerUi, swaggerSpec } = require("./startup/swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json())
app.use(helmet())

app.use("/api" , router)
require('./startup/db')()

app.use(errorHandler);

const port = process.env.PORT || 3000
app.listen(port ,()=>console.log(`listening to port ${port}`) )