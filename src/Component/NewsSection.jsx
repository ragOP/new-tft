import React from "react";
import "./newsroom.css";
import left from "../Assets/Images/newsroom1.svg";
import right from "../Assets/Images/newsroom2.svg";
import dot from "../Assets/Images/redsmall.svg";

import picleft from "../Assets/Images/picleft.png";
import loan from "../Assets/Images/loan.png";
const NewsSection = () => {
  return (
    <div className="newsroom">
      <p className="newsroom-heading">NEWS</p>
      <div className="newsroom-main">
        <div className="newroom-left">
          <p className="badge">Latest News</p>
          <p className="newsroom-desc">
          Thermo Fisher Scientific Authorizes $4 Billion of Share Repurchases
          </p>
          <p className="newsroom-date">January 11th, 2023</p>
          <div className="newsroom-img">
            <img src={picleft} alt="" />
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
          Thermo Fisher Scientific Commences Tender Offer for All Outstanding Common Shares and ADSs of Olink
          </p>
          <p className="newsroom-date">April 17th, 2023</p>
          <div className="newsroom-img">
            <img src={loan} alt="" />
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

export default NewsSection;
