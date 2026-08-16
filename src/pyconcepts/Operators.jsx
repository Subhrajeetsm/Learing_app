import React from "react";
import { Link } from "react-router-dom";
import "./PythonConcept.css";

function Operators() {
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
            <span>Operators</span>
          </div>
        </div>

      </header>

      <main className="python-concept-main">

        <section className="python-concept-hero">

          <span className="python-concept-number">
            LESSON 03
          </span>

          <h1>Operators</h1>

          <p>
            Operators allow you to perform calculations,
            comparisons, and logical operations.
          </p>

        </section>

        <section className="python-concept-card">

          <h2>Arithmetic Operators</h2>

          <pre className="python-code">
            <code>{`a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a % b)
print(a ** b)`}</code>
          </pre>

          <div className="python-key-points">

            <div className="python-key-point">
              + Addition
            </div>

            <div className="python-key-point">
              - Subtraction
            </div>

            <div className="python-key-point">
              * Multiplication
            </div>

            <div className="python-key-point">
              / Division
            </div>

            <div className="python-key-point">
              % Modulus
            </div>

            <div className="python-key-point">
              ** Exponentiation
            </div>

          </div>

        </section>

        <section className="python-concept-card">

          <h2>Comparison & Logical Operators</h2>

          <pre className="python-code">
            <code>{`age = 20

print(age >= 18)
print(age > 10 and age < 30)
print(age == 20)`}</code>
          </pre>

        </section>

        <div className="python-concept-navigation">

          <Link
            to="/python/variables"
            className="python-nav-button"
          >
            ← Previous
          </Link>

          <Link
            to="/python/conditions"
            className="python-nav-button primary"
          >
            Next: Conditions →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Operators;