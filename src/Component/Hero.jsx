import React from "react";
import top from "../Assets/Images/Vector.svg";
import down from "../Assets/Images/Vector (1).svg";
import left from "../Assets/Images/Vector (2).svg";
import right from "../Assets/Images/Vector (3).svg";
import video from "../Assets/Images/vid.mp4";
import "./hero.css";

const Hero = ({ className }) => {
  return (
    <div className={`hero ${className}`}>
      <div className="video-container">
        <video autoPlay loop muted className="video-background">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="top-trap">
        <img src={top} alt="" />
      </div>
      <div className="mission-main">
        <div className="our-mission-left">
          <img src={left} alt="" />
        </div>
        <div className="our-mission">
          <img src={down} alt="" />
          <div className="mission-text">
            <p className="mission-title">OUR MISSION</p>
            <p className="desc">
              To enable our customers <br />
              to make the world <span>healthier, cleaner and safer</span>
            </p>
            <p className="btn">READ MORE</p>
          </div>
        </div>
      </div>
      <div className="right-main">
        <div className="hero-right">
          <img src={right} alt="" />
          <div className="right">GET IN TOUCH</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
