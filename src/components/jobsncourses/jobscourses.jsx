import React from 'react';
import './jobscourses.css';
import ece from "../../assets/image-7.png";
import chem from "../../assets/chem.png";
import ds from "../../assets/ds.png";



 
  function Jobscourses() {

  return (
    <div className='jobscourses'>
      <div className="jobs">
        <span>Job Roles</span>

        <div className="points-container">
  <div className="left-points">
    <ul>
      <li>Pharmacist</li>
      <li>Pharmacy Technician</li>
      <li>Clinical Pharmacist</li>
      <li>Pharmacy Manager</li>
      <li>Pharmaceutical Scientist</li>
    </ul>
  </div>
  <div className="right-points">
    <ul>
      <li>Pharmacy Sales Representative</li>
      <li>Hospital Pharmacist</li>
      <li>Research Pharmacist</li>
      <li>Regulatory Affairs Specialist</li>
      <li>Compounding Pharmacist</li>
    </ul>
  </div>
</div>


      </div>
      <div className="relatdcourses">
      <span>Related Courses</span>
      <div className="ece">
        <img src={ece} />
        <div className="star"> 
        <p>Electrical and electronics</p>

        <div className="rating-container">
      <div className="stars">
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star">★</span>
      </div>
    </div>
    </div>
      </div>
      <div className="ece">
        <img src={chem} />
        <div className="star"> 
        <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chemical</p>
        <div className="rating-container">
      <div className="stars">
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star">★</span>
      </div>
    </div>
    </div>
      </div>

      <div className="ece">
        <img src={ds} />
        <div className="star"> 
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Data Science</p>
        <div className="rating-container">
      <div className="stars">
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star">★</span>
      </div>
    </div>
    </div>
      </div>
      </div>
      
    </div>
  )
}


export default Jobscourses
