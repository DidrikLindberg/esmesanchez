require ("dotenv").config();
const mongoose = require("mongoose");


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/esmesanchezDB"
);


module.exports = mongoose.connection;
