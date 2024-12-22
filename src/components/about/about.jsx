import React from "react";
import "./about.css";
import pic1 from "../../assets/pic1.png";
function About() {
  return (
    <div className="aboutcontainer">
      <div className="aboutcourse">
        <div className="about">
          <span> About the Program</span>
          <br />
          <p>
            
            The Pharmacy program provides students with comprehensive knowledge
            of pharmaceutical sciences, focusing on drug development,
            formulation, and patient care. It covers subjects such as
            pharmacology, medicinal chemistry, pharmaceutical biotechnology, and
            pharmacy practice. Students gain practical experience through
            internships, clinical rotations, and lab work, preparing them for
            various roles in community, hospital, and industrial settings. The
            program also emphasizes ethical decisionmaking, patient
            communication, and the importance of healthcare systems. Graduates
            are equipped to work as pharmacists, researchers, or in regulatory
            bodies, contributing to public health and the advancement of
            pharmaceutical sciences.
          </p>
        </div>
        <div className="course">
          <span>Courses</span>

          <div className="container">
            <div className="dropdown">
              <input
                type="checkbox"
                id="technical-skills"
                className="toggle-input"
              />
              <label htmlFor="technical-skills" className="dropdown-header">
                Technical Skills
                <span className="icon">▼</span>
              </label>
            </div>

            <div className="dropdown">
              <input
                type="checkbox"
                id="functional-skills"
                className="toggle-input"
              />
              <label htmlFor="functional-skills" className="dropdown-header">
                Functional Skills
                <span className="icon">▼</span>
              </label>
            </div>

            <div className="dropdown">
              <input
                type="checkbox"
                id="behavioral-skills"
                className="toggle-input"
              />
              <label htmlFor="behavioral-skills" className="dropdown-header">
                Behavioural Skills
                <span className="icon">▼</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="learn">
        <div className="learn1">
          <div className="pic">
            <img src={pic1} />
          </div>
          <div className="sl">Start Learning</div>
          <br />
          <div className="details">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Duration
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45Hrs
          </div>
          <br />
          <div className="details">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Language
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English
          </div>
          <br />
          <div className="details">
            &nbsp;&nbsp;&nbsp;&nbsp;Total
            Credits&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;30
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default About;
