import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Dropdown from "../Component/Dropdown";
import Diversity from "../Component/Diversity";
import Framework from "../Component/Framework";
import Highlights from "../Component/Highlights";
import Footer from "../Component/Footer";
import CsrMain from "../Component/CsrMain";
import CsrReport from "../Component/CsrReport";
import Enviroment from "../Component/Enviroment";
import Eithics from "../Component/Eithics";
import Governence from "../Component/Governence";

const Csr = () => {
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
      <CsrMain />
      <CsrReport />
      <Highlights />
      <Framework />
      <Diversity
        title="DIVERSITY & INCLUSION"
        heading="Our work is a"
        hedingSpan="story of purpose"
        desc="Our commitment to fostering a culture that values diversity and inclusion (D&I) considers gender and ethnicity diversity as well as diversity of backgrounds, experiences and viewpoints."
        sliderr={true}
        background="#fff"
      />
      <Governence />
      <Eithics />
      <Enviroment />
      <Footer />
    </>
  );
};

export default Csr;
