import React from "react";
import "../styles/Skills.css";

const Skills: React.FC = () => {
  const skills = [
    { name: "React.js", level: "90%" },
    { name: "Node.js", level: "85%" },
    { name: "TypeScript", level: "80%" },
    { name: "MongoDB", level: "75%" },
    { name: "SQL", level: "85%" }
  ];

  return (
    <section id="skills" data-aos="fade-up">
      <h2 className="section-title">Technical Expertise</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
