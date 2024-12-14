import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjectById } from '../../services/api';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const response = await fetchProjectById(id);
        setProject(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load project details');
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!project) return <div>Project not found</div>;

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={project.coverImage} alt={project.title} className="hero-image" />
        <div className="hero-overlay">
          <h1>{project.title}</h1>
          <p className="created-date">Created: {new Date(project.createdDate).toLocaleDateString()}</p>
        </div>
      </section>

      <div className="content-container">
        {/* Description Section */}
        <section className="detail-section">
          <h2>Overview</h2>
          <p>{project.description}</p>
        </section>

        {/* Technical Challenges Section */}
        <section className="detail-section">
          <h2>Key Technical Challenges</h2>
          <div className="challenges-grid">
            {project.technicalChallenges.map((item, index) => (
              <div key={index} className="challenge-card">
                <h3>Challenge: {item.challenge}</h3>
                <p>Solution: {item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="detail-section">
          <h2>Technology Stack</h2>
          <div className="tech-stack-container">
            {Object.entries(project.techStack).map(([category, techs]) => (
              <div key={category} className="tech-category">
                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <div className="tech-tags">
                  {techs.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Enhancements Section */}
        <section className="detail-section">
          <h2>Future Enhancements</h2>
          <ul className="enhancements-list">
            {project.futureEnhancements.map((enhancement, index) => (
              <li key={index}>{enhancement}</li>
            ))}
          </ul>
        </section>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="detail-section">
            <h2>Project Gallery</h2>
            <div className="gallery-grid">
              {project.gallery.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`} 
                />
              ))}
            </div>
          </section>
        )}

        {/* Links Section */}
        <section className="detail-section links-section">
          {project.links.demo && (
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link demo-link"
            >
              Live Demo
            </a>
          )}
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-link github-link"
          >
            GitHub Repository
          </a>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;