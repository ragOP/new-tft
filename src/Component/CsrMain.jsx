import React from "react";
import "./csrmain.css";
import dot from "../Assets/Images/redsmall.svg";
import one from "../Assets/Images/Rectangle 19941.png";
import two from "../Assets/Images/Rectangle 19941 (1).png";
import three from "../Assets/Images/Rectangle 19941 (2).png";
import four from "../Assets/Images/Rectangle 19941 (3).png";
import arrow from "../Assets/Images/Vector (1).png";

const CsrMain = () => {
  return (
    <div className="csrr">
      <p className="csrr-title">Corporate Social Responsibility</p>
      <div className="csr-desc">
        <div className="csr-left">
          <p>
            Together we are <br />
            <span>building a brighter future</span>
          </p>
        </div>
        <div className="csr-right">
          <p>
            As the world leader in serving science, we understand that we have a
            unique opportunity and responsibility to use our position{" "}
            <span>
              to make a positive impact on society – not only by enabling our
              customers’ success, but also through our actions as a Company to
              make the world a better place.
            </span>
          </p>
          <div className="csr-btn">
            <img src={dot} alt="" />
            <p>Read more</p>
          </div>
        </div>
      </div>
      <div className="csr-picture">
        <div className="csr-single">
          <img src={one} alt="" />
          <p className="inside">Operations</p>
          <div className="csr-single-overlay">
            <p className="csr-overlay-title">Operations</p>
            <p className="csr-overlay-desc">
              Leveraging our capabilities to support our customers while
              conducting our business and relationships with integrity
            </p>
            <div className="overlay-arrow">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="csr-single">
          <img src={two} alt="" />
          <p className="inside">Colleagues</p>
          <div className="csr-single-overlay">
            <p className="csr-overlay-title">Colleagues</p>
            <p className="csr-overlay-desc">
              Leveraging our capabilities to support our customers while
              conducting our business and relationships with integrity
            </p>
            <div className="overlay-arrow">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="csr-single">
          <img src={three} alt="" />
          <p className="inside">Communities</p>
          <div className="csr-single-overlay">
            <p className="csr-overlay-title">Communities</p>
            <p className="csr-overlay-desc">
              Leveraging our capabilities to support our customers while
              conducting our business and relationships with integrity
            </p>
            <div className="overlay-arrow">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="csr-single">
          <img src={four} alt="" />
          <p className="inside">Environment</p>
          <div className="csr-single-overlay">
            <p className="csr-overlay-title">Environment</p>
            <p className="csr-overlay-desc">
              Leveraging our capabilities to support our customers while
              conducting our business and relationships with integrity
            </p>
            <div className="overlay-arrow">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="csr-commitment">
        <p className="commit-one">OUR CSR COMMITMENT</p>
        <p className="commit-two">
          Our CSR strategy supports our success as we continue to create a great
          place to work for our colleagues, provide high-quality products for
          our customers, deliver strong returns for our shareholders, make a in
          our and reduce our impact on the environment{" "}
        </p>
      </div>
    </div>
  );
};

export default CsrMain;
