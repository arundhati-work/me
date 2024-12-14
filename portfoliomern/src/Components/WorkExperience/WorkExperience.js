import React from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  return (
    <section id="work-exp-section">
      <div className="outer-container">
        <div className="inner-container">
          <div className="heading-container">
            <h2>Work Experience</h2>
          </div>
          <div className="work-container">
            <table>
              <tbody className="experience-block">
                <tr className="mobile-dates">
                  <td className="dates" colSpan={2}>Jul '22 - Jan '24</td>
                </tr>
                <tr className="desktop-dates">
                  <td className="dates" rowSpan={3} valign="top">Jul '22 - Jan '24</td>
                  <td className="company">Persistent Systems</td>
                </tr>
                <tr className="mobile-row">
                  <td className="company">Persistent Systems</td>
                </tr>
                <tr>
                  <td className="role">Software Engineer</td>
                </tr>
                <tr>
                  <td className="job" colSpan={2}>
                    <menu>
                      <li>Led frontend development of Salesforce applications using Lightning Web Components (LWCs), collaborating in a cross-functional team of developers, QA engineers, technical leads, and business analysts</li>
                      <li>Modernized and maintained legacy source code of Lightning Web Components, implementing performance optimizations and architectural improvements while ensuring backward compatibility</li>
                      <li>Participated in comprehensive Agile workflow including daily standups, bi-weekly sprint planning, and nightly client progress reviews, ensuring transparent communication and consistent delivery</li>
                      <li>Collaborated with the technical architect to design and implement scalable solutions, incorporating architectural best practices and optimization strategies</li>
                      <li>Orchestrated comprehensive unit testing initiative, developing and reviewing 70+ LWCs using Jest framework, achieving 90%+ code coverage and establishing testing standards across multiple project teams</li>
                      <li>Created and maintained detailed technical documentation for 50+ Lightning Web Components, reports, and dashboards, facilitating successful knowledge transfer and project handovers</li>
                      <li>Successfully managed 50+ pull requests through completion, incorporating feedback from technical leads and maintaining high code quality standards</li>
                      <li>Mentored 100+ developers on LWC development best practices, Jest testing implementation, and ESLint issue resolution over code review calls, fostering a collaborative learning environment</li>
                    </menu>
                  </td>
                </tr>
              </tbody>
              <tbody className="experience-block" style={{ borderTop: '1.5rem solid transparent' }}>
                <tr className="mobile-dates">
                  <td className="dates" colSpan={2}>Jan '22 - Jul '22</td>
                </tr>
                <tr className="desktop-dates">
                  <td className="dates" rowSpan={2} valign="top">Jan '22 - Jul '22</td>
                  <td className="role">Software Engineer Intern</td>
                </tr>
                <tr className="mobile-row">
                  <td className="role">Software Engineer Intern</td>
                </tr>
                <tr>
                  <td className="job" colSpan={2}>
                    <menu>
                      <li>Architected and developed a full-stack e-learning platform, implementing RESTful APIs using Spring Boot and creating responsive UI with HTML/CSS and JavaScript</li>
                      <li>Implemented user authentication and authorization using JWT tokens, ensuring secure access control and data privacy</li>
                      <li>Received a 94% overall grade in the training program, validating exceptional programming abilities.</li>
                    </menu>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;