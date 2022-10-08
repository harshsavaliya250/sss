import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Slider = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    margin:0,
  };
  return (
    <>
      <OwlCarousel className="owl-theme slider" {...options}>
        <div className="item">
          <img src={require("./Images/asset 1.jpg")} />
        </div>
        <div className="item">
          <img src={require("./Images/asset 2.jpeg")} />
        </div>
        <div className="item">
          <img src={require("./Images/asset 3.jpeg")} />
        </div>
        <div className="item">
          <img src={require("./Images/asset 4.jpeg")} />
        </div>
        <div className="item">
          <img src={require("./Images/asset 5.jpg")} />
        </div>
        <div className="item">
          <img src={require("./Images/asset 6.jpg")} />
        </div>
        <div className="item">
          <img src={require("./Images/asset 7.jpg")} />
        </div>
      </OwlCarousel>
    </>
  );
};

export default Slider;
