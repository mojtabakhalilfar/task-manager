const expressValidator = require("express-validator");
const check = expressValidator.check;


module.exports = new (class {
  editeUser() {
    return [
      check("name").not().isEmpty().withMessage("name can not empty"),
      check("email").isEmail().withMessage("email is not valid"),
    ];
  }
})();
