import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PythonPage.css";

function PythonPage() {
  const navigate = useNavigate();

  const concepts = [
    {
      title: "Python Basics",
      description:
        "Learn Python syntax and write your first programs.",
      path: "/python/basics",
    },
    {
      title: "Variables & Data Types",
      description:
        "Understand strings, numbers, booleans, and variables.",
      path: "/python/variables",
    },
    {
      title: "Operators",
      description:
        "Work with arithmetic, comparison, and logical operators.",
      path: "/python/operators",
    },
    {
      title: "Conditions",
      description:
        "Control program flow using if, elif, and else.",
      path: "/python/conditions",
    },
    {
      title: "Loops",
      description:
        "Automate repetitive tasks with for and while loops.",
      path: "/python/loops",
    },
    {
      title: "Functions",
      description:
        "Create reusable and organized Python code.",
      path: "/python/functions",
    },
    {
      title: "Lists & Tuples",
      description:
        "Store and manipulate ordered collections of data.",
      path: "/python/lists-tuples",
    },
    {
      title: "Dictionaries & Sets",
      description:
        "Work with key-value data and unique collections.",
      path: "/python/dictionaries-sets",
    },
    {
      title: "Object-Oriented Programming",
      description:
        "Learn classes, objects, inheritance, and encapsulation.",
      path: "/python/oop",
    },
    {
      title: "File Handling",
      description:
        "Read, write, and manage files using Python.",
      path: "/python/file-handling",
    },
  ];

  return (
    <div className="python-page">

      <header className="python-header">

        <Link to="/" className="python-back">
          ← Back to Languages
        </Link>

        <div className="python-brand">

          <div className="python-icon">
            🐍
          </div>

          <div>
            <strong>Python Learning</strong>
            <span>Programming & Development</span>
          </div>

        </div>

      </header>

      <main className="python-main">

        <section className="python-hero">

          <span className="python-label">
            PROGRAMMING
          </span>

          <h1>
            Learn Python from zero.
          </h1>

          <p>
            Build a strong Python foundation through simple
            explanations, examples, and hands-on programming
            concepts.
          </p>

        </section>

        <section>

          <div className="python-heading">

            <div>
              <span>COURSE CONTENT</span>

              <h2>
                Python Concepts
              </h2>
            </div>

            <div className="python-count">
              {concepts.length} Topics
            </div>

          </div>

          <div className="python-grid">

            {concepts.map((concept, index) => (

              <article
                className="python-card"
                key={concept.title}
              >

                <div className="python-card-top">

                  <span className="python-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="python-status">
                    Available
                  </span>

                </div>

                <h3>
                  {concept.title}
                </h3>

                <p>
                  {concept.description}
                </p>

                <button
                  type="button"
                  className="python-button"
                  onClick={() => navigate(concept.path)}
                >
                  Start Learning →
                </button>

              </article>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default PythonPage;