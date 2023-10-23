const deleteRegistrationCode = require("./deleteRegistrationCode");
const deleteUserById = require("./deleteUserById");
const insertUser = require("../users/insertUser");
const selectUserByCode = require("../users/selectUserByCode");
const selectUserByEmail = require("../users/selectUserByEmail");
const selectUserById = require("../users/selectUserById");
const insertMail = require("../users/insertMail");

module.exports = {
  deleteRegistrationCode,
  deleteUserById,
  insertUser,
  selectUserByCode,
  selectUserByEmail,
  selectUserById,
  insertMail,
};
