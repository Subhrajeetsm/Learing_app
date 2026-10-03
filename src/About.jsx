import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  const isLoggedIn =
    !!localStorage.getItem("token") ||
    !!localStorage.getItem("authToken") ||
    !!localStorage.getItem("accessToken");

  return (
    <div className="about-page">

      <header className="about-header">

        <Link
          to="/about"
          className="about-header-brand"
        >
          <div className="about-logo">
            C++
          </div>

          <div>
            <h1>Programming Learning Lab</h1>
            <p>Learn programming concepts visually and interactively</p>
          </div>
        </Link>

        <nav className="about-navigation">

          {isLoggedIn ? (
            <Link
              to="/learn"
              className="about-nav-button"
            >
              Start Learning →
            </Link>
          ) : (
            <>
              <Link
                to="/about"
                className="about-nav-link active"
              >
                About
              </Link>

              <Link
                to="/sign-in"
                className="about-nav-link"
              >
                Sign In
              </Link>

              <Link
                to="/sign-up"
                className="about-nav-button"
              >
                Get Started
              </Link>
            </>
          )}

        </nav>
      </header>

      <main className="about-container">

        <section className="about-hero">

          <span className="about-badge">
            ABOUT US
          </span>

          <h2>
            Learn Programming in a Simple & Interactive Way 🚀
          </h2>

          <p>
            Programming Learning Lab is an educational platform
            designed to help students understand programming
            concepts through interactive learning, visual
            explanations, examples and easy-to-understand content.
          </p>

          <div className="about-hero-actions">

            {isLoggedIn ? (
              <Link
                to="/learn"
                className="hero-primary-btn"
              >
                Start Learning →
              </Link>
            ) : (
              <>
                <Link
                  to="/sign-up"
                  className="hero-primary-btn"
                >
                  Create an Account
                </Link>

                <Link
                  to="/sign-in"
                  className="hero-secondary-btn"
                >
                  Sign In
                </Link>
              </>
            )}

          </div>

          <Link
            to="/about"
            className="sidebar-about"
          >
            <span>✓</span>
            <span>Public About Page</span>
          </Link>

        </section>

        {/* Keep the rest of your existing About page code here */}
        
      </main>

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
