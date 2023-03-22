const api = {
  addNewCourse: async () => {
    const course = {
      name: "Harold's Last Course",
      description: "Another course description",
      price: 5000000.0,
    };

    await fetch(`/`, {
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
    });

    const newCourse = {
      course,
      name: course.name,
      description: course.description,
      price: course.price,
    };

    return newCourse;
  },

  getCourses: async () => {
    const response = await fetch(`/`, {
      method: "GET",
    });
    const result = await response.json();
    console.log(result);
    return result;
  },
};

export default api;
