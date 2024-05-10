import React from "react";
import main from "../Assets/Images/mission-about.svg";
import "./missionAbout.css";

const MissionAbout = () => {
  return (
    <div className="mission-about">
      <p className="mission-about-titile">OUR MISSION</p>
      <div className="mission-main-about">
        <div className="mission-about-left">
          <p className="mission-top">
            Everything we do starts with our Mission
          </p>
          <p className="mission-second">
            To enable our customers to make the world{" "}
            <span>healthier, cleaner, and safer.</span>
          </p>
          <p className="mission-third">
            The nature of our business is to enable growth and innovation within
            the global scientific community and to help researchers,
            organizations, and companies solve some of the world’s most pressing
            issues. We do that by providing cutting-edge technologies and
            services that are the result of our significant investment in
            research and development.
          </p>
          <p className="mission-last">
            We believe creating a better tomorrow starts with the action we take
            today, and we continually strive toward improvement and excellence
            for the benefit of our customers, our colleagues, and the world.
          </p>
        </div>
        <div className="mission-about-right">
          <img src={main} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MissionAbout;
