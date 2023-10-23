const generateError = require("../../utils/generateError");
const {
  createMeetupSchema,
} = require("../../schemas/meetups/createMeetupShema");
const {
  selectMeetupById,
} = require("../../repositories/meetups/selectMeetupById");
const { insertMeetup } = require("../../repositories/meetups/insertMeetup");

const createMeetup = async (req, res, next) => {
  try {
    const meetupId = req.auth.id;
    await createMeetupSchema.validateAsync(req.body);

    const { title, theme, date, locality } = req.body;

    if (!title || !theme || !date || !locality) {
      generateError("Título,tema,fecha y lugar son obligatorios", 400);
    }

    const insertMeetupId = await insertMeetup({
      title,
      theme,
      date,
      locality,
    });

    const createdMeetup = await selectMeetupById(insertMeetupId);
    res.status(201).send({
      status: "Ok",
      data: createdMeetup,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createMeetup;
