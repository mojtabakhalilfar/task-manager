const Controller = require("../controller");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const config = require("config");

module.exports = new (class extends Controller {
  async register(req, res) {
    if (req.body == undefined) return console.log(undefined);
    console.log(req.body);
    let user = await this.User.findOne({ email: req.body.email });
    if (user) {
      return this.response({
        res,
        message: "this user alredy registred",
        code: 400,
      });
    }
    user = new this.User(_.pick(req.body, ["name", "password", "email"]));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    this.response({
      data: user,
      message: "the user successfully registerd",
      res,
    });
  }
  async login(req, res) {
    let user = await this.User.findOne({ email: req.body.email });
    if (!user) {
      return this.response({
        res,
        code: 400,
        message: "invaild email or password1",
      });
    }
    const isvaild = await bcrypt.compare( req.body.password , user.password);
    if (!isvaild) {
      console.log(user.password)
      console.log(req.body.password)
      return this.response({
        res,
        code: 400,
        message: "invail email or password2",
      });
    }
    const token = jwt.sign({ _id: user.id }, config.get("jwt-key"));
    this.response({ res, message: "successful loged in", data: { token } });
  }
})();
