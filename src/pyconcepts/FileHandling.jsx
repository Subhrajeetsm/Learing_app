import React from "react";
import { Link } from "react-router-dom";
import "./PythonConcept.css";

function FileHandling() {
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
            <span>File Handling</span>
          </div>
        </div>

      </header>

      <main className="python-concept-main">

        <section className="python-concept-hero">

          <span className="python-concept-number">
            LESSON 10
          </span>

          <h1>File Handling</h1>

          <p>
            Learn how to create, read, write, and manage files
            using Python.
          </p>

        </section>

        <section className="python-concept-card">

          <h2>Reading a File</h2>

          <pre className="python-code">
            <code>{`file = open("data.txt", "r")

content = file.read()

print(content)

file.close()`}</code>
          </pre>

        </section>

        <section className="python-concept-card">

          <h2>Writing to a File</h2>

          <pre className="python-code">
            <code>{`file = open("data.txt", "w")

file.write("Hello Python!")

file.close()`}</code>
          </pre>

        </section>

        <section className="python-concept-card">

          <h2>Recommended Approach</h2>

          <p>
            The with statement automatically closes the file
            after the operation is complete.
          </p>

          <pre className="python-code">
            <code>{`with open("data.txt", "r") as file:
    content = file.read()

print(content)`}</code>
          </pre>

        </section>

        <div className="python-concept-navigation">

          <Link
            to="/python/oop"
            className="python-nav-button"
          >
            ← Previous
          </Link>

          <Link
            to="/python"
            className="python-nav-button primary"
          >
            Finish Course →
          </Link>

        </div>

      </main>

    </div>
  );
}

export default FileHandling;