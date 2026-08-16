import React from "react";
import { Link } from "react-router-dom";
import "./SqlPage.css";

function SqlPage() {
  const concepts = [
    {
      number: "01",
      title: "SQL Basics",
      description:
        "Learn what SQL is, how databases work, and understand tables, rows, and columns.",
      level: "Beginner",
    },
    {
      number: "02",
      title: "SELECT Statement",
      description:
        "Learn how to retrieve specific data from database tables using SELECT.",
      level: "Beginner",
    },
    {
      number: "03",
      title: "WHERE Clause",
      description:
        "Filter records using conditions with comparison and logical operators.",
      level: "Beginner",
    },
    {
      number: "04",
      title: "ORDER BY",
      description:
        "Sort query results in ascending or descending order.",
      level: "Beginner",
    },
    {
      number: "05",
      title: "INSERT",
      description:
        "Learn how to add new records to database tables.",
      level: "Beginner",
    },
    {
      number: "06",
      title: "UPDATE",
      description:
        "Modify existing records safely using UPDATE queries.",
      level: "Beginner",
    },
    {
      number: "07",
      title: "DELETE",
      description:
        "Remove records from tables using DELETE statements.",
      level: "Beginner",
    },
    {
      number: "08",
      title: "Aggregate Functions",
      description:
        "Use COUNT, SUM, AVG, MIN, and MAX to perform calculations on data.",
      level: "Intermediate",
    },
    {
      number: "09",
      title: "GROUP BY & HAVING",
      description:
        "Group records and filter grouped results using GROUP BY and HAVING.",
      level: "Intermediate",
    },
    {
      number: "10",
      title: "SQL JOINs",
      description:
        "Combine information from multiple tables using INNER, LEFT, RIGHT, and FULL JOIN.",
      level: "Intermediate",
    },
    {
      number: "11",
      title: "Subqueries",
      description:
        "Write queries inside other queries to solve complex database problems.",
      level: "Intermediate",
    },
    {
      number: "12",
      title: "Constraints",
      description:
        "Understand PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, and DEFAULT.",
      level: "Intermediate",
    },
    {
      number: "13",
      title: "Views",
      description:
        "Create virtual tables using saved SQL queries.",
      level: "Advanced",
    },
    {
      number: "14",
      title: "Indexes",
      description:
        "Understand database indexes and how they improve query performance.",
      level: "Advanced",
    },
    {
      number: "15",
      title: "Transactions",
      description:
        "Learn COMMIT, ROLLBACK, and transaction management for reliable databases.",
      level: "Advanced",
    },
  ];

  return (
    <div className="sql-page">

      {/* HEADER */}

      <header className="sql-header">

        <Link to="/" className="sql-back">
          ← Back to Languages
        </Link>

        <div className="sql-brand">

          <div className="sql-icon">
            SQL
          </div>

          <div>
            <strong>SQL Learning</strong>
            <span>Database & Query Mastery</span>
          </div>

        </div>

      </header>

      {/* MAIN */}

      <main className="sql-main">

        {/* HERO */}

        <section className="sql-hero">

          <span className="sql-label">
            DATABASE
          </span>

          <h1>
            Master SQL step by step.
          </h1>

          <p>
            Learn SQL from the fundamentals to advanced database
            concepts through practical examples and exercises.
          </p>

        </section>

        {/* CONCEPTS */}

        <section className="sql-concepts">

          <div className="sql-section-heading">

            <div>
              <span>LEARNING PATH</span>

              <h2>
                SQL Concepts
              </h2>
            </div>

            <div className="sql-count">
              {concepts.length} Topics
            </div>

          </div>

          <div className="sql-grid">

            {concepts.map((concept) => (

              <article
                className="sql-card"
                key={concept.number}
              >

                <div className="sql-card-top">

                  <span className="sql-number">
                    {concept.number}
                  </span>

                  <span
                    className={`sql-level ${concept.level.toLowerCase()}`}
                  >
                    {concept.level}
                  </span>

                </div>

                <h3>
                  {concept.title}
                </h3>

                <p>
                  {concept.description}
                </p>

                <button
                  className="sql-button"
                  onClick={() =>
                    alert(
                      `${concept.title} lesson coming soon!`
                    )
                  }
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

export default SqlPage;