import React from "react";
import "./press.css";
import one from "../Assets/Images/press1.png";
import two from "../Assets/Images/press2.png";
import three from "../Assets/Images/press3.png";
import dot from "../Assets/Images/redsmall.svg";

const Press = () => {
  return (
    <div className="press">
      <p className="press-title">PRESS RELEASES</p>
      <div className="press-main">
        <div className="press-single">
          <img src={one} alt="" />
          <p className="press-date">January 5th, 2023</p>
          <p className="press-desc">
            Thermo Fisher Scientific Prices Offering of USD-Denominated Senior
            Notes
          </p>
        </div>
        <div className="press-single">
          <img src={three} alt="" />
          <p className="press-date">January 5th, 2023</p>
          <p className="press-desc">
            Thermo Fisher Scientific & Flagship Pioneering Expand Ongoing
            Strategic Partnership to Jointly Create New Platform Companies with
            First-in-Class Enabling Technologies for Life Sciences
          </p>
        </div>
        <div className="press-single">
          <img src={two} alt="" />
          <p className="press-date">January 5th, 2023</p>
          <p className="press-desc">
            Thermo Fisher Scientific Authorizes $4 Billion of Share Repurchases
          </p>
        </div>
      </div>
      <div className="press-btn">
        <img src={dot} alt="" />
        <p>View all press releases</p>
      </div>
    </div>
  );
};

export default Press;
