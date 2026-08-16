import React from "react";
import { Link } from "react-router-dom";
import "./PythonConcept.css";

function VariablesDataTypes() {
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
            <span>Variables & Data Types</span>
          </div>
        </div>

      </header>

      <main className="python-concept-main">

        <section className="python-concept-hero">

          <span className="python-concept-number">
            LESSON 02
          </span>

          <h1>Variables & Data Types</h1>

          <p>
            Learn how Python stores information using variables
            and different data types.
          </p>

        </section>

        <section className="python-concept-card">

          <h2>Variables</h2>

          <p>
            A variable is a name used to store a value.
            Python automatically determines the type of value.
          </p>

          <pre className="python-code">
            <code>{`name = "Subhrajeet"
age = 20
height = 5.8
is_student = True

print(name)
print(age)`}</code>
          </pre>

        </section>

        <section className="python-concept-card">

          <h2>Common Data Types</h2>

          <div className="python-key-points">

            <div className="python-key-point">
              str — Text
            </div>

            <div className="python-key-point">
              int — Integer numbers
            </div>

            <div className="python-key-point">
              float — Decimal numbers
            </div>

            <div className="python-key-point">
              bool — True or False
            </div>

            <div className="python-key-point">
              list — Ordered collection
            </div>

            <div className="python-key-point">
              dict — Key-value collection
            </div>

          </div>

        </section>

        <div className="python-concept-navigation">

          <Link
            to="/python/basics"
            className="python-nav-button"
          >
            ← Previous
          </Link>

          <Link
            to="/python/operators"
            className="python-nav-button primary"
          >
            Next: Operators →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default VariablesDataTypes;