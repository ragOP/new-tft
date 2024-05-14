import React, { useState, useEffect } from "react";
import "./diversity.css";
import main from "../Assets/Images/diversity.svg";
import first from "../Assets/Images/Rectangle 19922.svg";
import second from "../Assets/Images/Rectangle 19923.svg";
import third from "../Assets/Images/Rectangle 19924.svg";
import dot from "../Assets/Images/redsmall.svg";
import right from "../Assets/Images/Group 107.png";
import left from "../Assets/Images/Group 1071.png";
import main1 from "../Assets/Images/Frame 395.png";
import girl from "../Assets/Images/girl.svg";
import pic from "../Assets/Images/stock.png";

const Diversity = ({ background }) => {
  const stories = [
    {
      title: "Our work is a ",
      hedingSpan: "story of purpose",
      description:
        "Our commitment to fostering a culture that values diversity and inclusion (D&I) considers gender and ethnicity diversity as well as diversity of backgrounds, experiences and viewpoints.",
    },
    {
      title: "Our work is a ",
      hedingSpan: "story of purpose",
      description:
        "Growing up premature sparked a passion for healthcare within me, driving me to seek ways to improve health outcomes using cutting-edge technologies.",
    },
    {
      title: "Our work is a ",
      hedingSpan: "story of purpose",
      description:
        "We want all colleagues to achieve their full potential and career aspirations. We are committed to the development of our diverse, global workforce, enhancing their skills.",
    },
    {
      title: "My work is a story of ",
      hedingSpan: "problem solving",
      description:
        "At Thermo Fisher, I lead a team that uses digital cloud computing to deliver tracking and bioinformatics systems to our customers, which enables us to offer high-value, end-to-end solutions.",
    },
  ];

  const [images, setImages] = useState([]);
  const [key, setKey] = useState(0);
  const [storyIndex, setStoryIndex] = useState(0);
  const [mainImage, setMainImage] = useState([main, main1, left, right]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevImages) => {
        const newImages = [...prevImages];
        const lastImage = newImages.pop();
        newImages.unshift(lastImage);
        return newImages;
      });
      setKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      let dynamic;
      const randomNumber = Math.random();

      if (randomNumber < 0.25) {
        dynamic = main;
      } else if (randomNumber < 0.5) {
        dynamic = main1;
      } else if (randomNumber < 0.75) {
        dynamic = girl;
      } else {
        dynamic = pic;
      }

      setImages([dynamic, third, second, first]);
    }, 5000);

    return () => clearInterval(interval);
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh);
    console.log(refresh);
  };

  useEffect(() => {
    const storyInterval = setInterval(() => {
      setStoryIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 5000);

    return () => clearInterval(storyInterval);
  }, []);

  return (
    <div className="containermain" style={{ background: background }}>
      <p className="title">Diversity & inclusion</p>
      <div className="diversity-main">
        <div className="diversity-img">
          {images.map((image, index) => (
            <img
              className={index === 0 ? "slide-right-to-left" : ""}
              key={key + index}
              src={image}
              alt=""
            />
          ))}
        </div>
        <div className="diversity-text">
          <p className="diversity-title">
            {stories[storyIndex].title}{" "}
            <span>{stories[storyIndex].hedingSpan}</span>
          </p>
          <p className="diversity-desc">{stories[storyIndex].description}</p>
          <div className="button-mission" style={{ width: "294px" }}>
            <img src={dot} alt="" />
            <p className="button-text" style={{ cursor: "pointer" }}>
              Read full story
            </p>
          </div>
          <div className="slider-range">
            <img onClick={handleRefresh} src={left} alt="" />
            <p>
              <span>{storyIndex + 1} </span>of 4
            </p>
            <img onClick={handleRefresh} src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diversity;
