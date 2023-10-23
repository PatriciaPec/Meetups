const selectUserById = require("../../repositories/users/selectUserById");

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await selectUserById(id);

    res.send({
      status: "Ok",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUser;
