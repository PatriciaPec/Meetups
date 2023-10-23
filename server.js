require("dotenv").config();
const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const cors = require("cors");

const { PORT } = process.env;

app.use(express.json());
app.use(fileUpload());
app.use(cors());

const toggleMeetupRegister = require("./controllers/register/toggleMeetupRegister");

//Aquí requerimos los controladores de los users
const {
  activateUser,
  createUser,
  deleteUser,
  getMe,
  getUser,
  loginUser,
} = require("./controllers/users");

//Aquí requerimos los controladores de las meetups
const {
  createMeetup,
  deleteMeetup,
  editMeetup,
  getMeetup,
  getMeetups,
} = require("./controllers/meetups");

const { handleError } = require("./middlewares/handleError");
const { handleNotFound } = require("./middlewares/handleNotFound");
const { validateAuth } = require("./middlewares/validateAuth");

const { selectUserById } = require("./repositories/users/selectUserById");
app.get("/", (req, res) => {
  res.send(200);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
