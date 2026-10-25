import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
  };

  return (
    <div>
      <h1>Student Feedback Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br />
        <br />

        <label htmlFor="feedback">Feedback:</label>
        <br />
        <textarea
          id="feedback"
          placeholder="Enter your feedback"
          rows="6"
          cols="24"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default App;
