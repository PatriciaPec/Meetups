const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {
  selectUserByEmail,
} = require("../../repositories/users/selectUserByEmail");
const { loginUserSchema } = require("../../schemas/users/loginUserSchema");
const { generateError } = require("../../utils/generateError");

const loginUser = async (req, res, next) => {
  try {
    await loginUserSchema.validateAsync(req.body);
    const { email, password } = req.body;

    const user = await selectUserByEmail(email);
    if (!user) {
      generateError("El Email o contraseñas son incorrectos", 400);
    }

    if (user.registrationCode) {
      generateError("El usuario no está activado");
    }

    const passOk = await bcrypt.compare(password, user.password);
    if (!passOk) {
      generateError("El Email o contraseñas son incorrectos", 400);
    }

    const tokenPayLoad = { id: user.id };

    const token = jwt.sign(tokenPayLoad, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).send({
      status: "Has iniciado sesión correctamente",
      data: { token },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = loginUser;
