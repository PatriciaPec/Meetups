const getDb = require("../../db/getDb");

const selectMeetupById = async (meetupId) => {
  const pool = getDb;

  const [[meetup]] = await pool.query(
    " SELECT meetups.*, COUNT(register.id) AS registers FROM meetups LEFT JOIN registers On meetups.id=registers.meetupId WHERE meetup.id,[meetupId]"
  );
  return meetupId;
};

module.exports = selectMeetupById;
