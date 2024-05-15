import React from "react";
import "./mainnewsroom.css";
import one from '../../Assets/Images/grey.png'
import two from "../../Assets/Images/saa.png";
// import three from "../../Assets/Images/saaa.png";

const MainNewsroom = () => {
  return (
    <div className="main-news">
      <img src={one} alt="" />
      <div className="main-poistion">
        <img className="main-cover" src={two} alt="" />
        <div className="image-txt">
          <p className="txt-top">Our Stories</p>
          <p className="txt-mid">
            My work is a story <br /> of{" "}
            <span>
              problem <br />
              solving.
            </span>{" "}
          </p>
          {/* <img className="txt-slider" src={one} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default MainNewsroom;
