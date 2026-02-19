// import React from "react";
// import "../styles/Hero.css";

// const Hero: React.FC = () => {
//   return (
//     <section id="hero" className="hero">
//       <div className="hero-content">
//         <h1>Hi, I'm Prem Kumar 👋</h1>
//         <h2>Full-Stack MERN Developer</h2>

//         <p>
//           3+ years of experience building scalable web applications using
//           React.js, Node.js, and MongoDB. Passionate about creating performant,
//           user-friendly systems.
//         </p>

//         <div className="hero-buttons">
//           <button
//             className="primary-btn"
//             onClick={() =>
//               window.open("https://github.com/premkumarmamidi91", "_blank")
//             }
//           >
//             GitHub
//           </button>

//           <button
//             className="secondary-btn"
//             onClick={() =>
//               window.open("https://www.linkedin.com/in/mamidipremkumar", "_blank")
//             }
//           >
//             LinkedIn
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import "../styles/Hero.css";
import profileImg from "../assets/premphoto.jpeg"; // Add your image inside src/assets

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        
        {/* Left Side - Text */}
        <div className="hero-content">
          <h1>Hi, I'm Prem Kumar 👋</h1>
          <h2>Full-Stack MERN Developer</h2>

          <p>
            3+ years of experience building scalable web applications using
            React.js, Node.js, and MongoDB. Passionate about creating performant,
            user-friendly systems.
          </p>

          {/* Skills */}
          <div className="skills">
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() =>
                window.open("https://github.com/premkumarmamidi91", "_blank")
              }
            >
              GitHub
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/mamidipremkumar",
                  "_blank"
                )
              }
            >
              LinkedIn
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hero-image">
          <img src={profileImg} alt="Prem Kumar" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
