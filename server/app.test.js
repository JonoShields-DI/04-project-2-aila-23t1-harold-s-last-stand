const request = require("supertest");
const app = require("./app");
const courseRepository = require("../src/api/course.repository");
const pool = require("../src/api/db");

describe("GET /", () => {
  afterAll(() => {
    pool.end();
  });
  test("GET / app returns all course data from db when endpoint is called", async () => {
    const expected = [
      {
        id: 1,
        name: "ipsum",
        description: "lorem",
        price: "$20.00",
        location: null,
        registered_course_id: null,
        teachers: null,
      },
    ];
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining(expected));
  });

  test("POST / app adds new course data to db when endpoint is called", async () => {
    const newCourse = await courseRepository.addCourse();

    const result = {
      name: newCourse.name,
      description: newCourse.description,
      price: newCourse.price,
    };
    const response = await request(app).post("/").send(newCourse);
    expect(response.body).toEqual(result);
  });
});
