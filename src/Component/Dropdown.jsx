import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";
import left from "../Assets/Images/ss.svg";
import right from "../Assets/Images/Vector (4).svg";
import top from "../Assets/Images/dropd.svg";
import down from "../Assets/Images/dropa.svg";
import icon from "../Assets/Images/Icon1.png";
import activeIcon from "../Assets/Images/minus.svg";

const Dropdown = ({ menus }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-left">
        <div className="dropdown-left-img">
          <img src={left} alt="" />
        </div>
        <div className="dropdown-left-top">
          <img src={down} alt="" />
          <p className="dropdown-top-text">Our Mission</p>
        </div>
        <p className="dropdown-left-mid">
          Everything we do starts with our Mission: to <br /> enable our
          customers to make the world <br />
          <span>healthier, cleaner, and safer.</span>
        </p>
        <div className="dropdown-left-bottom">
          <img src={top} alt="" />
          <p className="bottom-text">Read More</p>
        </div>
      </div>
      <div className="dropdown-mid">
        {menus.map((menu, index) => (
          <div className="main-dropdown" key={index}>
            <div
              className={`dropdown-header ${
                activeMenu === menu.title ? "active" : ""
              }`}
              onClick={() => toggleMenu(menu.title)}
            >
              <img src={activeMenu === menu.title ? activeIcon : icon} alt="" />
              <p className="heder-drop">{menu.title}</p>
            </div>
            {activeMenu === menu.title && (
              <div className="submenu animated">
                <Link to={menu.link}>
                  <p>{menu.content}</p>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="dropdown-right">
        <img src={right} alt="" />
      </div>
    </div>
  );
};

export default Dropdown;
