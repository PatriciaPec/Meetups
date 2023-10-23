const mysql = require("mysql2/promise");
require("dotenv").config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB, MYSQL_PORT } =
  process.env;

let pool;
const getDb = async () => {
  if (!pool) {
    pool = mysql.createPool({
      connectionLimit: 12,
      host: MYSQL_HOST,
      user: MYSQL_USER,
      password: MYSQL_PASS,
      port: MYSQL_PORT,
      database: MYSQL_DB,
      timezone: "local",
    });
  }
  return await pool.getConnection();
};

module.exports = { getDb };
