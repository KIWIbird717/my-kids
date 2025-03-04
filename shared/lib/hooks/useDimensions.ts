"use client";

import { useState, useEffect } from "react";

const getWindowDimensions = () => {
  if (typeof window === "undefined") return { width: 0, height: 0 };
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

/**
 * Получение размеров экрана
 */
export const useDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
