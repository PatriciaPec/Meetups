const getDB = require("../../db/getDb");

const createRegister = async (userId, meetupId) => {
  const pool = getDB();

  const [{ insertId }] = await pool.query(
    "INSERT INTO register (userId,MeetupId) VALUES(?,?)",
    [userId, meetupId]
  );
  return insertId;
};

module.exports = createRegister;
