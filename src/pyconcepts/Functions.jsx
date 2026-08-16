import React from "react";
import { Link } from "react-router-dom";
import "./PythonConcept.css";

function Functions() {
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
            <span>Functions</span>
          </div>
        </div>

      </header>

      <main className="python-concept-main">

        <section className="python-concept-hero">

          <span className="python-concept-number">
            LESSON 06
          </span>

          <h1>Functions</h1>

          <p>
            Functions are reusable blocks of code that perform
            specific tasks.
          </p>

        </section>

        <section className="python-concept-card">

          <h2>Creating a Function</h2>

          <pre className="python-code">
            <code>{`def greet():
    print("Hello, Python!")

greet()`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            Hello, Python!
          </div>

        </section>

        <section className="python-concept-card">

          <h2>Parameters and Return Values</h2>

          <pre className="python-code">
            <code>{`def add(a, b):
    return a + b

result = add(10, 20)

print(result)`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            30
          </div>

        </section>

        <div className="python-concept-navigation">

          <Link
            to="/python/loops"
            className="python-nav-button"
          >
            ← Previous
          </Link>

          <Link
            to="/python/lists-tuples"
            className="python-nav-button primary"
          >
            Next: Lists & Tuples →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Functions;