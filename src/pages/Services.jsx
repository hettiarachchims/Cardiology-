import React from 'react';
import '../styles/Services.css'; 

const Services = () => {
  return (
    <div className="services-page">
     
      <header className="services-header">
        <h1>Our Services</h1>
        <p>
          We provide a range of healthcare services tailored to meet the needs of cardiology patients and healthcare providers.
        </p>
      </header>

      
      <section className="services-section">
        <div className="service-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3906/3906377.png"
            alt="Patient Management"
          />
          <h3>Patient Record Management</h3>
          <p>
            Securely store and access patient medical histories, test results, and treatment plans.
          </p>
        </div>
        <div className="service-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2633/2633848.png"
            alt="Appointment Scheduling"
          />
          <h3>Appointment Scheduling</h3>
          <p>
            Effortlessly book, reschedule, or cancel appointments with minimal waiting time.
          </p>
        </div>
        <div className="service-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2983/2983793.png"
            alt="Pharmacy Integration"
          />
          <h3>Pharmacy Integration</h3>
          <p>
            Avoid duplicate medications by sending prescriptions directly to pharmacies.
          </p>
        </div>
        <div className="service-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2927/2927053.png"
            alt="Emergency Alerts"
          />
          <h3>Emergency Alerts</h3>
          <p>
            Send real-time notifications to patients and healthcare staff during emergencies.
          </p>
        </div>
        <div className="service-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2589/2589171.png"
            alt="Data Analytics"
          />
          <h3>Data Analytics</h3>
          <p>
            Analyze patient data and generate insights for better decision-making and resource planning.
          </p>
        </div>
        <div className="service-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1995/1995533.png"
            alt="24/7 Support"
          />
          <h3>24/7 Support</h3>
          <p>
            Dedicated technical and medical support to ensure seamless operations anytime.
          </p>
        </div>
      </section>

     
    </div>
  );
};

export default Services;
