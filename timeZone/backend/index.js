const express = require("express");
const { dbConnect } = require("./database/db");
const { mettingRouter } = require("./routes/allROutes");
const cors = require("cors");

// Initialize the app and connect to MongoDB
const app = express();
app.use(express.json());
app.use(cors());

// Route to schedule a meeting (receives time in UTC)
app.use("/", mettingRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  dbConnect();
  console.log(`Server is running on port ${PORT}`);
});
