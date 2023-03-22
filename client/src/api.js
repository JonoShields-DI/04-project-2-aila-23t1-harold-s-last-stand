const api = {
  addNewCourse: async () => {
    const course = {
      name: "Harold's Last Course",
      description: "You thought you knew everything, didn't you?",
    };

    const response = await fetch(`http://localhost:5001/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });
    const result = await response.json();
    console.log(result);
    const newCourse = result;
    return newCourse;
  },

  getCourses: async (body) => {
    const response = await fetch(
      // `http://localhost:5001`,
      `/`,
      {
        method: "GET",
        body: JSON.stringify(body),
      }
    );
    console.log(response);
    const result = await response.json();
    const courses = result;
    console.log(courses);
    return courses;
  },
};

export default api;
