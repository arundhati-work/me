// ProjectGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../../data/projects';
import './ProjectGrid.css';

const ProjectGrid = () => {
  const projects = getAllProjects();

  return (
    <section id="recent-works-section">
      <div className="outer-container">
        <div className="inner-container">
          <div className="heading-container">
            <h2>Recent Works</h2>
          </div>
          <div className="projects-container">
            {projects.map((project, index) => (
              <Link to={`/projects/${project.id}`} key={project.id} className="project-link">
                <div className={`project-card ${index % 2 === 1 ? 'reversed' : ''}`}>
                  <div className="project-image-wrapper">
                    <img 
                      src={project.coverImage} 
                      alt={project.title} 
                      className="project-image"
                    />
                  </div>
                  <div className="project-content">
                    <span className="project-date">{project.createdDate}</span>
                    <div className="title-container">
                      <h3 className="project-title">{project.title}</h3>
                      <button className="view-project-btn">View Project</button>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="tech-stack">
                      {Object.values(project.techStack)
                        .flat()
                        .slice(0, 3)
                        .map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;