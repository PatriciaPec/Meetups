const handleNotFound = (req, res, next) => {
  res.status(404).send({ status: "error", message: "Not Found" });
  next();
};

module.exports = handleNotFound;
