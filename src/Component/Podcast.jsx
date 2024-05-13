import React from "react";
import "./podcast.css";
import one from "../Assets/Images/podcast-placeholder 1.png";
import two from "../Assets/Images/ok.png";
import dot from "../Assets/Images/redsmall.svg";

const Podcast = () => {
  return (
    <div className="podcast">
      <div className="podcast-title">Latest Podcasts</div>
      <div className="main-podcast">
        <div className="podcast-left">
          <img src={one} alt="" />
          <div className="podcast-text">
            <p className="podcast-top">
              Delivering on the promise of cell therapies: Programmed immune
              cells attack cancer and other...
            </p>
            <div className="podcast-play">
              <img src={two} alt="" />
              <p className="play-text">
                Watch Science with a Twist | Season 2 : Episode 10
              </p>
            </div>
          </div>
        </div>
        <div className="podcast-right">
          <img src={one} alt="" />
          <div className="podcast-text">
            <p className="podcast-top">
              Delivering on the promise of cell therapies: Programmed immune
              cells attack cancer and other...
            </p>
            <div className="podcast-play">
              <img src={two} alt="" />
              <p className="play-text">
                Watch Science with a Twist | Season 2 : Episode 10
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="podcast-btn">
        <img src={dot} alt="" />
        <p>View all podcasts</p>
      </div>
    </div>
  );
};

export default Podcast;
