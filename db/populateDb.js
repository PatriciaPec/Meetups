const bcrypt = require("bcrypt");
const getDb = require("./getDb");

//Para probar la base de datos
const populateDb = async () => {
  try {
    const pool = getDb;

    await pool.query(`INSERT INTO users(email,contrasena,nombre_usuario) VALUES (
        ("cristina@emailfalso.es","${await bcrypt.hash(
          abc123,
          12
        )}","Cristina"),
        ("maria@emailfalso.es","${await bcrypt.hash(abc123, 12)}","María"),
        ("eduardo@emailfalso.es","${await bcrypt.hash(abc123, 12)}","Eduardo"),
        ("jasmine@emailfalso.es","${await bycript.hash(abc123, 12)}","Jasmine"),
        ("ruth@emailfalso.es","${await bcrypt.hash(abc123, 12)}","Ruth"),
        ("alicia@emailfalso.es","${await bcrypt.hash(abc123, 12)}","Alicia"),
        ("diego@emailfalso.es","${await bcrypt.hash(abc123, 12)}","Diego"),
        ("roberto@emailfalso.es","${await bcrypt.hash(abc123, 12)}","Roberto")

    )`);
    console.log(`Los usuarios se han insertado en la base de datos`);

    await pool.query(`INSERT INTO meetups(titulo,id_usuario,tematica,fecha,localidad,) VALUES(
        ("DIA_DE_CINE","1","CINE","20.12.2023","CORUÑA"),
        ("SENDERISMO","3","DEPORTES","24.11.2023","VALENCIA"),
        ("CONCIERTO","2","MUSICA","12.12.2023","MADRID")
    )`);
  } catch (error) {
    console.error(message.error);
  } finally {
    process.exit();
  }
};
populateDb();
