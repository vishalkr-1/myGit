const mongoose = require("mongoose");
let dbConnect = async () => {
  mongoose.connect("mongodb://localhost:27017/meetings");
};
module.exports = {
  dbConnect,
};
