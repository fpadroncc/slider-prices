import React, { MouseEvent, useEffect, useState } from "react";
import "./slider.css";

export default function Slider({
  bulletRight,
  bulletLeft,
}: {
  bulletRight: number;
  bulletLeft: number;
}) {
  const [minValue, setMinValue] = useState<Number>(bulletLeft);
  const [maxValue, setMaxValue] = useState<Number>(bulletRight);
  const [isGrabBullet, setGrabBullet] = useState<boolean>(false);
  const [bulletSelected, setBulletSelected] = useState<string | null>(null);

  useEffect(() => {
    if (isGrabBullet && bulletSelected !== null) {
      const bulletId = document.getElementById(bulletSelected);
      //bulletId?.addEventListener("mousemove", moveObject);
    }
    // if (grabBullet !== null) {
    //   window.addEventListener("mousemove");
    //   window.addEventListener("mouseup")
    // }
    // else{
    // window.removeEventListener("mousemove");
    // window.removeEventListener("mouseup");
    // }
  });

  const moveObject = ({ event }: { event: MouseEvent }) => {
    const container = document.getElementById("containerSlide");

    const moveHorizontally = () => {
      if (container) {
        //1º Get the bullet line size: container?.clientWidth
        const getLineLong = container.clientWidth;

        //2º Get Cursor Position on Bullet Line and equal to size
        const cursorPosition = event.nativeEvent.offsetX;

        //3º Math equal widht with position of cursor
        // Bullet line size is equal to 100%
        // Cursor 0 is equal to 0% and cursor on end of the line x is 100%
        const getPorcent = Math.round((cursorPosition / getLineLong) * 100);

        //4º Rest 5% for center the point on the cursor click and setted
        if (bulletSelected === "rightBullet") {
          setMaxValue(getPorcent - 5);
        }

        if (bulletSelected === "leftBullet") {
          setMinValue(getPorcent - 5);
        }

        const customTable = {
          sizeLine: getLineLong,
          cursor: cursorPosition,
          getPorcent: getPorcent,
        };

        console.table(customTable);

        return getPorcent;
      }
    };

    moveHorizontally();
  };

  return (
    <div
      id="containerSlide"
      className="container_slide"
      onClick={(e) => moveObject({ event: e })}
    >
      <div id="bulletLine" className="bullet_line">
        <div
          id="leftBullet"
          className="bullet left_bullet"
          style={{ left: `${minValue}%` }}
          onMouseDown={() => {
            setGrabBullet(true);
            setBulletSelected("leftBullet");
          }}
        ></div>
        <div
          id="rightBullet"
          className="bullet right_bullet"
          style={{ left: `${maxValue}%` }}
          onMouseDown={() => {
            setGrabBullet(true);
            setBulletSelected("rightBullet");
          }}
        ></div>
      </div>
    </div>
  );
}
