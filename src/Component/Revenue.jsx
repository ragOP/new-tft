import React from "react";
import "./revenue.css";
import left from "../Assets/Images/renenue.svg";
import right from "../Assets/Images/re.svg";

const Revenue = () => {
  return (
    <div className="revenue">
      <p className="revenue-top">ANNUAL REVENUE</p>
      <div className="main-renvenue">
        <div className="revenue-left">
          <img src={left} alt="" />
        </div>
        <div className="revenue-right">
          <div className="revenue-top1">
            <p>$ 44.915 billion</p>
          </div>
          <div className="revenue-mid">
            <p>
              Thermo Fisher Scientific Inc. is the world leader in serving
              science, with annual revenue over $44 billion. Our Mission is to
              enable our customers to make the world healthier, cleaner and
              safer.
            </p>
          </div>
          <div className="revenue-bottom">
            <img src={right} alt="" />
            <div className="postion-renvenue">
              <p className="position-top">Q1 Highlights</p>
              <div className="position-mid">
                <div className="first-position">
                  <p>First quarter revenue was</p>
                  <h2>
                    $11.82 <span>billion</span>
                  </h2>
                </div>
                <div className="second-position">
                  <p>GAAP diluted earnings per share (EPS)</p>
                  <h2>$5.6</h2>
                </div>
                <div className="third-position">
                  <p>Adjusted EPS</p>
                  <h2>$7.25</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-renvenue">
        <div className="left-bottom">
          <p className="left-first">Stock Price</p>
          <p className="left-second">NYSE : TMO</p>
        </div>
        <div className="right-bottom">
          <p className="bottom-first">$ 588.84</p>
          <p className="bottom-second">
            04/14/2023 | 04:00 pm (Pricing delayed by 15 mins)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
