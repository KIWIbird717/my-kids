import React from "react";
import SpinnerSmallCircle from "@/public/spinnersmallcircle.svg";
import SpinnerBigCircle from "@/public/spinnerbigcircle.svg";
import SpinnerSvg from "@/public/spinnersvg.svg";

export default function SpinnerBg() {
  return (
    <div className="relative mt-[280px] flex items-center justify-center">
      <div className="absolute z-[3] backdrop-blur-[2px]">
        <SpinnerSmallCircle />
      </div>
      <div className="absolute backdrop-blur-[2px]">
        <SpinnerBigCircle />
      </div>
      <div className="absolute z-[4]">
        <SpinnerSvg />
      </div>
    </div>
  );
}
