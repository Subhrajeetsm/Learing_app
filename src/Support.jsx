import React from "react";
import { Link } from "react-router-dom";
import "./Support.css";

function Support() {
  return (
    <div className="support-page">

      <div className="support-card">

        <div className="coffee-icon">
          ☕
        </div>

        <div className="support-badge">
          SUPPORT THE DEVELOPER
        </div>

        <h1>Support Our Developer 💙</h1>

        <p className="support-description">
          If you find this C++ Inheritance Visualizer helpful,
          you can support the developer and help keep this
          project free and improving for students.
        </p>

        {/* BUY ME A COFFEE */}
        <a
          href="/support-qr.png"
          target="_blank"
          rel="noopener noreferrer"
          className="coffee-btn"
        >
          ☕ Buy Me a Coffee
        </a>

        {/* SUPPORT DEVELOPER */}
        <a
          href="https://www.instagram.com/ll_itz_black_dev_il?igsh=Z3d1bjc0empoemo3&igsi=Z3d1bjc0empoemo3"
          target="_blank"
          rel="noopener noreferrer"
          className="support-btn"
        >
          💙 Support Developer
        </a>

        <div className="support-message">
          <strong>Thank you! 🙏</strong>
          <br />
          Your support motivates us to build more useful
          and interactive learning tools for students.
        </div>

        <div className="developer-note">
          <h3>👨‍💻 About the Developer</h3>

          <p>
            This project is created to make C++ concepts
            easier, more visual, and more interactive
            for students.
          </p>
        </div>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Support;