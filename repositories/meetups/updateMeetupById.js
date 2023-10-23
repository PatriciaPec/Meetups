const { Upcoming } = require("@mui/icons-material");
const getDb = require("../../db/getDb");

const updateMeetupById = async (meetup) => {
  const { id, title, theme, date, locality } = meetup;

  const pool = getDb;

  await pool.query(
    "UPDATE meetups SET title=?, theme=?, date=?, locality=? WHERE id=?,[title, theme, locality,date, meetupid]"
  );
};

module.exports = updateMeetupById;
