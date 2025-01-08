import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // Ensure the CSS file path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="https://i.pinimg.com/736x/87/58/d4/8758d44792aa2726c971765e4fe55d08.jpg" // Replace with your external image URL
            alt="Cardiology System Logo"
            className="logo"
          />
        </Link>
        <h1>Cardiology System</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
