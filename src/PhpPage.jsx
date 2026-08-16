import React from "react";
import { Link } from "react-router-dom";
import "./PhpPage.css";

function PhpPage() {
  const concepts = [
    {
      title: "PHP Basics",
      description:
        "Understand PHP syntax, structure, and server-side programming.",
    },
    {
      title: "Variables & Data Types",
      description:
        "Work with variables, strings, numbers, arrays, and booleans.",
    },
    {
      title: "Operators",
      description:
        "Learn arithmetic, comparison, logical, assignment, and increment operators.",
    },
    {
      title: "Conditions",
      description:
        "Control program execution using if, else, elseif, and switch.",
    },
    {
      title: "Loops",
      description:
        "Use for, while, do-while, and foreach loops to repeat tasks.",
    },
    {
      title: "Functions",
      description:
        "Create reusable functions and understand parameters and return values.",
    },
    {
      title: "Arrays",
      description:
        "Store, access, and manipulate indexed and associative collections.",
    },
    {
      title: "Forms & Validation",
      description:
        "Process HTML forms and validate user input using PHP.",
    },
    {
      title: "PHP + MySQL",
      description:
        "Connect PHP applications to MySQL databases and execute queries.",
    },
    {
      title: "Sessions & Cookies",
      description:
        "Manage user sessions, cookies, authentication, and persistent data.",
    },
  ];

  const handleTopicClick = (title) => {
    alert(
      `🚧 ${title}\n\nThis topic is coming soon!\n\nWe are currently preparing the lesson for you.`
    );
  };

  return (
    <div className="php-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="php-header">

        <Link to="/" className="php-back">
          ← Back to Languages
        </Link>

        <div className="php-brand">

          <div className="php-icon">
            PHP
          </div>

          <div>
            <strong>PHP Learning</strong>
            <span>Backend Web Development</span>
          </div>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="php-main">


        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="php-hero">

          <span className="php-label">
            WEB DEVELOPMENT
          </span>

          <h1>
            Build with PHP.
          </h1>

          <p>
            Learn server-side programming and build dynamic web
            applications using PHP and databases.
          </p>

        </section>


        {/* =====================================================
            COURSE CONTENT
        ===================================================== */}

        <section className="php-content">

          <div className="php-heading">

            <div>
              <span>COURSE CONTENT</span>

              <h2>
                PHP Concepts
              </h2>
            </div>

            <div className="php-count">
              {concepts.length} Topics
            </div>

          </div>


          {/* =====================================================
              CONCEPT CARDS
          ===================================================== */}

          <div className="php-grid">

            {concepts.map((concept, index) => (

              <article
                className="php-card"
                key={concept.title}
              >

                {/* CARD TOP */}

                <div className="php-card-top">

                  <span className="php-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="php-status">
                    Available
                  </span>

                </div>


                {/* TITLE */}

                <h3>
                  {concept.title}
                </h3>


                {/* DESCRIPTION */}

                <p>
                  {concept.description}
                </p>


                {/* BUTTON */}

                <button
                  type="button"
                  className="php-button"
                  onClick={() =>
                    handleTopicClick(concept.title)
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

export default PhpPage;