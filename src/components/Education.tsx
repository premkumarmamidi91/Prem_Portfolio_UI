import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Education.css";

interface Educationdata {
  _id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: string;
  endYear: string;
}

const Education: React.FC = () => {
  const [education, setEducation] = useState<Educationdata[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/education`)
      .then((res) => {
        setEducation(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching education:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading education...</p>;

  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="education-grid">
        {education.map((edu) => (
          <div className="education-card" key={edu._id}>
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p>{edu.fieldOfStudy}</p>
            <p className="duration">
              {edu.startYear} - {edu.endYear}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
