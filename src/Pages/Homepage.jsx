import React, { useState } from "react";
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

  const heroClass = dropdownVisible ? "blur" : "";

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
      <Hero className={heroClass} />
      <Mission />
      <Csr />
      <Revenue />
      <Newsroom />
      <Carrer />
      <Diversity
        title="DIVERSITY & INCLUSION"
        heading="Our work is a"
        hedingSpan="story of purpose"
        desc="Our commitment to fostering a culture that values diversity and inclusion (D&I) considers gender and ethnicity diversity as well as diversity of backgrounds, experiences and viewpoints."
        sliderr={true}
      />
      <Media />
      <Footer />
    </>
  );
};

export default Homepage;
