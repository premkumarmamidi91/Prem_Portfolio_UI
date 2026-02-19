import React from "react";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <section id="about" data-aos="fade-up">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>
          Full-Stack Software Developer with 3+ years of experience in
          building scalable web applications using React.js, Node.js, and SQL.
          Contributed to large-scale government platforms improving service
          transparency and accessibility for millions of users.
        </p>
      </div>
    </section>
  );
};

export default About;
