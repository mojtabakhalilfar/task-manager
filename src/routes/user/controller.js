const Controller = require("../controller");

module.exports = new (class extends Controller {
  async getUser(req, res) {
    try {
      if (!req.user || !req.user._id)
        return this.response({ res, code: 401, message: "Unauthorized" });
      let user = await this.User.findById(req.user._id);
      if (!user)
        return this.response({ res, code: 404, message: "not found data" });
      user = user.toObject();
      delete user.password;
      this.response({ res, data: user, message: "successfully" });
    } catch (error) {
      this.response({ res, code: 500, message: "server error" });
    }
  }
  async editeUser(req, res) {
    try {
      if (!req.user || !req.user._id)
        return this.response({ res, code: 401, message: "Unauthorized" });
      let user = await this.User.findById(req.user._id);
      if (!user)
        return this.response({ res, code: 404, message: "not found data" });
      if (req.body.email) user.email = req.body.email;
      if (req.body.name) user.name = req.body.name;
      await user.save();
      this.response({ res, data: user, message: "successfully" });
    } catch (error) {
      this.response({ res, code: 500, message: "server error" });
    }
  }
  async deleteUser(req, res) {
    try {
      if (!req.user || !req.user._id)
        return this.response({ res, code: 401, message: "Unauthorized" });
      let user = await this.User.findById(req.user._id);
      if (!user)
        return this.response({ res, code: 404, message: "not found data" });
      await this.Task.deleteMany({user:req.user._id})
      await user.deleteOne();
      this.response({res , message:"User and tasks deleted successfully"})
    } catch (error) {
      this.response({ res, code: 500, message: "server error" });
    }
  }
})();
