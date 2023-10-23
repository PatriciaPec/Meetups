const bcrypt = require("bcrypt");
const uuid = require("uuid");

const { generateError } = require("../../utils/generateError");
const { sendMail } = require("../../utils/sendMail");

const {
  selectUserByMail,
} = require("../../repositories/users/selectUserByEmail");
const { insertMail } = require("../../repositories/users/insertMail");
const { insertUser } = require("../../repositories/users/insertUser");

const createUser = async (req, res, next) => {
  try {
    await createUserSchema.validateAsync(req.body);
    const { name, email, password } = req.body;

    const repeatMail = await selectUserByMail(email);
    if (repeatMail) {
      generateError("Already exists,400");
    }

    const encryptedPass = await bcrypt.hash(password, 10);

    const registrationCode = uuid.v4();

    const insertId = await insertUser({
      name,
      email,
      encryptedPass,
      registrationCode,
    });

    await sendMail(
      "Bienvenido/a a Meetups",
      `<p>"Gracias por registrarte,puedes activar tu cuenta aquí:"</p><a href="">Activa tu cuenta</a>`,
      email
    );

    res.status(201).send({ status: "Ok", data: { id: insertId, name, email } });

    localStorage.setItem(name, email, password);

    console.log("El usuario ha sido creado correctamente");
  } catch (error) {}
};

module.exports = createUser;
