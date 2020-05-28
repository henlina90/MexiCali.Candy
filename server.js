// import express which is the main library to help us make our server
const express = require("express");

// import dotenv to be able to use private environment variables
require("dotenv").config();

// import router and all routes
// const indexRouter = require("./routes/index");

// import path library to specify directory paths
const path = require("path");

// import cors library to allow cross origin requests
const cors = require("cors");

//import a body-parser library to help server read data
const bodyParser = require("body-parser");

// create a PORT variable using a environment variable.
// if env variable is not available 8000 is used
const port = process.env.PORT || 8000;

// Code below initializes the app which is the server
const app = express();

// Code lets the app use the bodyParser library we imported in
app.use(bodyParser.urlencoded({ extended: true }));

// Code lets the app use the html,css,js in the public folder
app.use(express.static("public"));

// Code below lets the app use the Cors library
app.use(cors());

// Code below lets the app use all the routes imported earlier
// All requests have to go through the /api e.g /api/sendEmail
// app.use("/api", indexRouter);

// Code belows lets all paths /* reroute back to index.html
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// App is finally initialized on a port
app.listen(port, () => console.log(`Server listening on port ${port}`));
