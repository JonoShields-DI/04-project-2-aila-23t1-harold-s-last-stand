const express = require("express");
const router = express.Router();
const courseRepository = require("./course.repository");

router.get("/", async (req, res) => {
  try {
    const allCourses = await courseRepository.getAllCourses();
    return res.status(200).json(allCourses);
  } catch (error) {
    throw Error(error);
  }
});

// let course = {
//   name: "Everything I know about law",
//   description: "You thought you knew everything, didn't you?",
//   price: "$20.00",
// };

router.post("/", async (req, res) => {
  const { description, name, price } = req.body;

  try {
    const newCourse = await courseRepository.addCourse(
      description,
      name,
      price
    );

    const response = {
      name: newCourse.name,
      description: newCourse.description,
      price: newCourse.price,
    };

    return res.json(response);
  } catch (error) {
    throw Error(error);
  }
});

module.exports = router;
