import React, { useState } from "react";
import "./App.css"; // Uses the CSS I gave earlier

const courses = [
  { id: 1, title: "React Basics", description: "Learn the basics of ReactJS.", assessment: "What is JSX?" },
  { id: 2, title: "Advanced React", description: "Dive deeper into ReactJS.", assessment: "Explain hooks in React." },
];

function App() {
  const [user, setUser] = useState("");
  const [registered, setRegistered] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [answer, setAnswer] = useState("");

  const handleRegister = () => {
    if (user.trim()) setRegistered(true);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setAnswer("");
  };

  return (
    <div className="app-wrapper">
      {!registered ? (
        <div className="card">
          <h2>User Registration</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
        </div>
      ) : selectedCourse ? (
        <div className="card">
          <h2>{selectedCourse.title}</h2>
          <p>{selectedCourse.description}</p>
          <h3>Assessment</h3>
          <p>{selectedCourse.assessment}</p>
          <input
            type="text"
            placeholder="Your answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button onClick={() => alert("Answer submitted: " + answer)}>
            Submit Answer
          </button>
          <button
            className="secondary"
            onClick={() => setSelectedCourse(null)}
          >
            Back to Courses
          </button>
        </div>
      ) : (
        <div className="card">
          <h2>Available Courses</h2>
          {courses.map((course) => (
            <div
              key={course.id}
              className="course-card"
              onClick={() => handleCourseSelect(course)}
            >
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
