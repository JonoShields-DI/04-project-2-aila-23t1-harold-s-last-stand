const pool = require("./db");

const newCourse = `
INSERT INTO courses 
(description, name, price) 
VALUES($1, $2, $3)
RETURNING *`;

const allCourses = 'SELECT * FROM courses';

module.exports = {
   addCourse: async () => {
    const result = await pool.query(newCourse);
    console.log(`addCourse returns:`, result);
    return result.rows;
  },
  getAllCourses: async () => {
    const result = await pool.query(allCourses);
    console.log(`getAllCourses returns:`, result);
    return result.rows;
  }
};
