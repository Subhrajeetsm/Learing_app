import React from "react";
import { Link } from "react-router-dom";
import "./JavaPage.css";

function JavaPage() {
  return (
    <div className="java-page">

      {/* HEADER */}

      <header className="java-header">

        <Link to="/" className="java-brand">

          <div className="java-logo">
            ☕
          </div>

          <div>
            <strong>Java Learning Lab</strong>
            <span>Interactive Java Playground</span>
          </div>

        </Link>

        <nav className="java-nav">

          <Link to="/">
            Languages
          </Link>

          <Link to="/cpp">
            C++
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/feedback">
            Feedback
          </Link>

        </nav>

      </header>

      {/* MAIN */}

      <main className="java-container">

        <section className="java-hero">

          <span className="java-label">
            JAVA PROGRAMMING
          </span>

          <h1>
            Learn Java
          </h1>

          <p>
            Explore Java programming concepts with
            simple explanations and practical examples.
          </p>

        </section>

        {/* COMING SOON */}

        <section className="java-coming">

          <div className="java-coming-icon">
            ☕
          </div>

          <span className="java-badge">
            COMING SOON
          </span>

          <h2>
            Java Learning is on the way 🚀
          </h2>

          <p>
            We are currently building the Java learning
            section. Soon you will be able to explore
            Java OOP, classes, objects, inheritance,
            constructors and much more.
          </p>

          <div className="java-topics">

            <span>Classes & Objects</span>
            <span>Constructors</span>
            <span>Inheritance</span>
            <span>Polymorphism</span>
            <span>Encapsulation</span>
            <span>Abstraction</span>

          </div>

          <Link
            to="/cpp"
            className="back-cpp-button"
          >
            ← Continue Learning C++
          </Link>

        </section>

      </main>

    </div>
  );
}

export default JavaPage;