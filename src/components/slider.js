import React from "react";
import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../assets/img1.jpg";
import Image2 from "../assets/img2.jpg";
import Image3 from "../assets/img3.jpg";

const slider = () => {
  return (
    <div>
      <Carousel className="slider" autoPlay={true} showThumbs={false}>
        <div>
          <img src={Image1} alt="Slider" />
        </div>
        <div>
          <img src={Image2} alt="Slider" />
        </div>
        <div>
          <img src={Image3} alt="Slider" />
        </div>
      </Carousel>
    </div>
  );
};

export default slider;
