import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const data = [
    "https://images.pexels.com/photos/16476496/pexels-photo-16476496/free-photo-of-white-audi-rs6.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8197399/pexels-photo-8197399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    'https://images.pexels.com/photos/5604220/pexels-photo-5604220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"https://images.pexels.com/photos/5868131/pexels-photo-5868131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="sliderWrapper">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img className="sliderImg" src={data[0]} alt="" />
        <img className="sliderImg" src={data[1]} alt="" />
        <img className="sliderImg" src={data[2]} alt="" />
      </div>
      <div className="sliderContent">
        <span className="title">FIND THE RIGHT CAR</span>
        <br></br>
        <button className="titleButton">
          <Link to="/carList">Check List</Link>
        </button>
      </div>

      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          {/* <WestOutlinedIcon /> */}
          ⬅️
        </div>
        <div className="icon" onClick={nextSlide}>
          {/* <EastOutlinedIcon /> */}➡️
        </div>
      </div>
    </div>
  );
};

export default Slider;
