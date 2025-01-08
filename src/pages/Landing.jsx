import React from 'react';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <div className="landing-page">
  
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to the Cardiology Unit Management System</h1>
          <p>Efficient, reliable, and secure management of patient records and appointments.</p>
          <div className="hero-buttons">
            <button className="btn primary-btn">Get Started</button>
            <button className="btn secondary-btn">Learn More</button>
          </div>
        </div>
      </header>

 
      <section className="features">
        <h2>Why Choose Our System?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Streamlined Appointments</h3>
            <p>Schedule tests, treatments, and medication pickups efficiently.</p>
          </div>
          <div className="feature-card">
            <h3>Centralized Records</h3>
            <p>Securely store and access patient records with ease.</p>
          </div>
          <div className="feature-card">
            <h3>Seamless Pharmacy Integration</h3>
            <p>Avoid duplicate medications and send prescriptions directly.</p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Landing;
