const { getDb } = require("./getDb");

async function main() {
  let connection;

  try {
    connection = await getDb();

    console.log("Conexión realizada ok");

    await connection.query("DROP TABLE IF EXISTS register");
    await connection.query("DROP TABLE IF EXISTS meetups");
    await connection.query("DROP TABLE IF EXISTS users");

    console.log("Las tablas han sido eliminadas");

    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        userId INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        userName VARCHAR(100) UNIQUE,
        email VARCHAR(200) UNIQUE NOT NULL, 
        password VARCHAR(100) NOT NULL,
        biography TEXT(1000),
        avatar VARCHAR(200),
        registrationCode VARCHAR(100)
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS meetups (
        meetupId INT UNSIGNED NOT NULL PRIMARY KEY,
        userId INT UNSIGNED NOT NULL,
        title VARCHAR(100),
        theme VARCHAR(100),
        date DATETIME,
        asistants VARCHAR(500),
        locality VARCHAR(250),
        FOREIGN KEY(userId) REFERENCES users(userId)
      )
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS register (
        registerId INT UNSIGNED AUTO_INCREMENT UNIQUE PRIMARY KEY,
        userId INT UNSIGNED NOT NULL,
        meetupId INT UNSIGNED NOT NULL,
        FOREIGN KEY (userId) REFERENCES users(userId),
        FOREIGN KEY (meetupId) REFERENCES meetups(meetupId)
      )
    `);

    console.log("Se han creado las tablas");
  } catch (error) {
    console.error(error); // Mostrar el error real
  } finally {
    connection.release(); // Liberar la conexión cuando hayas terminado
    process.exit();
  }
}

main();
