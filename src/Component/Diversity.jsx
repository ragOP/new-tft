import React from "react";
import "./diversity.css";
import main from "../Assets/Images/diversity.svg";
import first from "../Assets/Images/Rectangle 19922.svg";
import second from "../Assets/Images/Rectangle 19923.svg";
import third from "../Assets/Images/Rectangle 19924.svg";
import dot from "../Assets/Images/redsmall.svg";
import slider from "../Assets/Images/Group 162.svg";

const Diversity = ({
  title,
  desc,
  sliderr,
  heading,
  hedingSpan,
  background,
}) => {
  return (
    <div className="containermain" style={{ background: background }}>
      <p className="title">{title}</p>
      <div className="diversity-main">
        <div className="diversity-img">
          <img src={main} alt="" />
          <img src={first} alt="" />
          <img src={second} alt="" />
          <img src={third} alt="" />
        </div>
        <div className="diversity-text">
          <p className="diversity-title">
            {heading} <span>{hedingSpan}</span>
          </p>
          <p className="diversity-desc">{desc}</p>
          <div className="button-mission" style={{ width: "144px" }}>
            <img src={dot} alt="" />
            <p
              className="button-text"
              style={{ cursor: "pointer", textTransform: "capitalize" }}
            >
              Read Full Story
            </p>
          </div>
          {sliderr && <img className="img-slider" src={slider} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Diversity;
