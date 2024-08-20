import React from "react";
import BoyIcon from "@/public/Boy - EXPORT (3).png";
import Image from "next/image";
import { FinalPageModal } from "@/widgets/FinalPageModal";
import BackArrow from "@/public/BackArrow.svg";

export default function PageBoy() {
  return (
    <div className="max-w-screen relative flex shrink-0 flex-col items-center justify-center">
      <Image src={BoyIcon} alt="boyicon" className="max-w-none" />
      <p className="mt-[50px] flex flex-col gap-4">
        <span className="h-[52px] text-start text-[24px] font-bold leading-[32px] text-white">
          Я... Мальчик!
        </span>
        <span className="h-[56px] w-[311px] text-start text-[14px] font-normal leading-[26px] text-textSemiWhite">
          Для достижения цели в процессе подготовки к зачатию должны участвовать и папа и мама!
        </span>
      </p>
      {/* <div className="absolute z-[2] ml-[20px] mt-[110px] flex flex-col items-start">
        <button className="ml-[10px] h-[56px] w-[50px] bg-transparent">
          <BackArrow />
        </button>
        <h3 className="mt-[30px] h-[29px] w-[319px] text-[16px] font-bold leading-[26px] text-white">
          Благоприятные дни зачатия
        </h3>
        <div className="relative mt-[16px] flex max-w-[350px] flex-row overflow-hidden">
          <div className="relative flex w-full snap-x flex-row gap-[8px] overflow-auto">
            <div className="flex h-[90px] w-[72.85px] shrink-0 snap-start flex-col items-center justify-center gap-[17px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#2D2563] text-white">
              <span className="text-[12px] font-normal leading-[14.06px]">Май</span>
              <span className="text-[24px] font-bold leading-[28.13px]">1</span>
            </div>
            <div className="flex h-[90px] w-[72.85px] shrink-0 snap-start flex-col items-center justify-center gap-[17px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#2D2563] text-white">
              <span className="text-[12px] font-normal leading-[14.06px]">Май</span>
              <span className="text-[24px] font-bold leading-[28.13px]">4</span>
            </div>
            <div className="flex h-[90px] w-[72.85px] shrink-0 snap-start flex-col items-center justify-center gap-[17px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#2D2563] text-white">
              <span className="text-[12px] font-normal leading-[14.06px]">Май</span>
              <span className="text-[24px] font-bold leading-[28.13px]">6</span>
            </div>
            <div className="flex h-[90px] w-[72.85px] shrink-0 snap-start flex-col items-center justify-center gap-[17px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#2D2563] text-white">
              <span className="text-[12px] font-normal leading-[14.06px]">Май</span>
              <span className="text-[24px] font-bold leading-[28.13px]">9</span>
            </div>
            <div className="flex h-[90px] w-[72.85px] shrink-0 snap-start flex-col items-center justify-center gap-[17px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#2D2563] text-white">
              <span className="text-[12px] font-normal leading-[14.06px]">Май</span>
              <span className="text-[24px] font-bold leading-[28.13px]">14</span>
            </div>
            <div className="flex h-[90px] w-[72.85px] shrink-0 snap-start flex-col items-center justify-center gap-[17px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#2D2563] text-white">
              <span className="text-[12px] font-normal leading-[14.06px]">Май</span>
              <span className="text-[24px] font-bold leading-[28.13px]">16</span>
            </div>
            <div className="flex h-[90px] w-[72.85px] shrink-0 snap-start flex-col items-center justify-center gap-[17px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#2D2563] text-white">
              <span className="text-[12px] font-normal leading-[14.06px]">Май</span>
              <span className="text-[24px] font-bold leading-[28.13px]">17</span>
            </div>
          </div>
        </div>
      </div> */}
      <FinalPageModal />
    </div>
  );
}
