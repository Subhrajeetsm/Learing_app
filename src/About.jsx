import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Support from "./Support";
function About() {
  return (
    <div className="about-page">

      {/* HEADER */}
      <header className="about-header">
        <div className="about-logo">C++</div>

        <div>
          <h1>C++ Inheritance Visualizer</h1>
          <p>Learn C++ OOP concepts visually and interactively</p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="about-container">

        {/* HERO */}
        <section className="about-hero">
          <span className="about-badge">ABOUT US</span>

          <h2>Learn C++ in a Simple & Interactive Way 🚀</h2>

          <p>
            C++ Inheritance Visualizer is an educational platform designed
            to help students understand Object-Oriented Programming concepts
            through interactive diagrams, examples, and easy explanations.
          </p>

          <Link to="/" className="back-home-btn">
            ← Back to Visualizer
          </Link>
        </section>

        {/* OUR MISSION */}
        <section className="about-card">
          <div className="about-icon">🎯</div>

          <div>
            <h2>Our Mission</h2>

            <p>
              Our mission is to make C++ Object-Oriented Programming easier
              for students to understand. Instead of learning only from
              theory, students can explore concepts visually and interact
              with diagrams and examples.
            </p>

            <p>
              We focus on simple explanations, practical examples and
              interactive learning so that difficult programming concepts
              become easier to remember.
            </p>
          </div>
        </section>

        {/* WHAT YOU CAN LEARN */}
        <section className="about-section">

          <div className="section-heading">
            <span>📚</span>
            <div>
              <h2>What You Can Learn</h2>
              <p>Explore important C++ OOP concepts.</p>
            </div>
          </div>

          <div className="about-grid">

            <div className="about-topic">
              <div className="topic-icon">📦</div>
              <h3>Class & Object</h3>
              <p>
                Understand classes and objects with simple examples and
                visual explanations.
              </p>
            </div>

            <div className="about-topic">
              <div className="topic-icon">🏗️</div>
              <h3>Constructors</h3>
              <p>
                Learn how constructors work and how they initialize objects
                in C++.
              </p>
            </div>

            <div className="about-topic">
              <div className="topic-icon">🔗</div>
              <h3>Inheritance</h3>
              <p>
                Explore Single, Multilevel, Multiple, Hierarchical and
                Hybrid inheritance.
              </p>
            </div>

            <div className="about-topic">
              <div className="topic-icon">🔐</div>
              <h3>Access Specifiers</h3>
              <p>
                Understand public, protected and private access in C++.
              </p>
            </div>

          </div>
        </section>

        {/* WHY THIS PLATFORM */}
        <section className="about-card why-card">

          <div className="about-icon">💡</div>

          <div>
            <h2>Why Use This Visualizer?</h2>

            <div className="feature-list">

              <div className="feature">
                <span>✓</span>
                <div>
                  <strong>Easy to Understand</strong>
                  <p>
                    Concepts are explained using simple language suitable
                    for beginners.
                  </p>
                </div>
              </div>

              <div className="feature">
                <span>✓</span>
                <div>
                  <strong>Interactive Diagrams</strong>
                  <p>
                    Visualize how classes are connected through inheritance.
                  </p>
                </div>
              </div>

              <div className="feature">
                <span>✓</span>
                <div>
                  <strong>Practical C++ Examples</strong>
                  <p>
                    Learn concepts using real C++ code examples.
                  </p>
                </div>
              </div>

              <div className="feature">
                <span>✓</span>
                <div>
                  <strong>Student Friendly</strong>
                  <p>
                    Designed especially for students learning C++ and OOP.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* LEARNING FLOW */}
        <section className="about-section">

          <div className="section-heading">
            <span>🧠</span>
            <div>
              <h2>How It Works</h2>
              <p>Learn step by step.</p>
            </div>
          </div>

          <div className="learning-flow">

            <div className="flow-step">
              <div className="flow-number">1</div>
              <h3>Choose a Concept</h3>
              <p>
                Select Class & Object, Constructors, Inheritance or Access
                Specifiers from the sidebar.
              </p>
            </div>

            <div className="flow-line"></div>

            <div className="flow-step">
              <div className="flow-number">2</div>
              <h3>Explore</h3>
              <p>
                Interact with diagrams and read the explanations provided
                for each concept.
              </p>
            </div>

            <div className="flow-line"></div>

            <div className="flow-step">
              <div className="flow-number">3</div>
              <h3>Practice</h3>
              <p>
                Study the C++ examples and understand how the concepts work
                in actual programs.
              </p>
            </div>

          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className="technology-card">

          <span className="about-badge">PROJECT</span>

          <h2>Built for Learning 💻</h2>

          <p>
            This project combines modern web technologies with C++ educational
            content to create an interactive learning experience.
          </p>

          <div className="technology-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>C++</span>
            <span>Interactive UI</span>
          </div>

        </section>

        {/* FEEDBACK */}
        <section className="feedback-card">

          <div>
            <span className="feedback-icon">💬</span>
          </div>

          <div>
            <h2>Have Suggestions?</h2>

            <p>
              Your feedback can help us improve this learning platform and
              make it more useful for students.
            </p>
          </div>

          <Link to="/feedback" className="feedback-btn">
            Send Feedback →
          </Link>

        </section>

      </main>

      {/* FOOTER */}
      <footer className="about-footer">
        <p>
          © {new Date().getFullYear()} C++ Inheritance Visualizer
        </p>

        <p>
          Made for students who want to learn C++ better 🚀
        </p>
      </footer>

    </div>
  );
}

export default About;