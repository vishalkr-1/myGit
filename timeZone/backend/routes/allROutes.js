const { handleMeeting, findMeeting } = require("../controllers/handleMeeting");
const express = require("express");
const mettingRouter = express.Router();
mettingRouter.post("/Meeting", handleMeeting);
mettingRouter.get("/search", findMeeting);
mettingRouter.get("/", (req, res) => {
  return res.send({ msg: "serveris running" });
});
module.exports = {
  mettingRouter,
};
