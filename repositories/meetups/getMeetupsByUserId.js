const getDb = require("../../db/getDb");

const getMeetupsByUserId = async (req, res, next) => {
  try {
    const db = getDb();

    const [[meetups]] = await pool.query(
      "SELECT MEETUPS FROM meetups WHERE USER.ID=?",
      [req.params.userId]
    );

    res.json(meetups);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = getMeetupsByUserId;
