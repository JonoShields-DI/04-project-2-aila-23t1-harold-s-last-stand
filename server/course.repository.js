const pool = require("./db");

const newCourse = `
INSERT INTO courses 
(description, name, price) 
VALUES($1, $2, $3)
RETURNING *`;

const allCourses = ` SELECT * FROM courses`;
const values = [
  "You thought you knew everything, didn't you?",
  "Everything I know about law",
  20.00
];

module.exports = {
  addCourse: async () => {
    const result = await pool.query(newCourse, values);
    return result.rows;
  },
  getAllCourses: async () => {
    const result = await pool.query(allCourses);
    return result.rows;
  },
};
