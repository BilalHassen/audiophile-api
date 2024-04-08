const express = require("express");
const app = express();

// Enable Cross-Origin Resource Sharing (CORS) middleware
const cors = require("cors");
app.use(cors());

//import dotenv module into the app
// call config method on dotenv module parse the variables and
// add them to the process.env object
require("dotenv").config();
const { PORT } = process.env;

// default home route
app.get("/", (req, res) => {
  res.send("Welcome to the audiophile api");
});

app.listen(PORT, (req, res) => {
  console.log("audiophile server running");
});
