import React, { useState } from "react";

import "./App.css";
import api from "./api";

const App = () => {
	const [addCourse, setAddCourse] = useState({});
	const [getCourses, setGetCourses] = useState({});
	const [postRequest, setPostRequest] = useState({});
	const [getRequest, setGetRequest] = useState([]);

	const handleNewCourse = async (e) => {
		e.preventDefault();
		const response = await api.addNewCourse();
		setAddCourse(alert(response));
	};

	const handleGetCourses = async (e) => {
		e.preventDefault();
		const response = await api.getCourses();
		setGetCourses(alert(response));
	};

	const handlePostRequest = async (e) => {
		e.preventDefault();
		const response = await api.postRequest();
		setPostRequest(alert(response));
	};

	const handleGetRequest = async (e) => {
		e.preventDefault();
		const response = await api.getRequest();
		setGetRequest(alert(response));
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
					value={postRequest}
					onClick={handlePostRequest}
				>
					POST request
				</button>
				<button
					className="button"
					id={"button"}
					value={getRequest}
					onClick={handleGetRequest}
				>
					GET request
				</button>
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
