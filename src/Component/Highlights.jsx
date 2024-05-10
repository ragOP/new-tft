import React from "react";
import "./highlight.css";
import one from "../Assets/Images/high1.png";
import two from "../Assets/Images/high2.png";
import three from "../Assets/Images/high3.png";
import four from "../Assets/Images/high4.png";

const Highlights = () => {
  return (
    <div className="highlights">
      <p className="highlight-title">HIGHLIGHTS</p>
      <div className="main-highlight">
        <div className="single-highlight">
          <img src={one} alt="" />
          <div className="title-highlight">$1.3 billion</div>
          <p className="desc-highlight">In R&D Investment</p>
        </div>
        <div className="single-highlight">
          <img src={two} alt="" />
          <div className="title-highlight">Net-zero emission</div>
          <p className="desc-highlight">by 2050 </p>
        </div>
        <div className="single-highlight">
          <img src={four} alt="" />
          <div className="title-highlight">25% reduction</div>
          <p className="desc-highlight">
            in absolute scope 1 and 2 emissions since 2018
          </p>
        </div>
        <div className="single-highlight">
          <img src={four} alt="" />
          <div className="title-highlight">89.5K students</div>
          <p className="desc-highlight">reached through STEM education</p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
