import React, { useState } from "react";
import useMouseController, { TBullet } from "../hooks/useMouseController";
import "./slider.css";

export default function Slider({
  bulletRight,
  bulletLeft,
}: {
  bulletRight: number;
  bulletLeft: number;
}) {
  const [bulletSelected, setBulletSelected] = useState<TBullet>(null);
  const controlValue = useMouseController(
    100,
    "containerSlide",
    bulletSelected
  );

  return (
    <div id="containerSlide" className="container_slide">
      <div id="bulletLine" className="bullet_line">
        <div
          id="leftBullet"
          className="bullet left_bullet"
          style={{ left: `${controlValue}%` }}
          onMouseDown={(e) => {
            setBulletSelected("LEFT_BULLET");
          }}
        ></div>
        {/* <div
          id="rightBullet"
          className="bullet right_bullet"
          style={{ left: `${controlValue}%` }}
          onMouseDown={() => {
            setBulletSelected("RIGH_BULLET");
          }}
        ></div> */}
      </div>
    </div>
  );
}
