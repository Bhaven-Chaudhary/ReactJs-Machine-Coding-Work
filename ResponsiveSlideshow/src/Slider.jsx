import React, { useState } from "react";
import Slide from "./Slide";

export default function Slider({ images }) {
  const [activeImgIndex, setActiveImageIndex] = useState(0);

  function onPrevClick() {
    if (activeImgIndex > 0) setActiveImageIndex((prevIndex) => prevIndex - 1);
  }

  function onNextClick() {
    if (activeImgIndex < images.length - 1)
      setActiveImageIndex((prevIndex) => prevIndex + 1);
  }

  return (
    <div className="slider d-flex">
      <div className="slideContainer">
        <span onClick={onPrevClick} className="navigationButton left">
          &#60;
        </span>
        {images.map((item, index) => {
          return (
            <Slide
              imageUrl={item.image_url}
              caption={item.caption}
              isActive={activeImgIndex === index}
              key={item.caption}
            ></Slide>
          );
        })}
        <span onClick={onNextClick} className="navigationButton right">
          &#62;
        </span>
      </div>
      <div className="d-flex ">
        {images.map((item, index) => {
          return (
            <div
              className={`dots ${activeImgIndex == index ? "active" : ""}`}
              key={item.caption}
              onClick={() => setActiveImageIndex(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
