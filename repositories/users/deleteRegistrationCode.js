const getDb = require("../../db/getDb");

const deleteRegistrationCode = async (registationCode) => {
  const pool = getDb();

  await pool.query(
    "UPDATE users SET registrationCode= NULL WHERE registrationCode=?",
    [registationCode]
  );
};

module.exports = deleteRegistrationCode;
