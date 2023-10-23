const getDb = require("../../db/getDb");

const deleteRegister = async (userId, meetupId) => {
  const pool = getDb();
  await pool.query("DELETE FROM meetups WHERE userId=? AND meetupId=?", [
    userId,
    meetupId,
  ]);
};

module.exports = deleteRegister;
