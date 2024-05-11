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
    { title: "Our Company", content: "Content 1", link: "/about" },
    { title: "Our Stories", content: "Content 2", link: "/about" },
    { title: "Information Security", content: "Content 3", link: "/about" },
    { title: "Supplier Resources", content: "Content 4", link: "/about" },
  ];

  const CsrMenuData = [
    {
      title: "Corporate Governance",
      content: "CSR Content 1",
      link: "/csr",
    },
    {
      title: "Ethics & Compliance",
      content: "CSR Content 2",
      link: "/csr",
    },
  ];

  const InvestorMenuData = [
    {
      title: "Investor Menu 1",
      content: "Investor Content 1",
      link: "/investor",
    },
    {
      title: "Investor Menu 2",
      content: "Investor Content 2",
      link: "/investor",
    },
  ];

  const NewsroomMenuData = [
    {
      title: "Newsroom Menu 1",
      content: "Newsroom Content 1",
      link: "/newsroom",
    },
    {
      title: "Newsroom Menu 2",
      content: "Newsroom Content 2",
      link: "/newsroom",
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
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
      <MainAbout />
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
