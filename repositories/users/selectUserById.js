const getPool = require("../../db/getDb");

const selectUserById = async (id) => {
  const pool = getPool;

  const [[user]] = await pool.query("SELECT * FROM users WHERE id=?", [id]);
  return user;
};

module.exports = selectUserById;
