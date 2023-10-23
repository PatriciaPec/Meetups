const {
  selectMeetupById,
} = require("../../repositories/meetups/selectMeetupById");
const { meetupIdSchema } = require("../../schemas/meetups/meetupIdSchema");
const { generateError } = require("../../utils/generateError");

const getMeetup = async (req, res, next) => {
  try {
    const { meetupId } = req.params;

    const id = Number(meetupId);

    await meetupIdSchema.validateAsync(id);

    const meetup = await selectMeetupById(id, req.auth);

    if (!meetup) {
      generateError("El meetup no existe", 404);
    }
    res.status(200).send({ status: "ok", data: post });
  } catch (error) {
    next(error);
  }
};

module.exports = getMeetup;
