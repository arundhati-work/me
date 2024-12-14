import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../../services/api';
import './ProjectGrid.css';

const ProjectGrid = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetchProjects();
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load projects');
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section id="recent-works-section">
      <div className="outer-container">
        <div className="inner-container">
          <div className="heading-container">
            <h2>Recent Works</h2>
          </div>
          <div className="projects-container">
            {projects.map(project => (
              <Link to={`/projects/${project._id}`} key={project._id}>
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