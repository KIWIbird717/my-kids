"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";
import { useSwiper } from "swiper/react";
import NextArrow from "../../../public/NextArrow.svg";

type SwiperNextBtnProps = {
  onLastSlide?: (currentSlide: ReturnType<typeof useSwiper>["activeIndex"]) => void;
};
export const SwiperNextBtn: FC<SwiperNextBtnProps> = (props) => {
  const swiper = useSwiper();
  const t = useTranslations("UI.SwiperPage");

  const handleNextSlide = () => {
    if (swiper.activeIndex === swiper.slides.length - 1) {
      props.onLastSlide && props.onLastSlide(swiper.activeIndex);
    }
    swiper.slideNext();
  };

  return (
    <button
      onClick={handleNextSlide}
      className="relative z-[999] ml-[183px] mt-[-95px] flex w-[11rem] items-center justify-start rounded-[1.25rem] border-[1.5px] border-solid border-btn py-[0.9375rem] text-[1.125rem] font-medium leading-[1.625rem] text-white"
    >
      <span className="ml-[12px] w-[123px]">{t("NextBtn")}</span>
      <div className="absolute right-[1rem] mt-[0.25rem] items-center">
        <NextArrow />
      </div>
    </button>
  );
};
