const getPool = require("../meetups/selectMeetupById");

const selectMeetupsByUser = async (user) => {
  const [meetup] = await getPool.query(
    "SELECT meetups FROM  MEETUPS WHERE user=?",
    [user]
  );

  return meetup;
};

module.exports = selectMeetupsByUser;
