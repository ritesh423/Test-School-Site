import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const slider = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://wallpaperaccess.com/full/1247206.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://wallpaperaccess.com/full/1247143.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://www.teahub.io/photos/full/13-133927_top-50-awesome-3d-wallpapers-hd-background-spot.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default slider;
