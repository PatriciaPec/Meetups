const getDb = require("../../db/getDb");

const insertUser = async (user) => {
  try {
    const { name, email, encryptedPass, registrationCode } = user;

    const pool = getDb;

    const [{ insertId }] = await pool.query(
      "INSERT INTO users (name, email, password, registrationCode) VALUES (?,?,?,?)",
      [name, email, encryptedPass, registrationCode]
    );
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = insertUser;
