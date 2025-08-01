const expressValidator = require("express-validator");
const check = expressValidator.check;

module.exports = new (class {
  postTasksValidation() {
    return [
      check("title").not().isEmpty().withMessage("title can not empty"),
      check("email").isEmail().withMessage("name can not empty"),
    ];
  }
  getTasksValidation() {
    return [
      check("name").not().isEmpty().withMessage("name can not empty"),
      check("password").not().isEmpty().withMessage("name can not empty"),
      check("email").isEmail().withMessage("name can not empty"),
    ];
  }
})();
