const logger = require('../logger');

module.exports = (err, req, res, next) => {
  logger.error(err); // به صورت خودکار stack trace رو ذخیره می‌کنه
  res.status(500).json({ success: false, message: 'Internal Server Error' });
};