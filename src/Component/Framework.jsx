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
          <div className="main-frame-des">
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
            <p className="framework-title">Reporting</p>
            <p className="framework-description">
              In line with our commitment to transparency, we publish an annual
              CSR Report that outlines our progress consistent with our CSR
              strategy.
            </p>
          </div>
        </div>
        <div className="framework-single">
          <img src={two} alt="" />
          <div className="main-frame-des">
            <p className="framework-title">Reporting</p>
            <p className="framework-description">
              In line with our commitment to transparency, we publish an annual
              CSR Report that outlines our progress consistent with our CSR
              strategy.
            </p>
          </div>
        </div>
        <div className="framework-single">
          <img src={three} alt="" />
          <div className="main-frame-des">
            <p className="framework-title">Reporting</p>
            <p className="framework-description">
              In line with our commitment to transparency, we publish an annual
              CSR Report that outlines our progress consistent with our CSR
              strategy.
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
