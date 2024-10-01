const mongoose = require("mongoose");
const meetingSchema = new mongoose.Schema({
  title: String,
  timeUTC: Date,
});

const Meeting = mongoose.model("Meeting", meetingSchema);
module.exports = {
  Meeting,
};
