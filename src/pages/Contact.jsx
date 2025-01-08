import React from 'react';
import '../styles/Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-page">
     
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have any questions or need assistance? We're here to help! Reach out to us using the form below or through our contact information.
        </p>
      </header>

      <section className="contact-info">
        <div className="contact-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2958/2958783.png"
            alt="Phone Icon"
          />
          <h3>Phone</h3>
          <p>+94 123 456 789</p>
        </div>
        <div className="contact-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email Icon"
          />
          <h3>Email</h3>
          <p>info@cardiologyunit.com</p>
        </div>
        <div className="contact-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="Location Icon"
          />
          <h3>Location</h3>
          <p>No. 123, Main Street, Colombo, Sri Lanka</p>
        </div>
      </section>

      
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn primary-btn">Submit</button>
        </form>
      </section>

      
    </div>
  );
};

export default Contact;
