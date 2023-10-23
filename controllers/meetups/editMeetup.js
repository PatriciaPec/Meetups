const {
  selectMeetupById,
} = require("../../repositories/meetups/selectMeetupById");
const {
  updateMeetupById,
} = require("../../repositories/meetups/updateMeetupById");
const { generateError } = require("../../utils/generateError");
const { editMeetupSchema, meetupIdSchema } = require("../../schemas/meetups");

const editMeetup = async (req, res, next) => {
  try {
    const { id } = req.params;
    await meetupIdSchema.validateAsync(id);
    const meetup = await selectMeetupById(id);

    if (!meetup) {
      generateError("No puedes actualizar ese meetup porque no existe", 404);

      const logguedUserId = req.params;
      if (meetup.userId !== logguedUserId) {
        generateError("No tienes permiso para editar este meetup", 401);
      }
      await editMeetupSchema.validateAsync(req.body);

      const updateMeetup = { ...meetup, ...req.body };
      await updateMeetupById(updateMeetup);

      res.status(200).send({ status: "Ok", data: updateMeetup });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = editMeetup;
