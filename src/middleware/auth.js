const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/user");

async function isLoggined(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).json("access denied");
  try {
    const dencoded = jwt.verify(token, config.get("jwt-key"));
    const user = await User.findById(dencoded);
    req.user = user;
    next();
  } catch (error) {
    res.status(400).send("invalid token");
  }
}

async function isAdmin(req, res, next) {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });
    if (!user.isAdmin)
      return res.status(403).json({ message: "Access denied. Admins only." });
    next();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { isLoggined , isAdmin };

// {
//   "title":"qwer",
//   "description":"123456",
//   "dueDate":""
// }

// {
//   "email":"qwer@gamil.com",
//   "password":"123456"
// }
