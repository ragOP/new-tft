import React from "react";
import girl from "../Assets/Images/girl.svg";
import "./mission.css";
import dot from "../Assets/Images/redsmall.svg";

export default function Mission({
  ourstories = "Mission Stories",
  description = (
    <>
      Delivering COVID-19 solutions when <br />
      the world needed it most
    </>
  ),
  description1 = (
    <>
      Our Mission is to enable our customers to <br />
      make the world healthier, cleaner and safer.
    </>
  ),
  readmore = "READ MORE",
  ...props
}) {
  return (
    <div className="container-mission" {...props}>
      <div className="content">
        <div className="heading">
          <h1 className="heading-text">{ourstories}</h1>
        </div>
        <div className="description">{description}</div>
        <div className="description1">{description1}</div>
        <div className="button-mission">
          <img src={dot} alt="" />
          <a href="/" className="button-text">
            {readmore}
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src={girl} alt="image_two" className="image" />
      </div>
    </div>
  );
}
