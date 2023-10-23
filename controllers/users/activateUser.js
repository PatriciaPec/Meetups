const {
  deleteRegistrationCode,
} = require("../../repositories/users/deleteRegistrationCode");

const {
  selectUserByCode,
} = require("../../repositories/users/selectUserByCode");

const { generateError } = require("../../utils/generateError");

const activateUser = async (req, res, next) => {
  try {
    const { registrationCode } = req.params;
    const user = await selectUserByCode(registrationCode);

    if (!user) {
      generateError(
        "El código es inválido o el usuario ya está registrado",
        400
      );
    }

    await deleteRegistrationCode(registrationCode);

    res.status(200).send({
      status: "Ok",
      message: "El usuario está activado correctamente",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = activateUser;
