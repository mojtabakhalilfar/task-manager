const expressValidator = require("express-validator");
const check = expressValidator.check;

module.exports = new (class {
  registerValidation() {
    return [
      check("name").not().isEmpty().withMessage("name can not empty"),
      check("password").not().isEmpty().withMessage("name can not empty"),
      check("email").isEmail().withMessage("name can not empty"),
    ];
  }
  loginValidation() {
    return [
      check("password").not().isEmpty().withMessage("name can not empty"),
      check("email").isEmail().withMessage("name can not empty"),
    ];
  }
})();
