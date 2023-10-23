const getDb = require("../../db/getDb");

const selecUserByEmail = async (email) => {
  try {
    const pool = getDb();

    const [[user]] = await pool.query("SELECT * FROM users WHERE email=?", [
      email,
    ]);

    return user;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = selecUserByEmail;
