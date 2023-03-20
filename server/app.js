const express = require("express");
const cors = require("cors");
const db = require("./db")
const app = express();

const courseRepository = require("./course.repository");

app.use(cors());
app.use(express.json());


app.post("/",   (req, res, next) => {
  const { description, name, price } = req.body;
    const newCourse = courseRepository.addCourse(
      description,
      name,
      price
    );
    const response = {
      name: newCourse.name,
      description: newCourse.description,
      price: newCourse.price,
    };
    res.json(response);
next()
});

app.get("/", async (req, res) => {
   const allCourses = await courseRepository.getAllCourses();
  return res.status(200).json(allCourses);

});

app.get("/test", (req, res, next) => {
  res.send({ message: "AILA api is getting some courses! 🦒🦒🦒" });
  next();
});

app.post("/test", (req, res, next) => {
  res.send({ message: "AILA is posting a course! 🦒🦒🦒" });
  next();
});

module.exports = app;
