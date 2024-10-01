const { Meeting } = require("../models/meeting.models");
// import moment from "moment-timezone";
const moment = require("moment-timezone");
let handleMeeting = async (req, res) => {
  const { title, timeUTC } = req.body;

  console.log(title);
  // Save meeting time in UTC in the database
  const meeting = new Meeting({ title, timeUTC: new Date(timeUTC) });
  await meeting.save();

  res.status(201).send("Meeting scheduled successfully!");
};

let findMeeting = async (req, res) => {
  try {
    const meetings = await Meeting.find({});

    const meetingsWithLocalTime = meetings.map((meeting) => {
      const localTime = moment.tz(meeting.timeUTC, moment.tz.guess()).format();
      return {
        title: meeting.title,
        localTime,
        timeUTC: meeting.timeUTC,
      };
    });

    res.status(200).json(meetingsWithLocalTime);
  } catch (error) {
    console.error("Error fetching meetings:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching meetings." });
  }
};

module.exports = {
  handleMeeting,
  findMeeting,
};
