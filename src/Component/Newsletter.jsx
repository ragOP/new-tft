import React from "react";
import "./newsletter.css";
import one from "../Assets/Images/newsletter.png";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-text">
        <p className="newsletter-text-top">Newsroom Alerts</p>
        <p className="newsletter-tect-mid">
          Get updates on the latest investor events, reports, news and more from
          our IR team.
        </p>
        <p className="email">email ID</p>
        <input type="email" />
      </div>
      <div className="newsletter-img">
        <img src={one} alt="" />
      </div>
    </div>
  );
};

export default Newsletter;
