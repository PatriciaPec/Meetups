const Joi = require("joi");

const filterMeetupSchema = Joi.object({
  titulo: Joi.string().max(200).messages({
    "string.min": "Title has to be less than 200 characters long",
    "string.base": "Title has to be a string",
  }),
  description: Joi.string().max(5000).messages({
    "string.min": "Description has to be less than 5000 characters long",
    "string.base": "Description has to be a string",
  }),
});

module.exports = filterMeetupSchema;
