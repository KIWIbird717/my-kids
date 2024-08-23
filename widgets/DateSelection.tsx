"use client";

import BottomArrow from "@/public/ArrowToBottom.svg";
import BackArrow from "@/public/BackArrow.svg";
import NextArrow from "@/public/NextArrow.svg";
import { getDaysInMonth } from "@/shared/lib/utils/getDaysInMonth";
import { ru } from "date-fns/locale/ru";
import { FC, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ru", ru);

export default function DateSelection() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const year = selectedDate?.getFullYear() || new Date().getFullYear();
  const month = selectedDate?.getMonth() || new Date().getMonth();

  const daysAmount = getDaysInMonth(month, year);
  const days = Array.from({ length: daysAmount }).fill({ id: 0 });

  return (
    <div className="mt-[36px] flex flex-col overflow-hidden">
      <div className="flex flex-row items-center">
        <button className="bg-transparent">
          <BackArrow />
        </button>
        <div className="relative ml-[95px] mr-[53px] flex flex-row items-center justify-center text-[18px] leading-[41px] tracking-[0.37px] text-white min-[400px]:mr-[60px]">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="LLLL yyyy"
            locale={ru}
            showMonthYearPicker
            className="flex w-[140px] items-center justify-center bg-transparent capitalize"
          />
          <div className="absolute right-0">
            <BottomArrow />
          </div>
        </div>
        <button className="shrink-0 bg-transparent">
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
