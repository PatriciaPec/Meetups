const Joi = require("joi");

const editMeetupSchema = Joi.object({
  titulo: Joi.string().min(4).max(200).messages({
    "string,min": "Title has to be 4 characters no long",
    "string.max": "Title has to be less than 200 characters long ",
    "string.base": "Title has no be a string",
  }),
  description: Joi.string().min(4).max(200).messages({
    "string.min": "Description has to be 4 characters no long",
    "string.max": "Description has to be less than 5000 characters long",
    "string.base": "Description has to be a string",
  }),
})

  .min(1)
  .messages({
    "object.min": "You need to include at least title or description",
  });

module.exports = editMeetupSchema;
