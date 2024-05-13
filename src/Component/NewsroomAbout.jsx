import React from "react";
import dot from "../Assets/Images/redsmall.svg";
import "./newsroomabout.css";

const NewsroomAbout = () => {
  return (
    <div className="newsroom-about">
      <p className="newsroom-about-title">NEWSROOM</p>
      <div className="newsroom-about-left">
        <p className="newsroom-about-left-heading">
          <span>Advance health equity</span> among HIV positive youth in
          Sub-Saharan Africa
        </p>
        <div className="main-btn-newsroom">
          <img src={dot} alt="" />
          <p>Read more</p>
        </div>
      </div>
      <div className="newsroom-about-about">
        <div className="newsroom-top">
          Thermo Fisher Scientific and Project HOPE Partner to Advance Health
          Equity Among HIV Positive Youth in Sub-Saharan Africa.
        </div>
        <div className="newsroom-right">
          Collaboration designed to improve health outcomes by enabling expanded
          access to HIV testing and support services in Nigeria
        </div>
      </div>
    </div>
  );
};

export default NewsroomAbout;
