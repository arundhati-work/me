import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = {
    Languages: ['Java', 'Python', 'JavaScript', 'TypeScript'],
    Frontend: ['HTML/CSS', 'SASS', 'MaterialUI', 'JavaScript', 'jQuery', 'React', 'Axios', 'Redux'],
    Backend: ['Node', 'Express', 'SpringBoot', 'Rest API', 'JWT'],
    Testing: ['Jest', 'Postman', 'Insomnia'],
    Databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
    Salesforce: ['LWC', 'Jest', 'Apex', 'Flows', 'Security', 'Automation'],
    Tools: ['Git', 'GitHub', 'Jira', 'Postman', 'Insomnia', 'EsLint','Figma', 'VSCode'],
  };

  return (
    <section id="skills-section">
      <div className="outer-container">
        <div className="inner-container">
          <div className="heading-container">
            <h2>Skills</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="skill-card">
                <h3>{category}</h3>
                <div className="skill-items">
                  {skills.map(skill => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;