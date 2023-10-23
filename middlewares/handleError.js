const handleError = (error, req, res, next) => {
  console.error(error.message);
  res
    .status(error.statusCode || 500)
    .send({ status: "error", message: error.message });
  next();
};

module.exports = handleError;
