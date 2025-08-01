const { validationResult } = require("express-validator");
const User = require("../models/user");
const Task = require("../models/task");
const autobind = require("auto-bind");

module.exports = class {
  constructor() {
    autobind(this);
    this.User = User;
    this.Task = Task;
  }
  validationBody(req, res) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array();
      const message = [];
      errors.forEach((err) => message.push(err.msg));
      return res.status(400).json({
        data: message,
        message: "validation Error",
      });
    }
    return true;
  }
  validation(req, res, next) {
    if (!this.validationBody(req, res)) return;
    next();
  }
  response({ data = {}, code = 200, message, res }) {
    res.status(code).json({ data, message });
  }
};
