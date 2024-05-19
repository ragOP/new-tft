import React from "react";
import dot from "../Assets/Images/redsmall.svg";
import "./newsroomabout.css";

const NewsroomAbout = () => {
  return (
    <div className="newsroom-about">
      <p className="newsroom-about-title">INVESTORS</p>
      <div className="newsroom-about-main">
        <div className="newsroom-about-left">
          <p className="newsroom-about-left-heading">
            Healthier,Cleaner and Safer.
            <br/>
            <span>The world leader in serving science</span>
       
          </p>
          <div className="main-btn-newsroom">
            <img src={dot} alt="" />
            <p>Read more</p>
          </div>
        </div>
        <div className="newsroom-about-about">
          <div className="newsroom-top">
          NYSE : TMO  $ 588.84
          </div>
          <div className="newsroom-right-investor">
          04/14/2023 | 04:00 pm <br/>
(Pricing delayed by 15 mins)
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsroomAbout;
