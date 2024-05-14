import React from "react";
import "./eithics.css";
import one from "../Assets/Images/Rectangle 19948.png";
import dot from "../Assets/Images/redsmall.svg";

const Eithics = () => {
  return (
    <div className="eithics">
      <div className="eithics-title-main">ETHICS</div>
      <div className="eithics-main">
        <div className="eithics-left">
          <div className="eithics-title">
            Annual review, certification and training on{" "}
            <span> our code of business conduct and ethics</span>
          </div>
          <div className="eithics-mid">
            <img src={dot} alt="" />
            <p>
              All directors, officers and employees of the Company are
              responsible for reviewing this Code and certifying annually that
              they have reviewed and are in compliance with it
            </p>
          </div>
          <div className="eithics-mid">
            <img src={dot} alt="" />
            <p>
              All directors, officers and employees of the Company are
              responsible for reviewing this Code and certifying annually that
              they have reviewed and are in compliance with it
            </p>
          </div>
          <div className="csr-btn" style={{ width: "123px" }}>
            <img src={dot} alt="" />
            <p>Read more</p>
          </div>
        </div>
        <div className="eithicts-right">
          <img src={one} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Eithics;
