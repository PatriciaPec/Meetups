const Joi = require("joi");

const meetupIdSchema = Joi.number().positive().required();

module.exports = meetupIdSchema;
