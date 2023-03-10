import React, { useState, useCallback, useEffect, useRef } from "react";

const useMouseController = (initialWidth: number) => {
  const [result, setResult] = useState(initialWidth);

  const dragging = useRef(false);
  const previousClientX = useRef(0);

  const handleMouseMove = useCallback((e: globalThis.MouseEvent) => {
    if (!dragging.current) {
      return;
    }

    setResult((prevValue) => {
      const change = e.clientX - previousClientX.current;
      previousClientX.current = e.clientX;
      return prevValue + change;
    });
  }, []);

  const handleMouseDown = useCallback((e: globalThis.MouseEvent) => {
    console.log("handleMouseDown");
    document.body.style.cursor = "grabbing";
    previousClientX.current = e.clientX;
    dragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    console.log("handleMouseUp");
    document.body.style.cursor = "auto";

    dragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseDown, handleMouseUp, handleMouseMove]);

  return result;
};

export default useMouseController;
