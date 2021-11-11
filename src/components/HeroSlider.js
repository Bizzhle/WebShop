import React, { useState } from "react";
import heroSliderData from "../assets/fake-data/hero-slider";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const length = heroSliderData.length;
  console.log(length);
  console.log(current);

  const buttonClick = () => {
    setCurrent(current > 0 ? length - 1 : current + 1);
    console.log("clicked");
  };

  if (!Array.isArray(heroSliderData) || heroSliderData.length <= 0) {
    return null;
  }

  return (
    <div className="slideshow">
      {heroSliderData.map((item, index) => (
        <div
          className={
            index === current ? " slideshow_slides slideshow_fade" : "slide"
          }
          key={index}
        >
          {index === current && <img src={item.image} alt={item.title} />}
        </div>
      ))}
      <div className="slideshow_button">
        <button>Learn More</button>
      </div>

      <div className="slideshow_dots">
        <span className="dot" onClick={() => buttonClick(0)}></span>
        <span className="dot" onClick={() => buttonClick(1)}></span>
        <span className="dot" onClick={() => buttonClick(2)}></span>
        <span className="dot" onClick={() => buttonClick(3)}></span>
      </div>
    </div>
  );
}
