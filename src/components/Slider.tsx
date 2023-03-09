import React from "react";
import "./slider.css";

export default function Slider({
  bulletRight,
  bulletLeft,
}: {
  bulletRight: number;
  bulletLeft: number;
}) {
  //const controlLargeBar = quantity >= 100 ? 100 : quantity;
  const controlRight =
    bulletRight >= 100 ? 94 : bulletRight <= 0 ? 0 : bulletRight;
  const controlLeft = bulletLeft >= 100 ? 94 : bulletLeft <= 0 ? 0 : bulletLeft;

  return (
    <div className="container_slide">
      <div className="bullet_line">
        <div
          className="bullet left_bullet"
          style={{ left: `${controlLeft}%` }}
        ></div>
        <div
          className="bullet right_bullet"
          style={{ left: `${controlRight}%` }}
        ></div>
      </div>
    </div>
  );
}
