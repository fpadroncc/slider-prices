import React, { useRef, useState } from "react";
import Slider from "./Slider";
import SliderInput from "./SliderInput";
import "./slider-container.css";

export default function SliderContainer() {
  const min = 0;
  const max = 100;

  return (
    <div className="container">
      <div className="default_box label_left">
        <SliderInput value={min} />
      </div>
      <div className="default_box slide">
        <Slider min={min} max={max} />
      </div>
      <div className="default_box label_right">
        <SliderInput value={max} />
      </div>
    </div>
  );
}
