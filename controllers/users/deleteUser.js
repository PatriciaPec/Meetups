const { generateError } = require("../../utils");
const { userIdSchema } = require("../../schemas/users");
const { selectUserById } = require("../../repositories/users/selectUserById");
const { deleteUserById } = require("../../repositories/users/deleteUserById");

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    await userIdSchema.validateAsync(id);

    const user = await selectUserById(id);

    if (!user) {
      generateError("El usuario no existe", 404);
    }

    await deleteUserById(id);

    res.status(200).send({
      status: "Ok",
      message: "El usuario se ha eliminado correctamente",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteUser;
