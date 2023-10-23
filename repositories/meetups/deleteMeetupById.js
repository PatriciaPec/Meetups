const getDb = require("../../db/getDb");

const deleteMeetupById = async (meetupId) => {
  const pool = getDb();

  await pool.query("DELETE FROM meetups WHERE registerId=?", [meetupId]);
  await pool.query("DELETE FROM meetups WHERE id=?", [meetupId]);
};

module.exports = deleteMeetupById;
