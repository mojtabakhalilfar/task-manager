const Controller = require("../controller");

module.exports = new (class extends Controller {
  async getUsers(req, res) {
    try {
      let users = await this.User.find();
      if (!req.user || !req.user.isAdmin)
        return this.response({ res, code: 403, message: "Access denied" });
      if (!users.length)
        return this.response({ res, code: 404, message: "No users found" });
      users = users.map((u) => {
        u = u.toObject();
        delete u.password;
        return u;
      });

      this.response({ res, data: users, message: "successfully" });
    } catch (error) {
      this.response({ res, code: 500, message: "server error" });
    }
  }

  async deleteUser(req, res) {
    try {
      if (!req.user || !req.user._id || !req.user.isAdmin)
        return this.response({ res, code: 401, message: "Unauthorized" });
      let user = await this.User.findById(req.params.id);
      if (!user)
        return this.response({ res, code: 404, message: "not found data" });
      await this.Task.deleteMany({ user: req.params.id });
      await user.deleteOne();
      this.response({
        res,
        message: "User and related tasks deleted successfully",
      });
    } catch (error) {
      this.response({ res, code: 500, message: "server error" });
    }
  }

  async changeRole(req, res) {
    try {
      if (!req.user || !req.user._id || !req.user.isAdmin)
        return this.response({ res, code: 401, message: "Unauthorized" });
      let user = await this.User.findById(req.params.id);
      if (!user)
        return this.response({ res, code: 404, message: "not found data" });
      if (typeof req.body.isAdmin == "boolean") user.isAdmin = req.body.isAdmin;
      await user.save();
      this.response({ res, data: user, message: "successfully" });
    } catch (error) {
      this.response({ res, code: 500, message: "server error" });
    }
  }

  async showTask(req, res) {
    try {
      if (!req.user || !req.user._id || !req.user.isAdmin)
        return this.response({ res, code: 401, message: "Unauthorized" });
      let tasks = await this.Task.find();
      if (!tasks.length)
        return this.response({ res, code: 404, message: "No tasks found" });

      this.response({ res, data: tasks, message: "successfully" });
    } catch (error) {
      this.response({ res, code: 500, message: "server error" });
    }
  }

  async deleteTask(req, res) {
    try {
      if (!req.user || !req.user._id || !req.user.isAdmin)
        return this.response({ res, code: 401, message: "Unauthorized" });
      let task = await this.Task.findById(req.params.id);
      if (!task)
        return this.response({ res, code: 404, message: "not found data" });
      await task.deleteOne();
      this.response({ res, message: "Task deleted successfully" });
    } catch (error) {
      this.response({ res, code: 500, message: "server error" });
    }
  }
})();
