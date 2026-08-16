import React from "react";
import { Link } from "react-router-dom";
import "./PythonConcept.css";

function OOP() {
  return (
    <div className="python-concept-page">

      <header className="python-concept-header">

        <Link to="/python" className="python-concept-back">
          ← Back to Python
        </Link>

        <div className="python-concept-brand">
          <div className="python-concept-icon">🐍</div>

          <div className="python-concept-brand-text">
            <strong>Python Learning</strong>
            <span>Object-Oriented Programming</span>
          </div>
        </div>

      </header>

      <main className="python-concept-main">

        <section className="python-concept-hero">

          <span className="python-concept-number">
            LESSON 09
          </span>

          <h1>Object-Oriented Programming</h1>

          <p>
            Learn how Python uses classes and objects to create
            organized and reusable programs.
          </p>

        </section>

        <section className="python-concept-card">

          <h2>Classes and Objects</h2>

          <pre className="python-code">
            <code>{`class Student:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print(self.name)
        print(self.age)


student = Student("Subhrajeet", 20)

student.display()`}</code>
          </pre>

        </section>

        <section className="python-concept-card">

          <h2>Important OOP Concepts</h2>

          <div className="python-key-points">

            <div className="python-key-point">
              Classes
            </div>

            <div className="python-key-point">
              Objects
            </div>

            <div className="python-key-point">
              Encapsulation
            </div>

            <div className="python-key-point">
              Inheritance
            </div>

            <div className="python-key-point">
              Polymorphism
            </div>

            <div className="python-key-point">
              Abstraction
            </div>

          </div>

        </section>

        <div className="python-concept-navigation">

          <Link
            to="/python/dictionaries-sets"
            className="python-nav-button"
          >
            ← Previous
          </Link>

          <Link
            to="/python/file-handling"
            className="python-nav-button primary"
          >
            Next: File Handling →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default OOP;