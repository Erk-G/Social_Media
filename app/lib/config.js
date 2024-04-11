const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";
//Was told work factor should be above 12 but this is just a side project
// Also normally this file would be hidden
const BCRYPT_WORK_FACTOR = 12;

module.exports = {
    SECRET_KEY,
    BCRYPT_WORK_FACTOR,
  };