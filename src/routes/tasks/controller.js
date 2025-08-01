const Controller = require("../controller");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const config = require("config");

module.exports = new (class extends Controller {
  async getTasks(req, res) {
    console.log(1);
    if (req.body == undefined) return console.log(undefined);
    const tasks = await this.Task.find({ user: req.user._id });
    if (tasks.length === 0) {
      return this.response({ res, message: "there is no task" });
    }
    this.response({ res, data: tasks, message: "successfully" });
  }
  async postTasks(req, res) {
    if (req.body == undefined) return console.log(undefined);
    let task = new this.Task({
      ..._.pick(req.body, ["title", "description", "dueDate"]),
      user: req.user._id,
    });
    await task.save();
    this.response({
      res,
      message: "Task created successfully",
      data: task,
    });
  }

  async putTasks(req, res) {
    if (req.body == undefined) return console.log(undefined);
    let task = await this.Task.findById(req.params.id);
    if(!task){
      return this.response({res , message:"not found task" ,code:404})
    }
    task.title = req.body.title;
    task.description = req.body.description;
    task.dueDate = req.body.dueDate;
    task.status = req.body.status;
    await task.save();
    console.log(task);
    this.response({
      res,
      message: "Task edited successfully",
      data: task,
    });
  }

    async deleteTasks(req, res) {
    if (req.body == undefined) return console.log(undefined);
    let task = await this.Task.findOne({_id:req.params.id , user: req.user._id });
    if(!task){
      return this.response({res , message:"not found task" ,code:404})
    }
    await task.deleteOne()
    this.response({
      res,
      message: "Task deleted successfully",
      data: task,
    });
  }
})();
