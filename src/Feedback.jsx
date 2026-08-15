import React from "react";
import { Link } from "react-router-dom";
import "./Feedback.css";

function Feedback() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const response = await fetch(
        "https://cpp-inheritance-visualizer-backend.onrender.com/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Feedback sent successfully! ❤️");
        form.reset();
      } else {
        alert(result.message || "Failed to send feedback");
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to backend.");
    }
  };

  return (
    <div className="feedback-page">

      <nav className="feedback-navbar">
        <div className="feedback-logo">C++</div>

        <div className="feedback-nav-links">
          <Link to="/">Visualizer</Link>
          <Link to="/feedback" className="active">
            Feedback
          </Link>
        </div>
      </nav>

      <main className="feedback-container">

        <div className="feedback-heading">
          <span>FEEDBACK</span>

          <h1>Help Us Improve</h1>

          <p>
            Your feedback helps us make the C++ Inheritance
            Visualizer better and easier to learn.
          </p>
        </div>

        <div className="feedback-box">

          <form onSubmit={handleSubmit}>

            <div className="feedback-input-row">

              <div className="feedback-input">
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="feedback-input">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

            </div>

            <div className="feedback-input">
              <label>Your Feedback</label>

              <textarea
                name="message"
                placeholder="Tell us what you think..."
                rows="7"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="send-feedback"
            >
              Send Feedback →
            </button>

          </form>

        </div>

        <Link to="/" className="back-home">
          ← Back to Visualizer
        </Link>

      </main>

    </div>
  );
}

export default Feedback;
