const express = require('express')
const router = express.Router()
const validation  = require('./validation')
const controller = require('./controller')

// router.get('/' , )
router.post('/', controller.postTasks , controller.validation)
router.get('/', controller.getTasks , controller.validation)
router.put('/:id', controller.putTasks , controller.validation)
router.delete('/:id', controller.deleteTasks , controller.validation)

module.exports= router