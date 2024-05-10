import React from "react";
import "./csrreport.css";
import one from "../Assets/Images/Group 24.png";
import two from "../Assets/Images/Vector (1).png";
import three from "../Assets/Images/Frame 1000003961.png";

const CsrReport = () => {
  return (
    <div className="csr-report">
      <p className="csr-report-titile">CSR REPORT</p>
      <div className="csr-report-main">
        <div className="csr-report-one">
          <div className="csr-report-one-left">
            <p>
              Corporate Social Responsibility <span>Report </span>2023
            </p>
          </div>
          <div className="csr-report-two-right">
            <img src={one} alt="" />
            <div className="download">
              <p>
                Thermo Fisher Scientific : <span>CSR Annual Report 2023</span>
              </p>
            </div>
          </div>
        </div>
        <div className="csr-report-two">
          <p>
            Our Corporate Social Responsibility (CSR) reports are available to
            provide further detail to our CSR Programs and the progress we make
            each year. You can download current and previous years reports in
            PDF format below.
          </p>
        </div>
        <div className="csr-report-three">
          <div className="csr-three-one">
            <p>2021 Reports</p>
            <img src={two} alt="" />
          </div>
          <div className="csr-three-two">
            <p>2022 Reports</p>
            <img src={two} alt="" />
          </div>
        </div>
        <div className="csr-report-four">
          <div className="four-one">
            <p className="four-one-title">Our ESG Reporting Hub</p>
            <p className="four-two-title">
              Find out more about Thermofisher ESG hub
            </p>
          </div>
          <div className="four-two">
            <img src={three} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CsrReport;
