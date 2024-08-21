"use client";

import BottomArrow from "@/public/ArrowToBottom.svg";
import BackArrow from "@/public/BackArrow.svg";
import NextArrow from "@/public/NextArrow.svg";
import { FC } from "react";

export default function DateSelection() {
  const daysAmount = 30;
  const days = Array.from({ length: daysAmount }).fill({ id: 0 });

  return (
    <div className="mt-[36px] flex flex-col overflow-hidden">
      <div className="flex flex-row items-center">
        <button className="bg-transparent">
          <BackArrow />
        </button>
        <div className="ml-[82px] mr-[62px] flex flex-row items-center justify-center gap-[4px] text-[18px] leading-[41px] tracking-[0.37px] text-white">
          <span className="font-bold">Ноябрь</span>
          <span className="font-normal">2022</span>
          <BottomArrow />
        </div>
        <button className="bg-transparent">
          <NextArrow />
        </button>
      </div>
      <div className="relative mt-[29px] flex max-w-[336px] flex-row overflow-hidden">
        <div className="absolute left-[43%] h-[77px] w-[48px] rounded-[14px] border-[1px] border-solid border-[#5633C3] bg-[#2D2563]"></div>
        <div className="relative flex w-full snap-x flex-row overflow-auto">
          {days.map((_, index) => (
            <SelectDateItem key={`select-date-item-${index}`} name="П" date={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

type SelectDateItemProps = {
  name: string;
  date: number;
};

const SelectDateItem: FC<SelectDateItemProps> = (props) => {
  return (
    <div className="flex h-[77px] w-[48px] shrink-0 snap-center flex-col items-center justify-center gap-[17px] text-white">
      <span className="text-[12px] font-normal leading-[14.06px]">{props.name}</span>
      <span className="text-[18px] font-bold leading-[21.09px]">{props.date}</span>
    </div>
  );
};
