const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const taskShema = new mongoose.Schema({
    title:{type: String , required:true},
    description:{type: String },
    status:{type: String , default:'pending'},
    dueDate:{type: Date },
    user:{type:mongoose.Schema.Types.ObjectId ,ref:"User"}
})

taskShema.plugin(timestamp)

const Task = mongoose.model("Task" , taskShema)
module.exports = Task
