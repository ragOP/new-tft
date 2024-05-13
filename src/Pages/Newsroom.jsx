import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Dropdown from "../Component/Dropdown";
import NewsroomAbout from "../Component/NewsroomAbout";

const Newsroom = () => {
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
      <NewsroomAbout />
    </>
  );
};

export default Newsroom;
