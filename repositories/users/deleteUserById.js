const getDb = require("../../db/getDb");

const deleteUserById = async (id) => {
  const pool = getDb();

  await pool.query("DELETE FROM users WHERE id=?", [id]);
};

module.exports = deleteUserById;
