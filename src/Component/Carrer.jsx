import React from "react";
import "./carrer.css";
import pic from "../Assets/Images/stock.png";
import dot from "../Assets/Images/redsmall.svg";

const Carrer = () => {
  return (
    <div className="career">
      <p className="career-headding">CAREER</p>
      <div className="carrer-main">
        <div className="carrer-text">
          <p className="text">
            <span>Work in an inclusive global environment</span> that values the
            power of diverse talent, background and experiences
          </p>
          <div className="button-mission" style={{ width: "292px" }}>
            <img src={dot} alt="" />
            <p
              className="button-text"
              style={{ cursor: "pointer", width: "242px" }}
            >
              EXPLORE OPPORTUNITIES
            </p>
          </div>
        </div>
        <div className="carrer-img">
          <img src={pic} alt="s" />
        </div>
      </div>
    </div>
  );
};

export default Carrer;
