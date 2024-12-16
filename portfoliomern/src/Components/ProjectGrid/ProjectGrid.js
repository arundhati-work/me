// src/components/ProjectGrid/ProjectGrid.jsx
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
            {projects.map(project => (
              <Link to={`/projects/${project.id}`} key={project.id}>
                <div 
                  className="project" 
                  style={{ 
                    backgroundImage: `url(${project.coverImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="project-text">
                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>
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