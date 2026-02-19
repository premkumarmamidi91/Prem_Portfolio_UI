// import React from "react";
// import { Link } from "react-scroll";
// import "../styles/Navbar.css";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">Prem Kumar</div>

//       <div className="nav-links">
//         <Link to="hero" smooth duration={500}>Home</Link>
//         <Link to="projects" smooth duration={500}>Projects</Link>
//         <Link to="contact" smooth duration={500}>Contact</Link>
//       </div>

//       <a href="/Prem_Kumar_Mamidi_Resume.pdf" download className="resume-btn">
//         Resume
//       </a>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">Prem Kumar</div>

      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
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
    </nav>
  );
};

export default Navbar;
