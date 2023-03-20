const express = require("express");
const cors = require("cors");
const api = require("./api");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", api);

app.get("/test", (req, res, next) => {
  res.send({ message: "AILA api is getting some courses! 🦒🦒🦒" });
  next();
});

app.post("/test", (req, res, next) => {
  res.send({ message: "AILA is posting a course! 🦒🦒🦒" });
  next();
});

module.exports = app;
