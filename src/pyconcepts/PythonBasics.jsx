import React from "react";
import { Link } from "react-router-dom";
import "./PythonConceptbasic.css";

function PythonBasics() {
  return (
    <div className="python-basics-page">

      {/* Back Button */}
      <Link to="/python" className="back-button">
        ← Back to Python
      </Link>

      {/* Hero Section */}
      <section className="python-hero">
        <div>
          <span className="lesson-badge">PYTHON • BEGINNER</span>

          <h1>Python Basics</h1>

          <p>
            Learn the fundamentals of Python programming, from your first
            program to variables, data types, operators, and basic input/output.
          </p>
        </div>
      </section>

      {/* What is Python */}
      <section className="concept-section">
        <h2>🐍 What is Python?</h2>

        <p>
          Python is a high-level, interpreted programming language known for
          its simple syntax, readability, and versatility. It is widely used
          in web development, automation, data science, artificial intelligence,
          machine learning, and software development.
        </p>

        <div className="info-card">
          <h3>Why Learn Python?</h3>

          <ul>
            <li>Easy and beginner-friendly syntax</li>
            <li>Large standard library</li>
            <li>Used in many areas of technology</li>
            <li>Huge developer community</li>
            <li>Excellent language for learning programming</li>
          </ul>
        </div>
      </section>

      {/* First Program */}
      <section className="concept-section">
        <h2>🚀 Your First Python Program</h2>

        <p>
          The <code>print()</code> function is used to display information
          on the screen.
        </p>

        <pre>
{`print("Hello, World!")`}
        </pre>

        <div className="output-box">
          <span>Output</span>
          <code>Hello, World!</code>
        </div>
      </section>

      {/* Variables */}
      <section className="concept-section">
        <h2>📦 Variables</h2>

        <p>
          Variables are used to store data. Python automatically determines
          the type of data stored in a variable.
        </p>

        <pre>
{`name = "Subhrajeet"
age = 20
height = 5.8

print(name)
print(age)
print(height)`}
        </pre>
      </section>

      {/* Data Types */}
      <section className="concept-section">
        <h2>🔤 Basic Data Types</h2>

        <div className="data-type-grid">

          <div className="type-card">
            <h3>int</h3>
            <p>Integer numbers</p>
            <pre>{`age = 20`}</pre>
          </div>

          <div className="type-card">
            <h3>float</h3>
            <p>Decimal numbers</p>
            <pre>{`price = 99.50`}</pre>
          </div>

          <div className="type-card">
            <h3>str</h3>
            <p>Text values</p>
            <pre>{`name = "Python"`}</pre>
          </div>

          <div className="type-card">
            <h3>bool</h3>
            <p>True or False</p>
            <pre>{`is_student = True`}</pre>
          </div>

        </div>
      </section>

      {/* Input */}
      <section className="concept-section">
        <h2>⌨️ Taking User Input</h2>

        <p>
          Python provides the <code>input()</code> function to take input
          from the user.
        </p>

        <pre>
{`name = input("Enter your name: ")

print("Hello", name)`}
        </pre>

        <div className="output-box">
          <span>Example</span>
          <code>
            Enter your name: Subhrajeet<br />
            Hello Subhrajeet
          </code>
        </div>
      </section>

      {/* Operators */}
      <section className="concept-section">
        <h2>➕ Basic Operators</h2>

        <div className="operator-table">

          <div className="operator-row operator-header">
            <span>Operator</span>
            <span>Meaning</span>
            <span>Example</span>
          </div>

          <div className="operator-row">
            <span>+</span>
            <span>Addition</span>
            <span>10 + 5</span>
          </div>

          <div className="operator-row">
            <span>-</span>
            <span>Subtraction</span>
            <span>10 - 5</span>
          </div>

          <div className="operator-row">
            <span>*</span>
            <span>Multiplication</span>
            <span>10 * 5</span>
          </div>

          <div className="operator-row">
            <span>/</span>
            <span>Division</span>
            <span>10 / 5</span>
          </div>

          <div className="operator-row">
            <span>**</span>
            <span>Power</span>
            <span>2 ** 3</span>
          </div>

          <div className="operator-row">
            <span>%</span>
            <span>Modulus</span>
            <span>10 % 3</span>
          </div>

        </div>
      </section>

      {/* Comments */}
      <section className="concept-section">
        <h2>💬 Comments</h2>

        <p>
          Comments are ignored by Python and are used to explain code.
        </p>

        <pre>
{`# This is a comment

name = "Python"  # Store the name`}
        </pre>
      </section>

      {/* Summary */}
      <section className="summary-card">
        <h2>🎯 What You Learned</h2>

        <ul>
          <li>What Python is</li>
          <li>How to write your first Python program</li>
          <li>Variables and data types</li>
          <li>User input</li>
          <li>Basic operators</li>
          <li>Python comments</li>
        </ul>

        <Link to="/python" className="next-button">
          Continue Learning →
        </Link>
      </section>

    </div>
  );
}

export default PythonBasics;