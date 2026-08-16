import React from "react";
import { Link } from "react-router-dom";
import "./PythonConcept.css";

function Conditions() {
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
            <span>Conditional Statements</span>
          </div>
        </div>

      </header>

      <main className="python-concept-main">

        <section className="python-concept-hero">

          <span className="python-concept-number">
            LESSON 04
          </span>

          <h1>Conditions</h1>

          <p>
            Use conditional statements to make decisions in
            your Python programs.
          </p>

        </section>

        <section className="python-concept-card">

          <h2>if Statement</h2>

          <pre className="python-code">
            <code>{`age = 20

if age >= 18:
    print("You are an adult")`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            You are an adult
          </div>

        </section>

        <section className="python-concept-card">

          <h2>if, elif and else</h2>

          <pre className="python-code">
            <code>{`marks = 85

if marks >= 90:
    print("Excellent")
elif marks >= 60:
    print("Good")
else:
    print("Needs improvement")`}</code>
          </pre>

        </section>

        <div className="python-concept-navigation">

          <Link
            to="/python/operators"
            className="python-nav-button"
          >
            ← Previous
          </Link>

          <Link
            to="/python/loops"
            className="python-nav-button primary"
          >
            Next: Loops →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Conditions;