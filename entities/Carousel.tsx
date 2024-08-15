import BackBtn from "@/shared/ui/BackBtn";
import MoonLogo from "@/shared/ui/MoonLogo";
import NextBtn from "@/shared/ui/swiper/SwiperNextBtn";
import React from "react";
import BgHeart from "../public/bgUnion.svg";
import Image from "next/image";
import pregPhoto from "../public/pregn1.png";
import Cross from "../public/cross.svg";
import SwiperPage from "@/widgets/SwiperPage";

export default function Carousel() {
  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="mt-[4rem]">
        <MoonLogo />
      </div>
      <div className="absolute right-0 mr-[41px] mt-[4.25rem]">
        <Cross />
      </div>
      <div className="absolute mr-[3.95rem]">
        <BgHeart />
      </div>
      {/* <Image src={pregPhoto} alt="preg" className="mr-[88px] mt-[4.8575rem]" />
      <div className="mt-[298px] flex w-full items-center justify-between pl-[16px] pr-[16px]">
        <div className="mt-[0.75rem] h-1 w-[4.625rem] bg-white" />
        <NextBtn />
      </div> */}
      <SwiperPage />
    </div>
  );
}