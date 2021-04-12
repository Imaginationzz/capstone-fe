import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import image1 from "../images/kidsbed.jpg";
import image2 from "../images/p2.jpeg";
import image3 from "../images/p3.jpeg";
import image4 from "../images/p4.png";
import image5 from "../images/p5.jpg";

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const images = [
    { title: "kids Bed", subtitle: "somethn", img: image1 },
    { title: "office Desk", subtitle: "somethn", img: image2 },
    { title: "Sofa", subtitle: "somethn", img: image3 },
    { title: "Chair", subtitle: "somethn", img: image4 },
    { title: "Table", subtitle: "somethn", img: image5 },
  ];
  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[current].img})` }}
      >
        <div
          className="left"
          onClick={() => current > 0 && setCurrent(current - 1)}
        >
          <ArrowBackIosIcon style={{ fontSize: "30" }} />
        </div>
        <div className="center">
          <h1>{images[current].title}</h1>
          {/* <p>{images[current].subtitle}</p> */}
        </div>
        <div
          className="right"
          onClick={() => current < images.length - 1 && setCurrent(current + 1)}
        >
          <ArrowForwardIosIcon style={{ fontSize: "30" }} />
        </div>
      </div>
    </div>
  );
}
