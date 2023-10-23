const insertMeetup = require("./insertMeetup");
const selectMeetupById = require("./selectMeetupById");
const selectMeetups = require("./selectMeetups");
const selectMeetupsByUser = require("./selectMeetupsByUser");
const updateMeetupById = require("./updateMeetupById");
const deleteMeetupById = require("./deleteMeetupById");
const getMeetupsByUserId = require("./getMeetupsByUserId");

module.exports = {
  insertMeetup,
  selectMeetupById,
  selectMeetups,
  selectMeetupsByUser,
  updateMeetupById,
  deleteMeetupById,
  getMeetupsByUserId,
};
