import React from "react";
import "./benefits.css";
import cardpic from "../../assets/cardpic.png";

function Benefits() {
  return (
    <div className="benefits">
      <span>Benefits </span>
      <div className="cards">
        <div className="card1">
          <img src={cardpic} />
          <h3>Placement Facilitation</h3>
          <p>
            Career support and Placement facilitation will be provided for
            students who succeqssfully complete the course. This includes resume
            building, interview preparation, and job placement assistance.
          </p>
        </div>
        <div className="card1"  id="mycard">
          <img src={cardpic} />
          <h3>Blended Delivery</h3>
          <p>
            A pharmacy course combines online learning with in-person sessions,
            offering flexibility and hands-on experiences. This approach
            enhances engagement, facilitates self-paced learning, and ensures
            comprehensive education in pharmacy
          </p>
        </div>
        <div className="card1">
          <img src={cardpic} />
          <h3>Value Additions</h3>
          <p>
            The course includes value additions such as soft skills training,
            communication skills, and personality development. These skills are
            essential for a successful career in pharmacy.
          </p>
        </div>
        <div className="arrow-button">
      <span className="arrow">&rarr; </span>
    </div>
      </div>
    </div>
  );
}

export default Benefits;
