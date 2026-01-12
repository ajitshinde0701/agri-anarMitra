import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      {/* HERO SECTION */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions or suggestions? Reach out to us and we’ll get back to you as soon as possible.
        </p>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Subject</label>
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <label>Message</label>
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
