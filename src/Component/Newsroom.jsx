import React from "react";
import "./newsroom.css";
import left from "../Assets/Images/newsroom1.svg";
import right from "../Assets/Images/newsroom2.svg";
import dot from "../Assets/Images/redsmall.svg";

const Newsroom = () => {
  return (
    <div className="newsroom">
      <p className="newsroom-heading">NEWS ROOM</p>
      <div className="newsroom-main">
        <div className="newroom-left">
          <p className="badge">Latest News</p>
          <p className="newsroom-desc">
            12-year-old Develops Fire Detection System; Wins $25,000 Top Award
            at the Inaugural Thermo Fisher Scientific Junior Innovators
            Challenge
          </p>
          <p className="newsroom-date">January 11th, 2023</p>
          <div className="newsroom-img">
            <img src={left} alt="" />
          </div>
          <div className="button-mission">
            <img src={dot} alt="" />
            <p className="button-text" style={{ cursor: "pointer" }}>
              Read more
            </p>
          </div>
        </div>
        <div className="newroom-left">
          <p className="badge">Latest News</p>
          <p className="newsroom-desc">
            Thermo Fisher Scientific Announces Oncomine Clinical Research Grant
            Awardees and Opens Spring 2023 Submissions
          </p>
          <p className="newsroom-date">April 17th, 2023</p>
          <div className="newsroom-img">
            <img src={right} alt="" />
          </div>
          <div className="button-mission">
            <img src={dot} alt="" />
            <p className="button-text" style={{ cursor: "pointer" }}>
              Read more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsroom;
