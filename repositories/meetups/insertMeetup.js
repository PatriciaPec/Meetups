const getDb = require("../../db/getDb");

const insertMeetup = async (meetup) => {
  try {
    const { title, theme, date, locality } = meetup;

    const pool = getDb();

    const [{ insertId }] = await pool.query(
      "INSERT INTO meetups(title, theme, date, locality) VALUES (?,?,?,?)",
      [title, theme, date, locality]
    );
    return insertId;
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = insertMeetup;
