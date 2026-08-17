import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="about-header">

        <div className="about-logo">
          C++
        </div>

        <div>
          <h1>Programming Learning Lab</h1>

          <p>
            Learn programming concepts visually and interactively
          </p>
        </div>

      </header>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <main className="about-container">


        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="about-hero">

          <span className="about-badge">
            ABOUT US
          </span>

          <h2>
            Learn Programming in a Simple & Interactive Way 🚀
          </h2>

          <p>
            Programming Learning Lab is an educational platform designed
            to help students understand programming concepts through
            interactive learning, visual explanations, examples and
            easy-to-understand content.
          </p>


          <Link
            to="/"
            className="sidebar-about"
          >
            <span>←</span>
            <span>Back to Learning Lab</span>
          </Link>

        </section>



        {/* =====================================================
            OUR MISSION
        ===================================================== */}
        <section className="about-card">

          <div className="about-icon">
            🎯
          </div>

          <div>

            <h2>
              Our Mission
            </h2>

            <p>
              Our mission is to make programming easier and more
              understandable for students. Instead of learning only
              from theory, students can explore concepts through
              visual explanations, examples and interactive learning.
            </p>

            <p>
              We aim to create a student-friendly platform where
              difficult programming concepts become easier to learn,
              understand and remember.
            </p>

          </div>

        </section>



        {/* =====================================================
            AVAILABLE LANGUAGES
        ===================================================== */}
        <section className="about-section">

          <div className="section-heading">

            <span>
              💻
            </span>

            <div>

              <h2>
                Programming Languages
              </h2>

              <p>
                Choose a language and start your learning journey.
              </p>

            </div>

          </div>



          <div className="about-grid">


            {/* =================================================
                C++
            ================================================= */}
            <div className="about-topic">

              <div className="topic-icon">
                C++
              </div>

              <span className="language-status available">
                AVAILABLE
              </span>

              <h3>
                C++
              </h3>

              <p>
                Learn C++ Object-Oriented Programming concepts,
                inheritance, classes, objects, constructors and
                access specifiers with interactive examples.
              </p>

              <Link
                to="/cpp"
                className="language-learn-btn"
              >
                Start Learning →
              </Link>

            </div>



            {/* =================================================
                JAVA
            ================================================= */}
            <div className="about-topic coming-soon-card">

              <div className="topic-icon java-topic">
                ☕
              </div>

              <span className="language-status coming-soon">
                COMING SOON
              </span>

              <h3>
                Java
              </h3>

              <p>
                Java learning content with Object-Oriented
                Programming concepts, examples and interactive
                explanations is currently under development.
              </p>

              <button
                className="language-learn-btn disabled-btn"
                disabled
              >
                Coming Soon
              </button>

            </div>



            {/* =================================================
                PYTHON - AVAILABLE
            ================================================= */}
            <div className="about-topic">

              <div className="topic-icon python-topic">
                🐍
              </div>

              <span className="language-status available">
                AVAILABLE
              </span>

              <h3>
                Python
              </h3>

              <p>
                Learn Python programming with simple examples,
                practical concepts and interactive learning
                resources.
              </p>

              <Link
                to="/python"
                className="language-learn-btn"
              >
                Start Learning →
              </Link>

            </div>



            {/* =================================================
                PHP
            ================================================= */}
            <div className="about-topic coming-soon-card">

              <div className="topic-icon php-topic">
                PHP
              </div>

              <span className="language-status coming-soon">
                COMING SOON
              </span>

              <h3>
                PHP
              </h3>

              <p>
                Explore PHP fundamentals, web programming concepts
                and practical server-side development examples.
              </p>

              <button
                className="language-learn-btn disabled-btn"
                disabled
              >
                Coming Soon
              </button>

            </div>



            {/* =================================================
                SQL
            ================================================= */}
            <div className="about-topic coming-soon-card">

              <div className="topic-icon sql-topic">
                SQL
              </div>

              <span className="language-status coming-soon">
                COMING SOON
              </span>

              <h3>
                SQL
              </h3>

              <p>
                Learn databases, SQL queries, tables, relationships
                and database management through practical examples.
              </p>

              <button
                className="language-learn-btn disabled-btn"
                disabled
              >
                Coming Soon
              </button>

            </div>

          </div>

        </section>



        {/* =====================================================
            WHY THIS PLATFORM
        ===================================================== */}
        <section className="about-card why-card">

          <div className="about-icon">
            💡
          </div>

          <div>

            <h2>
              Why Use This Learning Platform?
            </h2>


            <div className="feature-list">


              <div className="feature">

                <span>
                  ✓
                </span>

                <div>

                  <strong>
                    Easy to Understand
                  </strong>

                  <p>
                    Concepts are explained using simple language
                    suitable for beginners.
                  </p>

                </div>

              </div>



              <div className="feature">

                <span>
                  ✓
                </span>

                <div>

                  <strong>
                    Interactive Learning
                  </strong>

                  <p>
                    Explore programming concepts through interactive
                    diagrams and examples.
                  </p>

                </div>

              </div>



              <div className="feature">

                <span>
                  ✓
                </span>

                <div>

                  <strong>
                    Practical Examples
                  </strong>

                  <p>
                    Understand programming concepts using practical
                    code examples.
                  </p>

                </div>

              </div>



              <div className="feature">

                <span>
                  ✓
                </span>

                <div>

                  <strong>
                    Multiple Languages
                  </strong>

                  <p>
                    Learn C++ and Python today and explore more
                    programming languages as the platform grows.
                  </p>

                </div>

              </div>


            </div>

          </div>

        </section>



        {/* =====================================================
            LEARNING FLOW
        ===================================================== */}
        <section className="about-section">


          <div className="section-heading">

            <span>
              🧠
            </span>

            <div>

              <h2>
                How It Works
              </h2>

              <p>
                Start learning in three simple steps.
              </p>

            </div>

          </div>



          <div className="learning-flow">


            <div className="flow-step">

              <div className="flow-number">
                1
              </div>

              <h3>
                Choose a Language
              </h3>

              <p>
                Select C++ or Python and explore the available
                programming content.
              </p>

            </div>



            <div className="flow-line"></div>



            <div className="flow-step">

              <div className="flow-number">
                2
              </div>

              <h3>
                Explore Concepts
              </h3>

              <p>
                Read explanations, explore diagrams and study
                practical examples.
              </p>

            </div>



            <div className="flow-line"></div>



            <div className="flow-step">

              <div className="flow-number">
                3
              </div>

              <h3>
                Practice
              </h3>

              <p>
                Practice what you learn and build a stronger
                programming foundation.
              </p>

            </div>


          </div>

        </section>



        {/* =====================================================
            TECHNOLOGY
        ===================================================== */}
        <section className="technology-card">

          <span className="about-badge">
            PROJECT
          </span>

          <h2>
            Built for Students 💻
          </h2>

          <p>
            This project combines modern web technologies with
            programming education to create a simple and interactive
            learning experience.
          </p>


          <div className="technology-list">

            <span>
              React
            </span>

            <span>
              JavaScript
            </span>

            <span>
              CSS
            </span>

            <span>
              C++
            </span>

            <span>
              Java
            </span>

            <span>
              Python
            </span>

            <span>
              PHP
            </span>

            <span>
              SQL
            </span>

            <span>
              Interactive UI
            </span>

          </div>

        </section>



        {/* =====================================================
            FEEDBACK
        ===================================================== */}
        <section className="feedback-card">

          <div>
            <span className="feedback-icon">
              💬
            </span>
          </div>


          <div>

            <h2>
              Have Suggestions?
            </h2>

            <p>
              Your feedback can help us improve this learning
              platform and make it more useful for students.
            </p>

          </div>


          <Link
            to="/feedback"
            target="_blank"
            rel="noopener noreferrer"
            className="feedback-btn"
          >
            Send Feedback →
          </Link>

        </section>


      </main>



      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="about-footer">

        <p>
          © {new Date().getFullYear()} Programming Learning Lab
        </p>

        <p>
          Made for students who want to learn programming better 🚀
        </p>

      </footer>

    </div>
  );
}

export default About;
