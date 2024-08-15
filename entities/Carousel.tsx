import BackBtn from "@/shared/ui/BackBtn";
import MoonLogo from "@/shared/ui/MoonLogo";
import NextBtn from "@/shared/ui/NextBtn";
import React from "react";
import BgHeart from "../public/bgUnion.svg";

export default function Carousel() {
  return (
    <div className="relative flex w-full flex-col items-center">
      <MoonLogo />
      <div className="absolute mr-[3.95rem]">
        <BgHeart />
      </div>
      <div className="flex w-full items-center justify-between pl-[16px] pr-[16px]">
        <NextBtn />
      </div>
      <div className="ml-[11.375rem] mt-[0.75rem] h-1 w-[4.625rem] bg-white"></div>
    </div>
  );
}
