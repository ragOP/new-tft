import React from "react";
import "./mainnewsroom.css";
import one from "../Assets/Images/sa.png";
import investor from "../Assets/Images/investor.png";

import two from "../Assets/Images/saa.png";
import three from "../Assets/Images/saaa.png";

const MainNewsroomInvestor = () => {
  return (
    <div className="main-news">
      <img src={investor} alt="" />
      <div className="main-poistion">
        <img className="main-cover" src={two} alt="" />
        <div className="image-txt">
          {/* <p className="txt-top">Our Stories</p> */}
          <p className="txt-mid-investor">
          Thermo Fisher Scientific Inc. is the world leader in serving science, with annual revenue over $40 billion. 

Our Mission is to enable our customers to make the world healthier, cleaner and safer.
           {" "}
          </p>
          <img className="txt-slider" src={one} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainNewsroomInvestor;
