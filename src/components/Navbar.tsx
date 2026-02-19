

import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Prem Kumar</div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>

      <div className="nav-actions">
        <a
          href="/Prem_Kumar_Mamidi_Resume.pdf"
          download
          className="resume-btn"
        >
          Resume ⤓
        </a>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
