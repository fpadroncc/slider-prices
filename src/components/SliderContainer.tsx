import React from "react";
import Slider from "./Slider";
import "./slider_container.css";

export default function SliderContainer() {
  return (
    <div className="container">
      <div className="default_box label_left">2€</div>
      <div className="default_box slide">
        <Slider />
      </div>
      <div className="default_box label_right">10€</div>
    </div>
  );
}
