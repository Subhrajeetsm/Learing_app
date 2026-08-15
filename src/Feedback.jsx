import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Feedback.css";

function Feedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields.");
      return;
    }

    const data = {
      name,
      email,
      message,
    };

    try {
    const response = await fetch(
  "https://cpp-inheritance-visualizer-backend.onrender.com/api/feedback",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  }
);

      const result = await response.json();

console.log("Backend:", result);

if (response.ok) {
  alert(result.message);

  setName("");
  setEmail("");
  setMessage("");
} else {
  alert(result.message);
}
    } catch (error) {
      console.error(error);

      alert("Unable to connect to backend.");
    }
  };

  return (
    <div className="feedback-page">

      <div className="feedback-box">

        <Link
          to="/"
          className="back-home"
        >
          ← Back to Visualizer
        </Link>

        <h1>
          Feedback
        </h1>

        <p>
          We would love to hear your feedback
          about the C++ Inheritance Visualizer.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

          </div>

          <div className="input-group">

            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

          <div className="input-group">

            <label>
              Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your feedback..."
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
            />

          </div>

          <button
            type="submit"
            className="feedback-submit"
          >
            Submit Feedback
          </button>

        </form>

      </div>

    </div>
  );
}

export default Feedback;