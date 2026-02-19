import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Projects.css";

interface Project {
  _id: string;
  title: string;
  description: string;
  liveLink?: string;
  githubLink?: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-links">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
