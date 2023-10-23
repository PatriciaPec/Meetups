const { selectMeetups } = require("../../repositories/meetups/selectMeetups");
const {
  filterMeetupSchema,
} = require("../../schemas/meetups/filterMeetupSchema");

const getMeetups = async (req, res, next) => {
  try {
    await filterMeetupSchema.validateAsync(req.query);

    const meetups = await selectMeetups(req.query, req.auth);
    res
      .status(200)
      .send({ status: "Meetups de nuestros usuarios:", data: posts });
  } catch (error) {
    next(error);
  }
};

module.exports = getMeetups;
