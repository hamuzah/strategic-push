import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-content">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          We'd love to hear from you! Whether you have a question or just want to say hello, our team is ready to answer all your questions.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="contact-input" required />
          <input type="email" placeholder="Your Email" className="contact-input" required />
          <textarea placeholder="Your Message" className="contact-textarea" required></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
      <div className="contact-background"></div>
    </section>
  );
};

export default Contact;
