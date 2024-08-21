"use client";

import React, { FC, useEffect, useState } from "react";
import NextArrow from "@/public/NextArrow.svg";
import { useSwiper } from "swiper/react";
import { Logger } from "@/shared/lib/utils/logger/Logger";
import Link from "next/link";
import { useLocale } from "next-intl";
import { cn } from "@/shared/lib/utils/cn";
import type { Swiper } from "swiper/types";
import type { Dispatch, SetStateAction } from "react";

export type StatsNextBtnProps = {
  onLastSlide?: boolean;
  currentSlideIndex: ReturnType<typeof useSwiper>["activeIndex"];
  setIsLastSlide: Dispatch<SetStateAction<boolean>>;
  swiper: Swiper;
};

export const NextBtn: FC<StatsNextBtnProps> = (props) => {
  const swiper = useSwiper();
  const locale = useLocale();

  // const [isLastSlide, setIsLastSlide] = useState(false);

  const handleNextSlide = () => {
    if (swiper.activeIndex === swiper.slides.length - 2) {
      // props.currentSlideIndex && props.currentSlideIndex(swiper.activeIndex);
      props.setIsLastSlide(true);
    } else {
      props.setIsLastSlide(false);
    }
    swiper.slideNext();
  };

  console.log(swiper.activeIndex);

  return (
    <>
      {props.onLastSlide ? (
        <Link
          href={`/${locale}/calculate`}
          className={cn(
            "relative z-[999] flex w-full items-center justify-center rounded-[1.25rem] bg-btn py-[0.9375rem] text-[1.125rem] font-medium leading-[1.625rem] text-white",
            "btnGrad",
          )}
        >
          Начать рассчет
        </Link>
      ) : (
        <button
          onClick={handleNextSlide}
          className="relative z-[999] flex w-full items-center justify-center rounded-[1.25rem] border-[1.5px] border-solid border-btn py-[0.9375rem] text-[1.125rem] font-medium leading-[1.625rem] text-white"
        >
          <span>Продолжить</span>

          <div className="absolute right-[1rem] mt-[0.25rem] items-center">
            <NextArrow />
          </div>
        </button>
      )}
    </>
  );
};
