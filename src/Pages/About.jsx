import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import MissionAbout from "../Component/MissionAbout";
import Diversity from "../Component/Diversity";
import Leadership from "../Component/Leadership";
import Brands from "../Component/Brands";
import Dropdown from "../Component/Dropdown";
import MainAbout from "../Component/MainAbout";

const About = () => {
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
      content: [{ name: "Corporate Page 1", link: "/csr" }],
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
      <Navbar toggleDropdown={toggleDropdown} />
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
      <MainAbout className={heroClass} />
      <MissionAbout />
      <Diversity
        title="Our Stories"
        heading="My work is a story of"
        hedingSpan="problem 
        solving."
        desc="Born almost three months premature, I grew up passionate about healthcare and cutting-edge technologies to create better health outcomes. My attraction to Thermo Fisher Scientific was simple: the chance to make a positive impact through problem solving."
        sliderr={false}
      />
      <Leadership />
      <Brands />
      <Footer />
    </>
  );
};

export default About;
