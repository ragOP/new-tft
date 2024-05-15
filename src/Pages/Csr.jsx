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
  const [dropdownVisible, setDropdownVisible] = useState(true);
  const [currentMenu, setCurrentMenu] = useState('CSR');

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
        { name: "Our Mission", link: "/internal" },
        { name: "Our Values", link: "/internal" },
        { name: "innovation", link: "/internal" },
      ],
    },
    { title: "Our Stories" },
    { title: "Information Security" },
    { title: "Supplier Resources" },
  ];

  const CsrMenuData = [
    {
      title: "Corporate Governance",
      content: [{ name: "Corporate Page 1", link: "/internal" }],
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
