import React from "react";
import "./eithics.css";
import one from "../Assets/Images/Rectangle 19948.png";

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
            <img src="" alt="" />
            <p>
              All directors, officers and employees of the Company are
              responsible for reviewing this Code and certifying annually that
              they have reviewed and are in compliance with it
            </p>
          </div>
          <div className="eithics-mid">
            <img src="" alt="" />
            <p>
              All directors, officers and employees of the Company are
              responsible for reviewing this Code and certifying annually that
              they have reviewed and are in compliance with it
            </p>
          </div>
          <div className="eithics-btn">
            <img src="" alt="" />
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
