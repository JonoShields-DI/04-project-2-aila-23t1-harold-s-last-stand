const express = require("express");

const courses = require("./courses");

const router = express.Router();

router.use("/", courses);

module.exports = router;
