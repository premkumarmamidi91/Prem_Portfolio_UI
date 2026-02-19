import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Experience.css";

interface Experience {
  _id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

const Experience: React.FC = () => {
  const [experience, setExperience] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL as string}/api/experience`)
      .then((res) => {
        setExperience(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching experience:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading experience...</p>;

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="experience-grid">
        {experience.map((exp) => (
          <div className="experience-card" key={exp._id}>
            <h3>{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="duration">
              {exp.startDate} - {exp.endDate}
            </p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
