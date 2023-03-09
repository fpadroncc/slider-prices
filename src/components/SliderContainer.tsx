import React from "react";
import Slider from "./Slider";
import SliderInput from "./SliderInput";
import "./slider-container.css";

export default function SliderContainer() {
  const testValueLeft = 20;
  const testValueRight = 80;

  return (
    <div className="container">
      <div className="default_box label_left">
        <SliderInput value={testValueLeft} />
      </div>
      <div className="default_box slide">
        <Slider bulletLeft={testValueLeft} bulletRight={testValueRight} />
      </div>
      <div className="default_box label_right">
        <SliderInput value={testValueRight} />
      </div>
    </div>
  );
}
