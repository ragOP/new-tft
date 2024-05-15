import React from "react";
import "./leadershipn.css";
// import cover from "../Assets/Images/cover 1.png";
import one from '../../Assets/Images/req.png'
// import dot from "../Assets/Images/redsmall.svg";

const LeadershipN = () => {
  return (
    <div className="leadershipn-main">
      <div className="leadershipn-top">
        <div className="leadershipn-title">THOUGHT LEADERSHIP</div>
        <div className="leadershipn-cover">
          <img src={one} alt=""  width={400} height={390}/>
          <div className="leadershipn-right">
            <p className="leadershipn-top-right">
              Today’s optimism is tomorrow’s innovation
            </p>
            <p className="leadershipn-mid-right">
              Scientists’ role is to move us toward a better future. But what
              does that future look like? What does the next generation lab look
              like, who is standing in it and what problems will they be
              solving?
            </p>
            <p className="leadershipn-mid2-right">
              Thermo Fisher Scientific partnered with Savanta, a leading market
              research company, to understand what professionals in Life
              Sciences expect the world to look like in 2030. We conducted 20
              hour-long in-depth interviews and surveyed more than 600 Life
              Science professionals from the United States and Europe.
            </p>
            <div className="leadershipn-btn">
              {/* <img src={dot} alt="" /> */}
              <p>Read whitepaper</p>
            </div>
          </div>
        </div>
        <div className="leadership-cover-bottom">
          <p>
            “It is an exciting time to be a scientist. And it’s getting better.
            I feel like I’m just exploring my hobby or a passion, and I get paid
            for it.”
          </p>
          <p className="author">Masi, Director, Biotechnology</p>
        </div>
      </div>
      <div className="leadershipn-bottom">
        <p className="leadership-bottom-top">
          Faced with these challenges,{" "}
          <span>
            scientists are not afraid to tackle them, and are confident they are
            going to succeed:
          </span>
        </p>
        <div className="leadershipn-single-top">
          <div className="leadershipn-bottom-single">
            <p className="percentage">91%</p>
            <p className="percentage-desc">
              of scientist agree that Life Sciences companies should prioritize
              people and humanity over the products and services they provide.
            </p>
          </div>
          <div className="leadershipn-bottom-single">
            <p className="percentage">76%</p>
            <p className="percentage-desc">
              of scientists believe they will live to see a complete cure to
              most types of cancers during their lifetime.
            </p>
          </div>
          <div className="leadershipn-bottom-single">
            <p className="percentage">92%</p>
            <p className="percentage-desc">
              of scientists say implementation of environmentally responsible
              R&D can be achieved by 2050.
            </p>
          </div>
        </div>
        <p className="leadership-bottom-top">
          By 2030, <span>scientist believe the following:</span>
        </p>
        <div className="leadershipn-single-bottom">
          <div className="leadership-bottom-single">
            <p className="percentage">88%</p>
            <p className="percentage-desc">
              believe that artificial intelligence computing will have
              completely transformed the operation of labs.
            </p>
          </div>
          <div className="leadership-bottom-single">
            <p className="percentage">74%</p>
            <p className="percentage-desc">
              say that fewer human workers will be needed in labs because of
              productivity gains tied to robotics.
            </p>
          </div>
          <div className="leadership-bottom-single">
            <p className="percentage">74%</p>
            <p className="percentage-desc">
              agree that by 2030, virtual labs will rival traditional ones in
              terms of numbers and output.
            </p>
          </div>
          <div className="leadership-bottom-single">
            <p className="percentage">64%</p>
            <p className="percentage-desc">
              say the labs of 2030 will be unrecognizable compared to right
              before the pandemic.
            </p>
          </div>
        </div>
      </div>
      <div className="leadership-btn">
        {/* <img src={dot} alt="" /> */}
        <p>Learn more about thought leadership</p>
      </div>
    </div>
  );
};

export default LeadershipN;
