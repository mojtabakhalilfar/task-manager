const expressValidator = require("express-validator");
const check = expressValidator.check;

module.exports = new (class {
  postTasksValidation() {
    return [
      check("title").not().isEmpty().withMessage("title can not empty"),
      check("description"),
      check("dueDate").isDate()
    ];
  }
  putTasksValidation() {
    return [
      check("title").not().isEmpty().withMessage("title can not empty"),
      check("description"),
      check("dueDate").isDate(),
      check("status")
    ];
  }
})();
