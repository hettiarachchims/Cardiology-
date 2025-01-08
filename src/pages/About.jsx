import React from 'react';
import '../styles/About.css'; 

const About = () => {
  return (
    <div className="about-page">
      
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          The Cardiology Unit Management System is designed to revolutionize how healthcare professionals and patients interact. Our mission is to provide an efficient, reliable, and secure platform to manage patient records, schedule appointments, and streamline pharmacy integrations.
        </p>
      </section>

      
      <section className="vision-mission">
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be a leading provider of innovative healthcare solutions that enhance the quality of life for patients and improve operational efficiency for healthcare providers.
          </p>
        </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To empower healthcare professionals and patients with cutting-edge technology, enabling seamless management of cardiology services through user-friendly and secure systems.
          </p>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Team Member"
            />
            <h3>Dr. Samantha Perera</h3>
            <p>Cardiology Specialist</p>
          </div>
          <div className="team-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
              alt="Team Member"
            />
            <h3>Anuradha Silva</h3>
            <p>System Administrator</p>
          </div>
          <div className="team-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
              alt="Team Member"
            />
            <h3>Tharindu Fernando</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>

     
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>State-of-the-art technology tailored for cardiology units.</li>
          <li>Seamless integration between appointments, records, and pharmacy.</li>
          <li>A team dedicated to innovation and excellence.</li>
        </ul>
      </section>

    </div>
  );
};

export default About;
