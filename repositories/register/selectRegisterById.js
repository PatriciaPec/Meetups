const getDb = require("../../db/getDb");
const selectRegisterById = async (userId, meetupId) => {
  const pool = getDb();
  const [[register]] = await pool.query(
    "SELECT * FROM register WHERE userId=? AND meetupId=?",
    [userId, meetupId]
  );
  return register;
};
module.exports = selectRegisterById;
