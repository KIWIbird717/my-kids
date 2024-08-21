"use client";

import FemaleSvg from "@/public/female.svg";
import MaleSvg from "@/public/male.svg";
import { cn } from "@/shared/lib/utils/cn";
import { BackBtn } from "@/shared/ui/home/start-calculation/BackBtn";
import { NextBtn } from "@/shared/ui/home/start-calculation/NextBtn";
import { useTranslations } from "next-intl";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import DateSelection from "./DateSelection";

const pagination = {
  clickable: true,
  renderBullet: function (_: number, className: string) {
    return '<span class="' + className + '"></span>';
  },
};

export const StatsSwiper = () => {
  const t = useTranslations("");
  const swiper = useSwiper();

  const [isLastSlide, setIsLastSlide] = useState(false);

  return (
    <Swiper
      pagination={pagination}
      allowTouchMove={false}
      modules={[Pagination]}
      id="statsSwipper"
      className="relative !z-[30] !max-h-[473px] !overflow-x-hidden"
    >
      <SwiperSlide className="relative flex h-[405px] w-full !shrink-0 items-center justify-center px-[42px]">
        <div className="mt-[24px] flex h-[45px] w-full items-center justify-between gap-6 font-bold text-white">
          <span className="w-[206px] text-[16px] leading-[18.75px]">Внесите данные мамы</span>
          <span className="w-[61px] text-end text-[16px] leading-[18.75px] opacity-70">Шаг 1</span>
        </div>
        <div className="mt-[40px] flex flex-col gap-6">
          <div className="flex h-[48px] flex-row items-center justify-between">
            <span className="text-[16px] font-normal leading-[41px] tracking-[0.374px] text-white">
              Возраст
            </span>
            <input
              type="number"
              className="z-[998] h-full w-[148px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#241e4f] text-center text-[18px] font-bold leading-[21.09px] text-white focus:outline-none"
              min={1}
              max={150}
            />
          </div>
          <div className="relative flex h-[48px] flex-row items-center justify-between">
            <span className="text-[16px] font-normal leading-[41px] tracking-[0.374px] text-white">
              Вес
            </span>
            <input
              type="number"
              text-center
              className="z-[998] h-full w-[148px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#241e4f] text-center text-[18px] font-bold leading-[21.09px] text-white focus:outline-none"
              min={15}
              max={599}
            />
            <span className="absolute right-[0] z-[999] mr-[35px] text-[18px] font-normal leading-[21.09px] text-white">
              кг
            </span>
          </div>
          <div className="relative flex h-[48px] flex-row items-center justify-between">
            <span className="text-[16px] font-normal leading-[41px] tracking-[0.374px] text-white">
              Рост
            </span>
            <input
              type="number"
              className="z-[998] h-full w-[148px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#241e4f] text-center text-[18px] font-bold leading-[21.09px] text-white focus:outline-none"
              min={1}
              max={270}
            />
            <span className="absolute right-[0] z-[999] mr-[30px] text-[18px] font-normal leading-[21.09px] text-white">
              см
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="min relative flex !shrink-0 items-center justify-center px-[24px] min-[400px]:px-[32px] min-[425px]:px-[45px]">
        <div className="mt-[24px] flex h-[45px] w-full items-center justify-between gap-6 font-bold text-white">
          <span className="w-[206px] text-[16px] leading-[18.75px]">
            Введите дату рождения будущей мамы
          </span>
          <span className="w-[61px] text-end text-[16px] leading-[18.75px] opacity-70">Шаг 2</span>
        </div>
        <DateSelection />
      </SwiperSlide>
      <SwiperSlide className="relative flex !shrink-0 items-center justify-center px-[24px] min-[400px]:px-[32px] min-[425px]:px-[45px]">
        <div className="mt-[24px] flex h-[45px] w-full items-center justify-between gap-6 font-bold text-white">
          <span className="w-[206px] text-[16px] leading-[18.75px]">Дата последней овуляции</span>
          <span className="w-[61px] text-end text-[16px] leading-[18.75px] opacity-70">Шаг 3</span>
        </div>
        <DateSelection />
      </SwiperSlide>
      <SwiperSlide className="relative flex w-full !shrink-0 items-center justify-center px-[42px]">
        <div className="mt-[24px] flex h-[45px] w-full items-center justify-between gap-6 font-bold text-white">
          <span className="w-[206px] text-[16px] leading-[18.75px]">Внесите данные папы</span>
          <span className="w-[61px] text-end text-[16px] leading-[18.75px] opacity-70">Шаг 4</span>
        </div>
        <div className="mt-[40px] flex flex-col gap-6">
          <div className="flex h-[48px] flex-row items-center justify-between">
            <span className="text-[16px] font-normal leading-[41px] tracking-[0.374px] text-white">
              Возраст
            </span>
            <input
              type="number"
              className="h-full w-[148px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#241e4f] text-center text-[18px] font-bold leading-[21.09px] text-white focus:outline-none"
              min={1}
              max={150}
            />
          </div>
          <div className="relative flex h-[48px] flex-row items-center justify-between">
            <span className="text-[16px] font-normal leading-[41px] tracking-[0.374px] text-white">
              Вес
            </span>
            <input
              type="number"
              className="h-full w-[148px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#241e4f] text-center text-[18px] font-bold leading-[21.09px] text-white focus:outline-none"
              min={15}
              max={599}
            />
            <span className="absolute right-[0] z-[999] mr-[35px] text-[18px] font-normal leading-[21.09px] text-white">
              кг
            </span>
          </div>
          <div className="relative flex h-[48px] flex-row items-center justify-between">
            <span className="text-[16px] font-normal leading-[41px] tracking-[0.374px] text-white">
              Рост
            </span>
            <input
              type="number"
              className="h-full w-[148px] rounded-[14px] border-[1px] border-[#5633C3] bg-[#241e4f] text-center text-[18px] font-bold leading-[21.09px] text-white focus:outline-none"
              min={1}
              max={270}
            />
            <span className="absolute right-[0] z-[999] mr-[30px] text-[18px] font-normal leading-[21.09px] text-white">
              см
            </span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative flex !shrink-0 items-center justify-center px-[24px] min-[400px]:px-[32px] min-[425px]:px-[45px]">
        <div className="mt-[24px] flex h-[45px] w-full items-center justify-between gap-6 font-bold text-white">
          <span className="w-[206px] text-[16px] leading-[18.75px]">
            Введите дату рождения будущего папы
          </span>
          <span className="w-[61px] text-end text-[16px] leading-[18.75px] opacity-70">Шаг 5</span>
        </div>
        <DateSelection />
      </SwiperSlide>
      <SwiperSlide className="relative flex !shrink-0 items-center justify-center px-[24px] min-[400px]:px-[32px] min-[425px]:px-[45px]">
        <div className="mt-[24px] flex h-[45px] w-full items-center justify-between gap-6 font-bold text-white">
          <span className="w-[206px] text-[16px] leading-[18.75px]">
            Выберите пол вашего будущего малыша
          </span>
          <span className="w-[61px] text-end text-[16px] leading-[18.75px] opacity-70">Шаг 6</span>
        </div>
        <div className="mt-[40px] flex flex-row items-center justify-between text-white">
          <div
            className={cn(
              "relative flex h-[148px] w-[152px] flex-col items-center justify-center rounded-[14px] bg-toggleBtn shadow-toggleBtnShadow",
              "btnFemale",
            )}
          >
            <input
              type="radio"
              name="radioSmth"
              className={cn("hidden", "radioSwiperFemale")}
              id="female"
            />
            <label
              htmlFor="female"
              className={cn("flex flex-col items-center justify-center gap-[26px]", "labelFemale")}
            >
              <FemaleSvg />
              <span className="text-[18px] font-bold leading-[21.09px]">Девочка</span>
            </label>
          </div>
          <div
            className={cn(
              "relative flex h-[148px] w-[152px] flex-col items-center justify-center rounded-[14px] bg-toggleBtn shadow-toggleBtnShadow",
              "btnMale",
            )}
          >
            <input
              type="radio"
              className={cn("hidden", "radioSwiperMale")}
              name="radioSmth"
              id="male"
            />
            <label
              htmlFor="male"
              className={cn("flex flex-col items-center justify-center gap-[30px]", "labelMale")}
            >
              <MaleSvg />
              <span className="mt-[5px] text-[18px] font-bold leading-[21.09px]">Мальчик</span>
            </label>
          </div>
        </div>
      </SwiperSlide>
      <div className="z-[998] mb-[20px] mt-[31px] flex gap-[9px] px-[25px]">
        <BackBtn onLastSlide={isLastSlide} setIsLastSlide={setIsLastSlide} />
        <NextBtn swiper={swiper} onLastSlide={isLastSlide} setIsLastSlide={setIsLastSlide} />
      </div>
    </Swiper>
  );
};
