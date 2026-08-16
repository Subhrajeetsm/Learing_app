import React from "react";
import { Link } from "react-router-dom";
import "./PythonConcept.css";

function DictionariesSets() {
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
            <span>Dictionaries & Sets</span>
          </div>
        </div>

      </header>

      <main className="python-concept-main">

        <section className="python-concept-hero">

          <span className="python-concept-number">
            LESSON 08
          </span>

          <h1>Dictionaries & Sets</h1>

          <p>
            Work with key-value pairs and collections of unique
            values.
          </p>

        </section>

        <section className="python-concept-card">

          <h2>Dictionaries</h2>

          <p>
            Dictionaries store data as key-value pairs.
          </p>

          <pre className="python-code">
            <code>{`student = {
    "name": "Subhrajeet",
    "age": 20,
    "course": "CSE"
}

print(student["name"])`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            Subhrajeet
          </div>

        </section>

        <section className="python-concept-card">

          <h2>Sets</h2>

          <p>
            Sets contain unique values and do not allow
            duplicate elements.
          </p>

          <pre className="python-code">
            <code>{`numbers = {1, 2, 3, 3, 4}

print(numbers)`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            {"{1, 2, 3, 4}"}
          </div>

        </section>

        <div className="python-concept-navigation">

          <Link
            to="/python/lists-tuples"
            className="python-nav-button"
          >
            ← Previous
          </Link>

          <Link
            to="/python/oop"
            className="python-nav-button primary"
          >
            Next: OOP →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default DictionariesSets;