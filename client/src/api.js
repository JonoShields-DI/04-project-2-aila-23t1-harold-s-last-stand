const api = {
  addNewCourse: async () => {
    const course = {
      name: "Harold's Last Course",
      description: "You thought you knew everything, didn't you?",
      price: 5000000.0,
    };

    await fetch(
      // `/`,
      `http://localhost:5001/`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        courses: JSON.stringify(course, [
          course.name,
          course.description,
          course.price,
        ]),
      }
    );

    const newCourse = {
      course,
      name: course.name,
      description: course.description,
      price: course.price,
    };

    console.log(newCourse);

    return newCourse;
  },

  getCourses: async () => {
    const response = await fetch(
      // `/`,
      `http://localhost:5001`,
      {
        method: "GET",
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  },
};

export default api;
