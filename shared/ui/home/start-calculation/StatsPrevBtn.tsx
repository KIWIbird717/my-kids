import type { FC } from "react";
import BackArrow from "@/public/BackArrow.svg";
import { useSwiper } from "swiper/react";
import type { Dispatch, SetStateAction } from "react";

type StatsPrevBtnProps = {
  onLastSlide?: boolean;
  setIsLastSlide: Dispatch<SetStateAction<boolean>>;
};

export const StatsPrevBtn: FC<StatsPrevBtnProps> = (props) => {
  const swiper = useSwiper();

  const handlePrevSlide = () => {
    if (swiper.activeIndex === swiper.slides.length - 2) {
      // props.onLastSlide && props.onLastSlide(swiper.activeIndex);
      props.setIsLastSlide(true);
    } else {
      props.setIsLastSlide(false);
    }
    swiper.slidePrev();
  };

  return (
    <button
      onClick={handlePrevSlide}
      className="z-[999] rounded-3xl border-[2px] border-btn bg-transparent px-[1rem] py-[1.25rem]"
    >
      <BackArrow />
    </button>
  );
};
