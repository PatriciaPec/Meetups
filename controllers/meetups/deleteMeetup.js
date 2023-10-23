const {
  selectMeetupById,
} = require("../../repositories/meetups/selectMeetupById");
const {
  deleteMeetupById,
} = require("../../repositories/meetups/deleteMeetupById");
const { meetupIdSchema } = require("../../schemas/meetups/meetupIdSchema");
const { generateError } = require("../../utils/generateError");

const deleteMeetup = async (req, res, next) => {
  try {
    const { meetupId } = req.params;

    await meetupIdSchema.validateAuth(meetupId);

    const meetup = await selectMeetupById(meetupId);

    if (!meetup) {
      generateError("El meetup no existe", 404);
    }

    const loggurUserId = req.auth.id;
    if (meetup.userId !== loggurUserId) {
      generateError("No puedes borrar un meetup que no es tuyo", 401);
    }
    await deleteMeetupById(meetupId);
    res
      .status(200)
      .send({ status: "Ok", message: "Tu post ha sido borrado correctamente" });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteMeetup;
