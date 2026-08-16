import React from "react";
import { Link } from "react-router-dom";
import "./PythonConcept.css";

function Loops() {
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
            <span>Loops</span>
          </div>
        </div>

      </header>

      <main className="python-concept-main">

        <section className="python-concept-hero">

          <span className="python-concept-number">
            LESSON 05
          </span>

          <h1>Loops</h1>

          <p>
            Loops allow you to execute a block of code multiple
            times.
          </p>

        </section>

        <section className="python-concept-card">

          <h2>for Loop</h2>

          <pre className="python-code">
            <code>{`for i in range(1, 6):
    print(i)`}</code>
          </pre>

          <div className="python-output">
            <span className="python-output-title">
              Output
            </span>

            1{"\n"}
            2{"\n"}
            3{"\n"}
            4{"\n"}
            5
          </div>

        </section>

        <section className="python-concept-card">

          <h2>while Loop</h2>

          <pre className="python-code">
            <code>{`count = 1

while count <= 5:
    print(count)
    count += 1`}</code>
          </pre>

        </section>

        <div className="python-concept-navigation">

          <Link
            to="/python/conditions"
            className="python-nav-button"
          >
            ← Previous
          </Link>

          <Link
            to="/python/functions"
            className="python-nav-button primary"
          >
            Next: Functions →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Loops;