import React, { useState } from "react";
import "./navbar.css";
import logo from "../Assets/Images/logo.png";
import logo1 from "../Assets/Images/logo1.png";
import search from "../Assets/Images/Search.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ toggleDropdown, openDropDown }) => {
  const location = useLocation();
  const path = location.pathname;
  let usePath;
  if (path === "/") {
    usePath = null;
  } else if (path === "/csr") {
    usePath = "CSR";
  } else if (path === "/about") {
    usePath = "About";
  } else if (path === "/investor") {
    usePath = "Investor";
  } else if (path === "/newsroom") {
    usePath = "Newsroom";
  }
  const [activeMenuItem, setActiveMenuItem] = useState(usePath);
  const handleMenuItemClick = (menuItem) => {
    toggleDropdown(menuItem);
    setActiveMenuItem(menuItem === activeMenuItem ? null : menuItem);
  };

  console.log(openDropDown);

  return (
    <div className="navbar">
      <Link to="/">
        <div className="navlogo">
          <img src={openDropDown ? logo1 : logo} alt="" />
        </div>
      </Link>
      <div className="menulinks">
        <div className="menu">
          <ul>
            <li className={activeMenuItem === "About" ? "active" : ""}>
              <Link
                className={activeMenuItem === "About" ? "active" : ""}
                onClick={() => handleMenuItemClick("About")}
              >
                ABOUT
              </Link>
            </li>
            <li className={activeMenuItem === "CSR" ? "active" : ""}>
              <Link
                className={activeMenuItem === "CSR" ? "active" : ""}
                onClick={() => handleMenuItemClick("CSR")}
              >
                CORPORATE SOCIAL RESPONSIBILITY
              </Link>
            </li>
            <li className={activeMenuItem === "Investor" ? "active" : ""}>
              <Link
                className={activeMenuItem === "Investor" ? "active" : ""}
                onClick={() => handleMenuItemClick("Investor")}
              >
                INVESTOR
              </Link>
            </li>
            <li className={activeMenuItem === "Newsroom" ? "active" : ""}>
              <Link
                className={activeMenuItem === "Newsroom" ? "active" : ""}
                onClick={() => handleMenuItemClick("Newsroom")}
              >
                NEWSROOM
              </Link>
            </li>
            <li className={activeMenuItem === "Career" ? "active" : ""}>
              <Link
                className={activeMenuItem === "Career" ? "active" : ""}
                onClick={() => handleMenuItemClick("Career")}
              >
                CAREER
              </Link>
            </li>
          </ul>
        </div>
        <div className="search-icon">
          <img src={search} alt="" />
        </div>
        <button className="button">Thermofisher.com</button>
      </div>
    </div>
  );
};

export default Navbar;
