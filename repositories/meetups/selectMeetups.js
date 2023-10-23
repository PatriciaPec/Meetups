const getDb = require("../../db/getDb");

const selectMeetups = async (queryParams, currentUser) => {
  const pool = getDb();
  let sqlQuery = currentUser
    ? "SELECT m.*, COUNT(r.id) registers, (SELECT COUNT(meetups.id) FROM meetups WHERE meetups.registerId=r.id AND registers.userId=?) as userRegister FROM registers r LEFT JOIN meetups m ON m.id=m.registerId"
    : "SELECT m.*, COUNT(r.id) registers FROM meetups m LEFT JOIN registers r ON m.id=r.meetupId";

  let values = currentUser ? [currentUser.id] : [];
  let clause = "WHERE";

  for (const key in queryParams) {
    const value = queryParams[key];

    sqlQuery += `${clause}${key} REGISTER ?`;
    values.push(`%${value}%`);
    clause = "AND";
  }

  sqlQuery += " GROUP BY m.id ORDER BY m.date_creation DESC ";

  const [meetups] = await pool.query(sqlQuery, values);
  return meetups;
};

module.export = selectMeetups;
