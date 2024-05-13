import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Media from "../Component/Media";
import Diversity from "../Component/Diversity";
import Carrer from "../Component/Carrer";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Mission from "../Component/Mission";
import Revenue from "../Component/Revenue";
import Newsroom from "../Component/Newsroom";
import Csr from "../Component/Csr";
import Dropdown from "../Component/Dropdown";

const Homepage = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);

  const toggleDropdown = (menu) => {
    if (menu === currentMenu) {
      setDropdownVisible(false);
      setCurrentMenu(null);
    } else {
      setCurrentMenu(menu);
      setDropdownVisible(true);
    }
  };

  const MenuData = [
    {
      title: "Our Company",
      content: [
        { name: "Our Mission", link: "/about" },
        { name: "Our Values", link: "/about" },
        { name: "innovation", link: "/about" },
      ],
    },
    { title: "Our Stories" },
    { title: "Information Security" },
    { title: "Supplier Resources" },
  ];

  const CsrMenuData = [
    {
      title: "Corporate Governance",
    },
    {
      title: "Ethics & Compliance",
    },
    {
      title: "Reporting",
    },
    {
      title:
        "Operations" +
        "\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020",
    },
    {
      title:
        "Colleagues" +
        "\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020",
    },
    {
      title: "Communities",
    },
    {
      title: "Enviroment",
    },
  ];

  const InvestorMenuData = [
    {
      title: "Financials",
    },
    {
      title: "Stock Information",
    },
    {
      title: "Governance",
    },
    {
      title: "Resources",
    },
    {
      title: "Events & Presentations",
    },
  ];

  const NewsroomMenuData = [
    {
      title: "Press Releases",
    },
    {
      title: "In the News",
    },
    {
      title: "Podcast : Science with a twist",
    },
  ];

  const heroClass = dropdownVisible ? "blur" : "";
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Navbar openDropDown={dropdownVisible} toggleDropdown={toggleDropdown} />
      {dropdownVisible && (
        <Dropdown
          menus={
            currentMenu === "CSR"
              ? CsrMenuData
              : currentMenu === "Investor"
              ? InvestorMenuData
              : currentMenu === "Newsroom"
              ? NewsroomMenuData
              : MenuData
          }
        />
      )}
      <Hero className={heroClass} />
      <Mission />
      <Csr />
      <Revenue />
      <Newsroom />
      <Carrer />
      <Diversity />
      <Media />
      <Footer />
    </>
  );
};

export default Homepage;
