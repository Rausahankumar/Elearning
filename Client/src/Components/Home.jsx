import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar">
        <h2 className="logo">E-Learning</h2>
        <ul>
          <li>Home</li>
          <li>Courses</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="hero">
        <h1 className="title">
          Learn Anytime, <span>Anywhere</span>
        </h1>
        <p className="subtitle">
          Upgrade your skills with interactive courses, expert instructors,
          and beautiful learning experiences.
        </p>

        <div className="buttons">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">Browse Courses</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
