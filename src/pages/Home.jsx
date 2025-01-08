import React from 'react';
import '../styles/Home.css'; 
const Home = () => {
  return (
    <div className="home-page">
     
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to the Cardiology Unit Management System</h1>
          <p>
            A streamlined and secure system to manage patient records, appointments, and medications effectively.
          </p>
          <button className="btn primary-btn">Learn More</button>
        </div>
        <div className="hero-image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/63/Heart_icon_red.svg" // Replace with any URL
            alt="Heart Icon"
          />
        </div>
      </section>

      
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922532.png"
              alt="Patient Management"
            />
            <h3>Patient Management</h3>
            <p>Maintain a complete record of patient history with ease.</p>
          </div>
          <div className="feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3043/3043334.png"
              alt="Appointment Scheduling"
            />
            <h3>Appointment Scheduling</h3>
            <p>Schedule appointments, tests, and treatments without delays.</p>
          </div>
          <div className="feature-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2089/2089235.png"
              alt="Pharmacy Integration"
            />
            <h3>Pharmacy Integration</h3>
            <p>Send prescriptions directly to the pharmacy for faster service.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-card">
          <p>
            "This system has transformed the way we manage our patients. It's efficient and saves a lot of time!"
          </p>
          <span>- Dr. Samantha Perera</span>
        </div>
        <div className="testimonial-card">
          <p>
            "As a patient, I no longer have to wait in long queues. The reminders and scheduling are excellent!"
          </p>
          <span>- Anuradha Silva</span>
        </div>
      </section>

     
    </div>
  );
};

export default Home;
