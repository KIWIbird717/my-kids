import React from "react";
import GirlSvg from "@/public/Girl - EXPORT.png";
import Image from "next/image";
import { FinalPageModal } from "@/widgets/FinalPageModal";

export default function PageGirl() {
  return (
    <div className="max-w-screen relative flex shrink-0 flex-col items-center justify-center">
      <Image src={GirlSvg} alt="girlicon" className="max-w-none" />
      <p className="mt-[50px] flex flex-col gap-4">
        <span className="h-[52px] text-start text-[24px] font-bold leading-[32px] text-white">
          Я... Мальчик!
        </span>
        <span className="h-[56px] w-[311px] text-start text-[14px] font-normal leading-[26px] text-textSemiWhite">
          Для достижения цели в процессе подготовки к зачатию должны участвовать и папа и мама!
        </span>
      </p>
      <FinalPageModal />
    </div>
  );
}
