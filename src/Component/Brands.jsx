import React from "react";
import "./brands.css";
import one from "../Assets/Images/Layer 1.svg";
import two from "../Assets/Images/Layer 1 (1).svg";
import three from "../Assets/Images/Layer 1 (2).svg";
import four from "../Assets/Images/Layer 1 (3).svg";
import five from "../Assets/Images/Layer 1 (4).svg";
import six from "../Assets/Images/Layer 1 (5).svg";
import seven from "../Assets/Images/Layer 1 (6).svg";
import eight from "../Assets/Images/Layer 1 (7).svg";
import left from "../Assets/Images/Banner1.svg";
import right from "../Assets/Images/Banner2.png";
import logo from "../Assets/Images/Group.svg";

const Brands = () => {
  return (
    <div className="brands">
      <div className="brands-title">OUR BRANDS</div>
      <div className="brand-banner">
        <div className="banner-left">
          <img src={left} alt="" />
          <img className="banner-left-img" src={logo} alt="" />
        </div>
        <div className="banner-right">
          <img src={right} alt="" />
          <p className="banner-right-text">
            Whether they are improving life for patients, protecting our global
            climate or keeping people safe, our customers look to Thermo Fisher
            Scientific for innovative solutions. Products and services sold
            under the following Thermo Fisher brands enable customers to push
            science and technology a step beyond.
          </p>
        </div>
      </div>
      <div className="banner-logos">
        <div className="logo-single" data-bgcolor="1">
          <img src={eight} alt="" style={{ width: "161px", height: "79px" }} />
          <div className="brand-name">
            <p className="brand-description">
              A commitment to analytical precision
            </p>
            <div
              className="custom-description"
              data-description="Thermo Scientific instruments, equipment, software, services and consumables address a range of needs from sample, material characterization and chemical analysis to clinical diagnoses and biological-based therapeutics manufacturing."
            ></div>
          </div>
        </div>
        <div className="logo-single" data-bgcolor="2">
          <img src={one} alt="" style={{ width: "191px", height: "75px" }} />
          <div className="brand-name">
            <p className="brand-description">The path to genomic discoveries</p>
            <div
              className="custom-description"
              data-description="Our genomic solutions are trusted to address a variety of basic, commercial and clinical research applications in fields such as cancer diagnostics, human identification testing and animal health, as well as inherited and infectious disease."
            ></div>
          </div>
        </div>
        <div className="logo-single" data-bgcolor="3">
          <img src={two} alt="" style={{ width: "191px", height: "75px" }} />
          <div className="brand-name">
            <p className="brand-description">Accelerating discovery research</p>
            <div
              className="custom-description"
              data-description="From antibodies and protein purification to gene editing and cell analysis, Invitrogen™ protein biology, molecular biology and cell imaging and analysis products help scientists conduct biological and bio-medical research and discover new drugs."
            ></div>
          </div>
        </div>
        <div className="logo-single" data-bgcolor="4">
          <img src={three} alt="" style={{ width: "231px", height: "95px" }} />
          <div className="brand-name">
            <p className="brand-description">
              The scientific marketplace for choice and convenience
            </p>
            <div
              className="custom-description"
              data-description="The Fisher Scientific channel offers customers convenient access to a complete portfolio of laboratory equipment, chemicals, supplies and services used in the scientific research, healthcare and science education markets."
            ></div>
          </div>
        </div>
        <div className="logo-single" data-bgcolor="5">
          <img src={four} alt="" style={{ width: "191px", height: "75px" }} />
          <div className="brand-name">
            <p className="brand-description">
              The laboratory service and support solution
            </p>
            <div
              className="custom-description"
              data-description="As lab service and support experts and partners, the Unity Lab Services team provides training, equipment servicing and asset management, as well as dedicated supply management to maximize operational productivity."
            ></div>
          </div>
        </div>
        <div className="logo-single" data-bgcolor="6">
          <img src={five} alt="" style={{ width: "191px", height: "75px" }} />
          <div className="brand-name">
            <p className="brand-description">
              End-to-end pharma services solutions
            </p>
            <div
              className="custom-description"
              data-description="Our pharmaceutical services provide industry leading CDMO and clinical trial solutions to companies of all sizes. With more than 65 locations around the world, we provide an end-to-end drug development offering that includes API, biologics, viral vector services, cGMP plasmids, early and late phase ..."
            ></div>
          </div>
        </div>
        <div className="logo-single" data-bgcolor="7">
          <img src={seven} alt="" />
          <div className="brand-name">
            <p className="brand-description">
              Helping deliver life-changing therapies
            </p>
            <div
              className="custom-description"
              data-description="Our broad range of clinical development and analytical services enables Thermo Fisher Scientific customers to drive innovation and increase drug development productivity. Recognized for accelerating promising medicines from early development through regulatory approval and market access..."
            ></div>
          </div>
        </div>
        <div className="logo-single" data-bgcolor="8">
          <img src={six} alt="" />
          <div className="brand-name">
            <p className="brand-description">
              Solutions for the everyday and the extra challenging
            </p>
            <div
              className="custom-description"
              data-description="Our broad range of clinical development and analytical services enables Thermo Fisher Scientific customers to drive innovation and increase drug development productivity. Recognized for accelerating promising medicines from early development through regulatory approval and market access..."
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
