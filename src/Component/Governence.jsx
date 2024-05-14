import React from "react";
import "./governance.css";
import left from "../Assets/Images/governance1.png";
import right from "../Assets/Images/governance2.png";

const Governence = () => {
  return (
    <div className="governance">
      <div className="governance-title">CORPORATE GOVERNANCE</div>
      <div className="governance-main">
        <div className="governance-left">
          <img src={left} alt="" />
          <div className="governance-desc">
            <p className="governance-desc-title">
              Public policy engagement and <br />
              executive compensation
            </p>
            <p className="governance-desc-main">
              For policies on our public policy engagement and political <br />
              participation, as well as ESG-related elements in executive <br />
              compensation, please refer to our latest{" "}
              <a href="/">proxy statement </a>on <br /> the
              <a href="/">SEC filings website.</a>
            </p>
            <p className="governance-readme">READ MORE</p>
          </div>
        </div>
        <div className="governance-right">
          <img src={right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Governence;
