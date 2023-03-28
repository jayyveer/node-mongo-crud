const express = require("express"); // import express library
const morgan = require("morgan"); // import morgan library for logging
const bodyParser = require("body-parser"); // import body-parser middleware for parsing request data
const mongoose = require("mongoose"); // import mongoose library for MongoDB connectivity
require("dotenv").config(); // load environment variables from .env file
const app = express(); // create an instance of express application

const EmployeeRoute = require("./routes/Employee"); // import Employee route module

mongoose.connect(process.env.MONGODB_URL, {
  // connect to MongoDB using the URL and options
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // get a reference to the database connection object

db.on("error", (err) => {
  // log any errors that occur when connecting to the database
  console.log(err);
});

db.once("open", () => {
  // log a message when the connection is established successfully
  console.log("DB Connection Established");
});

app.use(morgan("dev")); // use morgan middleware for HTTP request logging
app.use(bodyParser.urlencoded({ extended: true })); // use body-parser middleware for handling URL-encoded request data
app.use(bodyParser.json()); // use body-parser middleware for handling JSON request data

const PORT = process.env.PORT || 3001; // set the server port number to the value of process.env.PORT or 3000 if not defined

app.listen(PORT, () => {
  // start the server and listen on the specified port
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/employee", EmployeeRoute); // mount the Employee route module at the '/api/employee' URL path

app.use((err, req, res, next) => {
  // error handling middleware for catching unhandled exceptions
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});


/*Reference Link-
  https://www.youtube.com/watch?v=TIYWUSkKj00
*/