import React from "react";
import { Link } from "react-router-dom";
import "./PythonConcept.css";

function ListsTuples() {
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
            <span>Lists & Tuples</span>
          </div>
        </div>

      </header>

      <main className="python-concept-main">

        <section className="python-concept-hero">

          <span className="python-concept-number">
            LESSON 07
          </span>

          <h1>Lists & Tuples</h1>

          <p>
            Learn how to store multiple values using lists and
            tuples.
          </p>

        </section>

        <section className="python-concept-card">

          <h2>Lists</h2>

          <p>
            Lists are ordered and mutable collections.
          </p>

          <pre className="python-code">
            <code>{`fruits = ["Apple", "Mango", "Banana"]

print(fruits[0])

fruits.append("Orange")

print(fruits)`}</code>
          </pre>

        </section>

        <section className="python-concept-card">

          <h2>Tuples</h2>

          <p>
            Tuples are ordered collections that cannot be
            changed after creation.
          </p>

          <pre className="python-code">
            <code>{`numbers = (10, 20, 30)

print(numbers[1])`}</code>
          </pre>

          <div className="python-key-points">

            <div className="python-key-point">
              Lists are mutable
            </div>

            <div className="python-key-point">
              Tuples are immutable
            </div>

            <div className="python-key-point">
              Both support indexing
            </div>

            <div className="python-key-point">
              Both can store multiple values
            </div>

          </div>

        </section>

        <div className="python-concept-navigation">

          <Link
            to="/python/functions"
            className="python-nav-button"
          >
            ← Previous
          </Link>

          <Link
            to="/python/dictionaries-sets"
            className="python-nav-button primary"
          >
            Next: Dictionaries & Sets →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default ListsTuples;