import React, { useState, KeyboardEvent } from "react";
import useMouseController, { TBullet } from "../hooks/useMouseController";
import "./slider.css";
import "./slider-container.css";

export default function Slider() {
  const [bulletSelected, setBulletSelected] = useState<TBullet>(null);
  const [enableInput, setEnableInput] = useState<boolean>(false);
  const [leftValue, setLeftValue] = useState<number>(20);
  const [rightValue, setRightValue] = useState<number>(80);

  const valueChange = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      setEnableInput(false);
    }
  };
  const controlValue = useMouseController(
    rightValue,
    leftValue,
    bulletSelected
  );

  const RangeSlider = () => {
    return (
      <div id="containerSlide" className="container_slide">
        <div id="bulletLine" className="bullet_line">
          <div
            id="leftBullet"
            className="bullet left_bullet"
            style={{
              left: `${controlValue.leftBullet}%`,
            }}
            onMouseDown={(e) => {
              setBulletSelected("LEFT_BULLET");
            }}
          ></div>
          <div
            id="rightBullet"
            className="bullet right_bullet"
            style={{
              left: `${controlValue.rightBullet}%`,
            }}
            onMouseDown={() => {
              setBulletSelected("RIGH_BULLET");
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="default_box label_left">
        <div onDoubleClick={() => setEnableInput(true)}>
          {enableInput ? (
            <input
              value={leftValue}
              onChange={(e) => setLeftValue(Number(e.target.value))}
              onKeyDown={valueChange}
            />
          ) : (
            <label>{leftValue}€</label>
          )}
        </div>
      </div>
      <div className="default_box slide">
        <RangeSlider />
      </div>
      <div className="default_box label_right">
        <div onDoubleClick={() => setEnableInput(true)}>
          {enableInput ? (
            <input
              value={rightValue}
              onChange={(e) => setRightValue(Number(e.target.value))}
              onKeyDown={valueChange}
            />
          ) : (
            <label>{rightValue}€</label>
          )}
        </div>
      </div>
    </div>
  );
}
