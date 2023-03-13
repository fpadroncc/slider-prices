import React, { useState, useCallback, useEffect, useRef } from "react";

export type TBullet = "RIGH_BULLET" | "LEFT_BULLET" | null;

const useMouseController = (
  initialRightWidth: number,
  initialLeftWidht: number,
  bulletSelected: TBullet
) => {
  const [dragging, setDragging] = useState(false);
  const [leftBullet, setLeftBullet] = useState<number | null>(initialLeftWidht);
  const [rightBullet, setRightBullet] = useState<number | null>(
    initialRightWidth
  );
  const [currentRightWidth, setCurrentRightWidth] = useState<number | null>(
    initialRightWidth
  );
  const [currentLeftWidth, setCurrentLeftWidth] = useState<number | null>(
    initialLeftWidht
  );

  const selectorInitialWidth =
    bulletSelected === "RIGH_BULLET" ? initialRightWidth : initialLeftWidht;

  const origin = useRef(selectorInitialWidth);

  const handleMouseDown = useCallback((e: globalThis.MouseEvent) => {
    document.body.style.cursor = "grabbing";
    origin.current = e.clientX;
    setDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    document.body.style.cursor = "auto";
    setDragging(false);
    setCurrentRightWidth(rightBullet);
    setCurrentLeftWidth(leftBullet);
  }, [leftBullet, rightBullet]);

  const handleMouseMove = useCallback(
    (e: globalThis.MouseEvent) => {
      if (!dragging) {
        return;
      }

      moveHorizontally(e);
    },
    [currentRightWidth, currentLeftWidth, dragging]
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

  const getResult = (
    event: globalThis.MouseEvent,
    currentWidth: number | null
  ) => {
    if (currentWidth) {
      // 1º Get Cursor Position on Bullet Line and equal to size
      const cursorPosition = event.clientX;

      // 2º SUM the current width with the cursor position
      // and substract the ref origin
      const operation = currentWidth + cursorPosition - origin.current;

      // 3º Control the limits of the line 0-100%
      const checkLimits =
        operation >= 100 ? 100 : operation <= 0 ? 0 : operation;

      return checkLimits;
    }

    return currentWidth;
  };

  const moveHorizontally = (event: globalThis.MouseEvent) => {
    if (bulletSelected === "RIGH_BULLET") {
      console.log("RIGH_BULLET");
      const result = getResult(event, currentRightWidth);
      setRightBullet(result);
    }

    if (bulletSelected === "LEFT_BULLET") {
      console.log("LEFT_BULLET");
      const result = getResult(event, currentLeftWidth);
      setLeftBullet(result);
    }
  };

  return { leftBullet, rightBullet };
};

export default useMouseController;
