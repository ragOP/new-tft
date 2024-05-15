import React from "react";
// import dot from "../Assets/Images/redsmall.svg";
// import one from "../Assets/Images/Rectangle 19960 (3).png";
// import two from "../Assets/Images/Rectangle 19960 (1).png";
// import three from "../Assets/Images/Rectangle 19960 (2).png";

import one from '../../Assets/Images/req.png'
import "./inNews.css";

const InNews = () => {
  return (
    <div className="inNews">
      <p className="inNews-title">IN THE NEWS</p>
      <div className="inNews-main">
        <div className="inNews-single">
          <p className="inNews-badge">The Washington Post</p>
          <img src={one} alt="" width={400} />
          <p className="inNews-date">January 5th, 2021</p>
          <p className="inNews-desc">
            Shanya Gill, 12, invented early detection device for fire
          </p>
          <div className="btn-single">
            {/* <img src={dot} alt="" /> */}
            <p>Read more</p>
          </div>
        </div>
        <div className="inNews-single">
          <p className="inNews-badge">Business Insider</p>
          <img src={one} alt=""  width={400} />
          <p className="inNews-date">January 5th, 2021</p>
          <p className="inNews-desc">
            A middle-schooler just won $25,000 for inventing a fire-detection
            device that works faster than the average smoke detector
          </p>
          <div className="btn-single">
            {/* <img src={one} alt="" /> */}
            <p>Read more</p>
          </div>
        </div>
        <div className="inNews-single">
          <p className="inNews-badge">Time</p>
          <img src={one} alt=""  width={400}  />
          <p className="inNews-date">January 5th, 2021</p>
          <p className="inNews-desc">
            A More Accurate Diagnosis Thermo Fisher Scientific Preeclampsia
            Blood Tests
          </p>
          <div className="btn-single">
            {/* <img src={dot} alt="" /> */}
            <p>Read more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InNews;
