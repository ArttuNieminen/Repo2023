const createError = require("http-errors");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const indexRouter = require("./Router/index");
const userRouter = require("./Router/users");
const app = express();
app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/users", userRouter);

//tietokantaa yhteys
mongoose.connect("mongodb+srv://testikayttaja:KoiraOjassa13@tietokanta-001.mjivkfv.mongodb.net/test");

mongoose.connection
  .once("open", function () {
    console.log("Connected");
  })
  .on("error", function (error) {
    console.log("CONNECTION ERROR:", error);
  });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

//kuuntelee 3000 porttia, sekä yhteys on avattu
app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

module.exports = app;
