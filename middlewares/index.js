const validateAuth = require("../middlewares/validateAuth");
const handleError = require("../middlewares/handleError");
const handleNotFound = require("../middlewares/handleNotFound");

module.exports = { validateAuth, handleError, handleNotFound };
