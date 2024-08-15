import React from "react";
import MoonLogoImg from "../../public/MoonLogo.png";
import Image from "next/image";
import MyKid from "../../public/MyKidSmallLogo.svg";

export default function MoonLogo() {
  return (
    <div className="flex flex-row items-center gap-[9px]">
      <Image src={MoonLogoImg} alt="moonlogo" />
      <MyKid />
    </div>
  );
}
