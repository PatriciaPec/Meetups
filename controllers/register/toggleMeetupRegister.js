const createMeetup = require("../../controllers/meetups/createMeetup");
const deleteMeetup = require("../../controllers/meetups/deleteMeetup");
const selectMeetupById = require("../../repositories/register/selectRegisterById");
const { meetupIdSchema } = require("../../schemas/meetups/meetupIdSchema");
const { generateError } = require("../../utils/generateError");

const toggleMeetupRegister = async (req, res, next) => {
  try {
    //
    const { meetupId: meetupId } = req.params;

    await meetupIdSchema.validateAsync(meetupId);

    const meetup = await selectMeetupById(meetupId);

    if (!meetup) {
      generateError("The meetup you are trying to like doesn't exist", 404);
    }
    // El middleware validateAuth valida al Usuario
    const loggedUserId = req.auth.id;

    const register = await selectMeetupById(loggedUserId, meetupId);

    let registered;
    let statusCode;

    if (register) {
      await deleteMeetup(loggedUserId, meetupId);
      register = false;
      statusCode = 200;
    } else {
      await createMeetup(loggedUserId, meetupId);
      registered = true;
      statusCode = 201;
    }

    res.status(statusCode).send({ status: "ok", data: { registered } });
  } catch (error) {
    next(error);
  }
};
module.exports = toggleMeetupRegister;
