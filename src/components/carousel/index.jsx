import React, { useState, useEffect } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Container } from "@material-ui/core";
export default function HeroCarousel(props) {
  const { products } = props;
  const [value, setValue] = useState(0);
  const [images, setImages] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);
  // useEffect(() => {
  //   const images = products.map((product, i) => (
  //     <img alt={""} src={product.image} />
  //   ));
  //   const thumbnails = products.map((product, i) => (
  //     <img alt={""} src={product.image} />
  //   ));
  //   setImages(images);
  //   setThumbnails(thumbnails);
  //   console.log({ images });
  // }, [products, setImages, setThumbnails]);

  return (
    <Container style={{ marginTop: 100 }}>
      <Carousel
        style={{ borderRadius: 15 }}
        value={value}
        slides={products.map((product) => (
          <img
            alt={product.name}
            src={product.image}
            style={{
              width: "100%", // 2000
              height: 600, // 800
              objectFit: "cover",

              borderRadius: 15,
            }}
          />
        ))}
        onChange={setValue}
      />
      <div
        style={{
          maxWidth: "100vw",
          overflowX: "auto",
          marginTop: 50,
          marginBottom: 70,
        }}
      >
        <Dots
          // number={thumbnails.length}
          thumbnails={products.map((product) => (
            <img
              alt={product.name}
              src={product.image}
              style={{ width: 120, height: 60, objectFit: "cover" }}
            />
          ))}
          value={value}
          onChange={setValue}
        />
      </div>
    </Container>
  );
}
