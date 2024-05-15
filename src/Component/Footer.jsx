import React from "react";
import "./footer.css";
import linkedin from "../Assets/Images/linkedin-161-svgrepo-com.svg";
import twitter from "../Assets/Images/pajamas_twitter.svg";
import youtube from "../Assets/Images/youtube-168-svgrepo-com.svg";
import facebook from "../Assets/Images/facebook-176-svgrepo-com.svg";
import insta from "../Assets/Images/instagram-167-svgrepo-com.svg";
import logo from "../Assets/Images/Logo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-first">
          <p className="footer-first-top">About Thermo Fisher Scientific</p>
          <p className="footer-first-mid">
            Thermo Fisher Scientific Inc. (NYSE: TMO) is the world leader in
            serving science, with annual revenue over $40 billion. Our Mission
            is to enable our customers to make the world healthier, cleaner and
            safer. Whether our customers are accelerating life sciences
            research, solving complex analytical challenges, increasing
            productivity in their laboratories, improving patient health through
            diagnostics or the development and manufacture of life-changing
            therapies, we are here to support them. Our global team delivers an
            unrivaled combination of innovative technologies, purchasing
            convenience and pharmaceutical services through our industry-leading
            brands, including Thermo Scientific, Applied Biosystems, Invitrogen,
            Fisher Scientific, Unity Lab Services, Patheon and PPD.
          </p>
          <p className="footer-first-bootom">
            For more information, please visit{" "}
            <a href="https://www.thermofisher.com" target="_blank" rel="noopener noreferrer">
  <span style={{ textDecoration: "underline", color: "#FFFFFF" }}>
    www.thermofisher.com
  </span>
</a>

          </p>
        </div>
        <div className="footer-second">
          <p className="footer-second-top">Company</p>
          <p>Sustainability</p>
          <p>Investors</p>
          <p>Newsroom</p>
          <p>Careers</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="footer-third">
          <p className="footer-third-top">Brands</p>
          <p>Thermo Scientific</p>
          <p>Applied Biosystems</p>
          <p>Invitrogen</p>
          <p>Fisher Scientific</p>
          <p>Unity Labs Services</p>
          <p>Patheon</p>
          <p>PPD</p>
        </div>
        <div className="footer-fourth">
          <p className="footer-third-top">Connect</p>
          <div className="footer-icons">
            <div className="connect-top">
              <a
                href="https://www.linkedin.com/company/thermo-fisher-scientific/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                href="https://twitter.com/thermofisher"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="YouTube" />
              </a>
              <a
                href="https://www.instagram.com/thermofisherscientific/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="Instagram" />
              </a>
            </div>

            <div className="connect-bottom">
  <a href="https://twitter.com/thermofisher" target="_blank" rel="noopener noreferrer">
    <img src={twitter} alt="Twitter" />
  </a>
  <a href="https://www.facebook.com/thermofisher/" target="_blank" rel="noopener noreferrer">
    <img src={facebook} alt="Facebook" />
  </a>
</div>

          </div>
        </div>
      </div>
      <div className="pre-footer">
        <img className="pre-footer-logo" src={logo} alt="" />
        <p className="pre-footer-first">
          © Copyright 2006-2023 Thermo Fisher Scientific Inc. All rights
          reserved.
        </p>
        <p className="pre-footer-second">Terms & Conditions</p>
        <p className="pre-footer-third">Privacy Information Center</p>
      </div>
    </>
  );
};

export default Footer;
