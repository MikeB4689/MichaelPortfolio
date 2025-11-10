import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = ({ active, dark }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    emailjs
      .send(
        "service_j8zr0ds", // ✅ Your Service ID
        "template_lwz3ehq", // ⬅️ Replace with your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        "HjyteGdn5GuyV8esd" // ⬅️ Replace with your Public Key
      )
      .then(
        () => {
          setIsSent(true);
          setIsLoading(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setIsSent(false), 4000);
        },
        (err) => {
          setIsLoading(false);
          setError("❌ Failed to send message. Please try again later.");
          console.error("EmailJS Error:", err);
        }
      );
  };

  return (
    <section className="contactContainer" id="contact">
      <h2>Let’s Connect</h2>
      <p className="contactSub">
        Have a project in mind or just want to say hi? Drop me a message.
      </p>

      <form
        className="contactForm"
        onSubmit={handleSubmit}
        style={
          active ? { background: "#c5caceff" } : { background: "#434547ff" }
        }
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {isSent && <p className="successMsg">✅ Message sent successfully!</p>}
      {error && <p className="errorMsg">{error}</p>}
    </section>
  );
};

export default ContactForm;
