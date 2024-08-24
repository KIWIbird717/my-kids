"use client";

import { useTranslations } from "next-intl";
import { FC } from "react";
import { useSwiper } from "swiper/react";
import { Button } from "../Button";

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
    <Button variant="third" onClick={handleNextSlide}>
      Больше...
    </Button>
  );
};
