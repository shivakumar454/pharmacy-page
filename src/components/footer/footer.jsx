import React from 'react'
import './footer.css'
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className='footer'>
        <div className="foot1">
            <div className="iconic">
                 <img src={logo} />
                 <p>Skilling To Empower</p>
            </div>
            <div className="unimatter">
                <p>"Empowering individuals with the skills to thrive in a changing world. 
UNIVOC Skilling to Empower bridges talent and opportunity, driving innovation and growth for a brighter future."</p>
            </div>
        </div>


        <div className="foot2">
        
      <div className="footer-column">
        <h3>About us</h3>
      </div>
      <div className="footer-column">
        <h3>Careers</h3>
        <p><i className="fas fa-map-marker-alt"></i> Address</p>
        <p><i className="fas fa-envelope"></i> hrd@theunivoc.com</p>
      </div>
      <div className="footer-column">
        <h3>Academics</h3>
        <p>Programme</p>
      </div>
      <div className="footer-column">
        <h3>Innovation</h3>
        <p>Student</p>
        <p>Faculty</p>
      </div>
    
        </div>
        <div className="foot3">
     <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
     </div>

      
    </div>
  )
}

export default Footer;
