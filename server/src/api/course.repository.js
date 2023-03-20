const pool = require("../db");

const allCourses = `
SELECT * FROM courses`;

const newCourse = `
INSERT INTO courses 
(description, name, price) 
VALUES($1, $2, $3)
RETURNING *`;

const values = [
  "You thought you knew everything, didn't you?",
  "Everything I know about law",
  "$20.00",
];

module.exports = {
  getAllCourses: async () => {
    const result = await pool.query(allCourses);
    console.log(`getAllCourses returns:`, result);
    return result.rows;
  },

  addCourse: async () => {
    const result = await pool.query(newCourse, values);
    console.log(`addCourse returns:`, result);
    return result.rows;
  },
};
