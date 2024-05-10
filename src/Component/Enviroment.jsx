import React from "react";
import "./enviroment.css";
import one from "../Assets/Images/enviroment.png";
import two from "../Assets/Images/Climate.png";
import three from "../Assets/Images/Sustainability.png";
import four from "../Assets/Images/Nature.png";
import arrow from "../Assets/Images/Vector (1).png";

const Enviroment = () => {
  return (
    <>
      <div className="enviroment">
        <p className="enviroment-title">ENVIRONMENT</p>
        <div className="enviroment-main">
          <div className="enviroment-left">
            <img src={one} alt="" />
          </div>
          <div className="enviroment-right">
            <p className="top-enviorment">
              Our commitment to the environment is{" "}
              <span>deeply rooted in our Mission.</span>
            </p>
            <p className="mid-enviroment">
              By championing a healthy planet that sustains human health and
              natural resources, we can build a brighter future for generations
              to come.
            </p>
            <p className="bottom-enviroment">
              Through our culture of continuous improvement, we manage risks,
              minimize adverse impacts and unlock opportunities through
              collaborations that help our customers achieve their environmental
              sustainability goals.
            </p>
            <p className="read-enviorment">READ MORE</p>
          </div>
        </div>
      </div>
      <div className="enviorment-down">
        <div className="enviroment-out-top">
          We recognize the urgency of addressing our changing climate and
          understand the power of innovation to create a better world. We
          innovate to provide our customers with the solutions to develop
          greener technologies, ensure safe air and water quality, and advance
          climate research.
        </div>
        <div className="enviroment-images">
          <div className="single-enviroment-image">
            <img src={two} alt="" />
            <div className="overlay-enviroment">
              <p className="overlay-enviroment-title">Climate</p>
              <p className="overlay-enviroment-desc">
                We at Thermo Fisher supports the urgent calls for action from
                scientists around the world to address climate change.
              </p>
              <div className="overlay-arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div className="single-enviroment-image">
            <img src={three} alt="" />
            <div className="overlay-enviroment">
              <p className="overlay-enviroment-title">Nature</p>
              <p className="overlay-enviroment-desc">
                Thermo Fisher is committed to protecting the world’s natural
                resources by preserving fresh water resources and managing
                waste.
              </p>
              <div className="overlay-arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div className="single-enviroment-image">
            <img src={four} alt="" />
            <div className="overlay-enviroment">
              <p className="overlay-enviroment-title">Sustainability</p>
              <p className="overlay-enviroment-desc">
                We leverage the power of innovation to positively contribute to
                a healthier world, which includes reducing the environmental
                impact of our products and packaging from design to end of life.
              </p>
              <div className="overlay-arrow">
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enviroment;
