import React from "react";
import "./head.css";
import logo from "../../assets/logo.png";
import docs from "../../assets/docs.png";


function Head() {
  return (
    <div>
      <div className="head">
        <div className="head1">
          <div className="logo">
            <img src={logo} />
          </div>

          <div className="search">
            <button className="explore-button">
              Explore
              <span>▼</span>
            </button>
            <div className="search-bar-container">
              <span className="search-icon">🔍</span>
              <input
                className="search-input"
                type="text"
                placeholder="What do you want to learn today"
              />
              <span className="send-icon">➤</span>
            </div>
          </div>

          <div className="accounts">
            <div className="signin">Signin</div>
            <div className="register">Register for free</div>
          </div>
        </div>


        <div className="head2">
           <div className="mater"><span>Home  &nbsp;&nbsp; Integrated Degree &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Programs </span><br/>
           <p>Pharmacy</p>


           <div className="rating-container">
      <div className="stars">
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star filled">★</span>
        <span className="star">★</span>
      </div>
      <span className="rating-value">(4.5)</span>
    </div>


           </div>
           <div className="docs">
            <img src={docs} />
           </div>
        </div>


      </div>
    </div>
  );
}

export default Head;
