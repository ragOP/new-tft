import React from "react";
import "./csr.css";
import dot from "../Assets/Images/redsmall.svg";
import left from "../Assets/Images/csr.png";
import crsV from "../Assets/Images/csr1.svg";
import crsH from "../Assets/Images/csr2.svg";

const Csr = () => {
  return (
    <div className="csr">
      <p className="csr-headding">CORPORATE SOCIAL RESPONSIBILITY</p>
      <div className="csr-main">
        <div className="csr-img">
          <img src={left} alt="" />
        </div>
        <div className="csr-text">
          <p className="csr-title">
            <span>As a world leader in science,</span>
            <br /> we have a great responsibility to serve the global community
          </p>
          <div className="crs-mid">
            <img src={crsV} alt="" />
            <p className="csr-mid-txt">
              <span>$ 25 Million </span>
              <br />
              Impact investment to support Black businesses and communities.
            </p>
            <img src={crsH} alt="" />
          </div>
          <div className="button-mission">
            <img src={dot} alt="" />
            <p className="button-text" style={{ cursor: "pointer" }}>
              Read More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Csr;
