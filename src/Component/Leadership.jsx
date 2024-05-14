import React from "react";
import founder from "../Assets/Images/founder.svg";
import profile1 from "../Assets/Images/Rectangle 19930.svg";
import profile2 from "../Assets/Images/Rectangle 19930 (1).svg";
import profile3 from "../Assets/Images/Rectangle 19930 (2).svg";
import profile4 from "../Assets/Images/Rectangle 19930 (3).svg";
import profile5 from "../Assets/Images/Rectangle 19930 (4).svg";
import profile6 from "../Assets/Images/Rectangle 19930 (5).svg";
import profile7 from "../Assets/Images/Rectangle 19930 (6).svg";
import profile8 from "../Assets/Images/Rectangle 19930 (7).svg";
import "./leadership.css";
import dot from "../Assets/Images/redsmall.svg";

const Leadership = () => {
  return (
    <div className="leadership">
      <p className="leadership-heading">LEADERSHIP</p>
      <div className="leadership-main">
        <div className="leaderhsip-left">
          <img src={founder} alt="" />
        </div>
        <div className="leadership-right">
          <div className="leadership-right-top">MESSAGE FROM CEO</div>
          <div className="leadership-description">
            “ The reason we responded so quickly to the pandemic was the amazing
            team we have. 90,000 colleagues around the world dedicated to our
            customers’ success.”
          </div>
          <div className="leadership-bottom">READ COMPLETE LETTER</div>
        </div>
      </div>
      <div className="bottom-title">
        Our <span>leadership team</span>
      </div>
      <div className="leadership-images">
        <div className="single-image">
          <img src={profile1} alt="" />
          <div className="single-desc">
            <p className="name">Lisa P. Britt</p>
            <p className="designation">
              Senior Vice President & Chief Human Resources Officer
            </p>
          </div>
        </div>
        <div className="single-image">
          <img src={profile2} alt="" />
          <div className="single-desc">
            <p className="name">Aditya Joshi</p>
            <p className="designation">
              Vice President & Chief Strategy Officer
            </p>
          </div>
        </div>
        <div className="single-image">
          <img src={profile3} alt="" />
          <div className="single-desc">
            <p className="name">Michel Lagarde</p>
            <p className="designation">
              Executive Vice President & Chief Operating Officer
            </p>
          </div>
        </div>
        <div className="single-image">
          <img src={profile7} alt="" />
          <div className="single-desc">
            <p className="name">Karen E. Nelson</p>
            <p className="designation">Chief Scientific Officer</p>
          </div>
        </div>
        <div className="single-image">
          <img src={profile4} alt="" />
          <div className="single-desc">
            <p className="name">Sandy Pound</p>
            <p className="designation">
              Vice President & Chief Communications Officer
            </p>
          </div>
        </div>
        <div className="single-image">
          <img src={profile5} alt="" />
          <div className="single-desc">
            <p className="name">Alan Sachs</p>
            <p className="designation">Chief Medical Officer</p>
          </div>
        </div>
        <div className="single-image">
          <img src={profile6} alt="" />
          <div className="single-desc">
            <p className="name">Ryan Snyder</p>
            <p className="designation">
              Senior Vice President & Chief Information Officer
            </p>
          </div>
        </div>
        <div className="single-image">
          <img src={profile8} alt="" />
          <div className="single-desc">
            <p className="name">Stephen Williamson</p>
            <p className="designation">
              Senior Vice President & Chief Financial Officer
            </p>
          </div>
        </div>
      </div>
      <div
        className="button-mission"
        style={{
          marginLeft: "100px",
          marginTop: "50px",
          marginBottom: "50px",
          width: "290px",
        }}
      >
        <img src={dot} alt="" />
        <p
          className="button-text"
          style={{
            textTransform: "capitalize",
            cursor: "pointer",
          }}
        >
          FULL LEADERSHIP LIST
        </p>
      </div>
    </div>
  );
};

export default Leadership;
