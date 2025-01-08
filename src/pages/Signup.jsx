import React, { useState } from 'react';
import '../styles/Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    role: 'User', // Default to 'User'
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
    // Add your signup logic here (e.g., API call)
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="role">Sign Up As:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn primary-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
