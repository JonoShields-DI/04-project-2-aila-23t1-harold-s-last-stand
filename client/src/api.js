const api = {
  addNewCourse: async () => {
    const REACT_APP_URL = `http://localhost:5001`;
    const course = {
      name: "Harold's Last Course",
      description: "You thought you knew everything, didn't you?",
      price: 5000000.0,
    };

    await fetch(
      // `/`,
      `${REACT_APP_URL}/`,
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

    return newCourse;
  },

  getCourses: async () => {
    const REACT_APP_URL = `http://localhost:5001`;
    const response = await fetch(
      // `/`,
      `${REACT_APP_URL}/`,
      {
        method: "GET",
      }
    );
    const result = await response.json();

    return result;
  },
};

export default api;
