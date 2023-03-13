import React, { useState, useCallback, useEffect, useRef } from "react";

export type TBullet = "RIGH_BULLET" | "LEFT_BULLET" | null;

const useMouseController = (
  initialWidth: number,
  longContainer: string,
  bulletSelected: TBullet
) => {
  const [dragging, setDragging] = useState(false);
  const [result, setResult] = useState(initialWidth);
  const [currentWidth, setCurrentWidth] = useState(initialWidth);

  const origin = useRef(initialWidth);

  const handleMouseDown = useCallback((e: globalThis.MouseEvent) => {
    console.log("handleMouseDown");
    document.body.style.cursor = "grabbing";
    origin.current = e.clientX;
    //dragging.current = true;
    setDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    console.log("handleMouseUp");
    document.body.style.cursor = "auto";
    setDragging(false);
    setCurrentWidth(result);
    //dragging.current = false;
  }, [result]);

  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      if (!dragging) {
        return;
      }

      moveHorizontally(e);
    },
    [currentWidth, dragging]
  );

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dragging, handleMouseDown, handleMouseUp, handleMouseMove]);

  const moveHorizontally = (event: globalThis.MouseEvent) => {
    const container = document.getElementById(`${longContainer}`);
    if (container) {
      //1º Get the bullet line size: container?.clientWidth
      const getLineLong = container.clientWidth;

      //2º Get Cursor Position on Bullet Line and equal to size
      //const cursorPosition = event.offsetX;
      const cursorPosition = event.clientX;

      //3º Math equal widht with position of cursor
      // Bullet line size is equal to 100%
      // Cursor 0 is equal to 0% and cursor on end of the line x is 100%
      const getPorcent = Math.round((cursorPosition / getLineLong) * 100);

      //4º Rest 5% for center the point on the cursor click and setted
      if (bulletSelected === "RIGH_BULLET") {
        //setMaxValue(getPorcent - 5);
      }

      if (bulletSelected === "LEFT_BULLET") {
      }

      // console.log("currentWidth", currentWidth);
      // console.log("clientX", event.clientX);
      // console.log("origin", origin.current);
      // console.log("sum", currentWidth + event.clientX);

      const operation = currentWidth + event.clientX - origin.current;
      const checkLimits =
        operation >= 100 ? 95 : operation <= 0 ? 0 : operation;

      setResult(() => checkLimits);
    }
  };

  return result;
};

export default useMouseController;
