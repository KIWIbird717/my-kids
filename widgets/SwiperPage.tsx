"use client";

import { SwiperNextBtn } from "@/shared/ui/swiper/SwiperNextBtn";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import pregn1 from "../public/pregn1.png";
import pregn2 from "../public/pregn2.png";
import pregn3 from "../public/pregn3.png";

const pagination = {
  clickable: true,
  renderBullet: function (_: number, className: string) {
    return '<span class="' + className + '"></span>';
  },
};

export default function SwiperPage() {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("widgets.PhotoSwiper");
  const nextPageLink = `/${locale}/plan`;

  const handleNextPageNavigation = () => {
    router.push(nextPageLink);
  };

  return (
    <div className="">
      <Swiper
        pagination={pagination}
        draggable="false"
        effect="fade"
        modules={[Pagination, EffectFade]}
        className="relative h-[720px] w-screen"
        id="introSwiper"
      >
        <SwiperSlide className="relative flex items-center justify-center">
          <Image
            src={pregn1}
            alt="pregphoto1"
            className="ml-[24px] mt-[77.7px] h-[240px] w-[240px]"
          />
          <p className="ml-[21px] mt-[155px] h-[89px] w-[291px] text-[26px] leading-8 text-white">
            {t("text1")}
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            src={pregn2}
            alt="pregphoto2"
            className="ml-[24px] mt-[77.7px] h-[240px] w-[240px]"
          />
          <p className="ml-[21px] mt-[155px] h-[89px] w-[332px] text-[26px] leading-8 text-white">
            {t("text2")}
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            src={pregn3}
            alt="pregphoto3"
            className="ml-[24px] mt-[77.7px] h-[240px] w-[240px]"
          />
          <p className="ml-[21px] mt-[155px] h-[89px] w-[332px] text-[26px] leading-8 text-white">
            {t("text3")}
          </p>
        </SwiperSlide>
        <SwiperNextBtn onLastSlide={handleNextPageNavigation} />
      </Swiper>
    </div>
  );
}
