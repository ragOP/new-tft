import React from "react";
import one from "../Assets/Images/g1.svg";
import two from "../Assets/Images/g10.svg";
import three from "../Assets/Images/g11.svg";
import four from "../Assets/Images/Clipboard 1.svg";
import dot from "../Assets/Images/redsmall.svg";
import "./framework.css";

const Framework = () => {
  return (
    <div className="framework">
      <div className="framework-title-main">Strategic Framework</div>
      <div className="framework-main">
        <div className="framework-single">
          <img src={four} alt="" />
          <div className="main-frame-des" style={{ marginTop: "-15px" }}>
            <p className="framework-title">Reporting</p>
            <p className="framework-description">
              In line with our commitment to transparency, we publish an annual
              CSR Report that outlines our progress consistent with our CSR
              strategy.
            </p>
          </div>
        </div>
        <div className="framework-single">
          <img src={one} alt="" />
          <div className="main-frame-des">
            <p className="framework-title">Materiality Assessment</p>
            <p className="framework-description">
              In line with the Company’s growth and evolution, we conducted an
              initial materiality assessment in 2019 through an in-depth process
              led by an independent third-party advisor.
            </p>
          </div>
        </div>
        <div className="framework-single">
          <img src={two} alt="" />
          <div className="main-frame-des">
            <p className="framework-title">Stakeholder Engagement</p>
            <p className="framework-description">
              We are committed to creating sustainable value for all our
              stakeholders.
            </p>
          </div>
        </div>
        <div className="framework-single">
          <img src={three} alt="" />
          <div className="main-frame-des">
            <p className="framework-title">Sustainable Finance</p>
            <p className="framework-description">
              We embed our environmental, social and governance (ESG) priorities
              within the business to drive ownership and progress toward our
              commitments.
            </p>
          </div>
        </div>
      </div>
      <div className="framework-btn">
        <img src={dot} alt="" />
        <p className="btn-framework">Read more</p>
      </div>
    </div>
  );
};

export default Framework;
