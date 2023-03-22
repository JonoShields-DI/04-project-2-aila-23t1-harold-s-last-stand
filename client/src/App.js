import React, { useState } from "react";

import "./App.css";
import api from "./api";

const App = () => {
  const [addCourse, setAddCourse] = useState({});
  const [getCourses, setGetCourses] = useState({});

  const handleNewCourse = async (e) => {
    e.preventDefault();
    const response = await api.addNewCourse();
    console.log(response);
    setAddCourse(JSON.stringify(response));
  };

  const handleGetCourses = async () => {
    const response = await api.getCourses();
    console.log(response);
    setGetCourses(JSON.stringify(response));
  };

  return (
    <div className="app">
      <header className="header">
        {" "}
        <h1>AILA</h1>
      </header>
      <main className="main-container">
        <button
          className="button"
          id={"button"}
          value={addCourse}
          onClick={handleNewCourse}
        >
          ADD course to db
        </button>
        <button
          className="button"
          id={"button"}
          value={getCourses}
          onClick={handleGetCourses}
        >
          GET courses
        </button>
      </main>
      <footer className="footer">© Harold's Last Stand 2023</footer>
    </div>
  );
};

export default App;
