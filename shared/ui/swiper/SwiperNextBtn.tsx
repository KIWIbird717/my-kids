"use client";

import React from "react";
import NextArrow from "../../../public/NextArrow.svg";
import { useSwiper } from "swiper/react";
import { useTranslations } from "next-intl";

export default function SwiperNextBtn() {
  const swiper = useSwiper();
  const t = useTranslations("UI.SwiperPage");
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="relative z-[999] ml-[183px] mt-[-95px] flex w-[11rem] items-center justify-start rounded-[1.25rem] border-[1.5px] border-solid border-btn py-[0.9375rem] text-[1.125rem] font-medium leading-[1.625rem] text-white"
    >
      <span className="ml-[12px] w-[123px]">{t("NextBtn")}</span>
      <div className="absolute right-[1rem] mt-[0.25rem] items-center">
        <NextArrow />
      </div>
    </button>
  );
}
