import React from 'react';
import './details.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Details() {
  return (
    <div className="info">
      <div className="ques">
        <span>Have more Questions?</span>
        <p>Reach out to us. Our Support team is here to assist you</p>
        <div className="contact-container">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>Hrd@Theunivoc.Com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <span>+91 84483 73884</span>
          </div>
        </div>
      </div>

      <div className="contacts">
        <form className="form-container">
          <label htmlFor="fullName">Full Name*</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="email">Email Address*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="phone">Mobile Number*</label>
          <div className="phone-container">
            <select id="countryCode" name="countryCode" defaultValue="IN">
              <option value="IN">IN</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <label htmlFor="state">State*</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter your state"
            required
          />

          <label htmlFor="city">City*</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            required
          />

          <label htmlFor="school">Select School Name</label>
          <select id="school" name="school" defaultValue="">
            <option value="" disabled>
              Select your school
            </option>
            <option value="School 1">School 1</option>
            <option value="School 2">School 2</option>
          </select>

          <label htmlFor="message">Your Message*</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className='shiva'>Contact Us</button>
        </form>
      </div>
    </div>
  );
}

export default Details;
