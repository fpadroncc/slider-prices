import React from "react";
import Slider from "./Slider";
import SliderInput from "./SliderInput";
import "./slider-container.css";

export default function SliderContainer() {
  return (
    <div className="container">
      <div className="default_box label_left">
        <SliderInput value={2} />
      </div>
      <div className="default_box slide">
        <Slider />
      </div>
      <div className="default_box label_right">
        <SliderInput value={10} />
      </div>
    </div>
  );
}
