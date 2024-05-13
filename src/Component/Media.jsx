import React from "react";
import "./media.css";
import x from "../Assets/Images/link.svg";
import twi from "../Assets/Images/twit.svg";
import facebook from "../Assets/Images/facebook.svg";
const Media = () => {
  return (
    <div className="main-media">
      <div className="main-media-title">SOCIAL MEDIA</div>
      <div className="container">
        <div className="leftdiv">
          <img src={x} alt="a" className="logo" />
          <p class="p">
            Our President & CEO, Marc Casper, talks with Jim Cramer of “Mad
            Money” about the future of gene therapy upon the recent acquisition
            of Brammer Bio and the importance of precisions medicine to Thermo
            Fisher Scientific’s growth strategy.
            <div>Thermo Fisher Scientific | Fri, 03 Feb 2023</div>
          </p>
        </div>
        <div className="leftdiv">
          <img src={twi} alt="a" className="logo" />
          <p class="p">
            @thermofisher As we get ready to celebrate Earth Day this Saturday,
            April 22nd, we will share throughout the week, the many ways our
            colleagues around the globe are working to reduce our impact on the
            environment and help secure a more socially.
            <div>Thermo Fisher Scientific | Fri, 03 Feb 2023</div>
          </p>
        </div>
        <div className="leftdiv">
          <img src={facebook} alt="a" className="logo" />
          <p class="p">
            Our President & CEO, Marc Casper, talks with Jim Cramer of “Mad
            Money” about the future of gene therapy upon the recent acquisition
            of Brammer Bio and the importance of precisions medicine to Thermo
            Fisher Scientific’s growth strategy. <br />
            <div>Thermo Fisher Scientific | Fri, 03 Feb 2023</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Media;
