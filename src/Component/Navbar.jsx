import React, { useState } from "react";
import "./navbar.css";
import logo from "../Assets/Images/logo.png";
import search from "../Assets/Images/Search.png";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDropdown }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (menuItem) => {
    toggleDropdown(menuItem);
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="navlogo">
          <img src={logo} alt="" />
        </div>
      </Link>
      <div className="menulinks">
        <div className="menu">
          <ul>
            <li className={activeMenuItem === "About" ? "active" : ""}>
              <Link onClick={() => handleMenuItemClick("About")}>ABOUT</Link>
            </li>
            <li className={activeMenuItem === "CSR" ? "active" : ""}>
              <Link onClick={() => handleMenuItemClick("CSR")}>
                CORPORATE SOCIAL RESPONSIBILITY
              </Link>
            </li>
            <li className={activeMenuItem === "Investor" ? "active" : ""}>
              <Link onClick={() => handleMenuItemClick("Investor")}>
                INVESTOR
              </Link>
            </li>
            <li className={activeMenuItem === "Newsroom" ? "active" : ""}>
              <Link onClick={() => handleMenuItemClick("Newsroom")}>
                NEWSROOM
              </Link>
            </li>
            <li className={activeMenuItem === "Career" ? "active" : ""}>
              <Link onClick={() => handleMenuItemClick("Career")}>CAREER</Link>
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
