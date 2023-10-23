const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().min(4).max(60).required(),
  email: Joi.string().email().min(5).max(100).required(),
  password: Joi.string().min(8).max(50).required(),
});

module.exports = createUserSchema;
