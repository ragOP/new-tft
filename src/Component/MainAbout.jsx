import React from "react";
import "./mainabout.css";
import main from "../Assets/Images/about-main.png";
import left from "../Assets/Images/main-overlay.svg";
import right from "../Assets/Images/mainn-overlay.svg";
import play from "../Assets/Images/play.svg";

const MainAbout = ({ className }) => {
  return (
    <div className={`main-about ${className}`}>
      <div className="decription">ABOUT</div>
      <div className="main-about-img">
        <img src={main} alt="" />
        <div className="main-overlay">
          <div className="left-main-overlay">
            <img src={left} alt="" />
            <div className="play">
              <div className="round">
                <img src={play} alt="" />
              </div>
              <p className="play-btn">Watch this video</p>
            </div>
          </div>
          <div className="right-main-overlay">
            <img src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
