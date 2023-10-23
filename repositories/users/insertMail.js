const getDb = require("../../db/getDb");

const insertMail = async (user) => {
  try {
    const { userName, email } = user;

    const pool = getDb;

    const [{ insertId }] = await pool.query(
      "INSERT INTO users ( email ) VALUES (?)",
      [email]
    );
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = insertMail;
