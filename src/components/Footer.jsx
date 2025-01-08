import React from 'react';
import '../styles/Footer.css'; // Add styling in Footer.css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-logo">
          <h2>Cardiology System</h2>
          <p>
            Simplifying healthcare management with efficient, reliable, and secure solutions for cardiology units.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Phone: +94 123 456 789</p>
          <p>Email: info@cardiologyunit.com</p>
          <p>Location: No. 123, Main Street, Colombo, Sri Lanka</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2025 Cardiology Unit Management System. All rights reserved.</p>
        <p>
          Designed by <a href="https://example.com" target="_blank" rel="noopener noreferrer">Your Team</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
