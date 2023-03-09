import React, { useEffect, useRef, useState } from "react";
import "./slider.css";

export default function Slider({ min, max }: { min: number; max: number }) {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);

  useEffect(() => {});

  const controlLeft = minValue >= 100 ? 94 : minValue <= 0 ? 0 : minValue;
  const controlRight = maxValue >= 100 ? 94 : maxValue <= 0 ? 0 : maxValue;

  //TODO: We can use input for control the range
  const otherIdea = () => {
    return (
      <div className="slider">
        <div className="slider__track" />
        <div className="slider__range" />
        <input
          className="thumb thumb--zindex-3"
          type="range"
          min={min}
          max={max}
          value={minValue}
          ref={minValRef}
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxValue - 1);
            setMinValue(value);
            event.target.value = value.toString();
          }}
        />
        <input
          className="thumb thumb--zindex-4"
          type="range"
          min={min}
          max={max}
          value={maxValue}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minValue + 1);
            setMaxValue(value);
            event.target.value = value.toString();
          }}
        />
      </div>
    );
  };

  //TODO: Try to create a range without using input range
  const drawAll = () => {
    return (
      <div className="container_slide">
        <div className="bullet_line">
          <div
            id="leftBullet"
            className="bullet left_bullet"
            style={{ left: `${controlLeft}%` }}
            onMouseDown={() => console.log("left")}
          ></div>
          <div
            id="rightBullet"
            className="bullet right_bullet"
            style={{ left: `${controlRight}%` }}
            onMouseDown={() => console.log("right")}
          ></div>
        </div>
      </div>
    );
  };

  return otherIdea();
}
