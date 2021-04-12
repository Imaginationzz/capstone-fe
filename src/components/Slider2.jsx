import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/kidsbed.jpg";
import image2 from "../images/p2.jpeg";
import image3 from "../images/p3.jpeg";
import image4 from "../images/p4.png";
import image5 from "../images/p5.jpg";
import image6 from "../images/p6.jpg";
import image7 from "../images/p7.jpg";

export default function Slider2() {
  return (
    <div>
      <Carousel
        className="carousel2"
        autoPlay
        showArrows
        interval="2000"
        infiniteLoop
        centerMode
        centerSlidePercentage="50"
      >
        <div>
          <img src={image1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={image2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={image4} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={image7} />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src={image1} />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src={image2} />
          <p className="legend">Legend 6</p>
        </div>
        <div>
          <img src={image4} />
          <p className="legend">Legend 7</p>
        </div>
        <div>
          <img src={image5} />
          <p className="legend">Legend 8</p>
        </div>
        <div>
          <img src={image6} />
          <p className="legend">Legend 9</p>
        </div>
        <div>
          <img src={image7} />
          <p className="legend">Legend 10</p>
        </div>
        <div>
          <img src={image3} />
          <p className="legend">Legend 11</p>
        </div>
      </Carousel>
    </div>
  );
}
