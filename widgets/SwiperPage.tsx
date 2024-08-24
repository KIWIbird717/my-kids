"use client";

import { SwiperNextBtn } from "@/shared/ui/swiper/SwiperNextBtn";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import pregn1 from "../public/pregn1.png";
import pregn2 from "../public/pregn2.png";
import pregn3 from "../public/pregn3.png";
import { BackBtn } from "@/shared/ui/BackBtn";
import BackArrow from "@/public/BackArrow.svg";

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
  const swiper = useSwiper();

  const handleNextPageNavigation = () => {
    router.push(nextPageLink);
  };

  return (
    <Swiper
      pagination={pagination}
      draggable="false"
      effect="fade"
      modules={[Pagination, EffectFade]}
      className="relative flex h-full w-screen justify-center"
      id="introSwiper"
    >
      <SwiperSlide className="relative flex items-end justify-end px-[23px] pb-[200px]">
        <Image
          src={pregn1}
          alt="pregphoto1"
          className="absolute top-[164px] z-[-1] h-[240px] w-[240px]"
        />
        <div className="flex h-full w-full items-end">
          <p className="h-fit text-[26px] leading-8 text-white">Контролировать прибавку в весе</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative flex items-end justify-end px-[23px] pb-[200px]">
        <Image
          src={pregn2}
          alt="pregphoto2"
          className="absolute top-[164px] z-[-1] h-[240px] w-[240px]"
        />
        <div className="flex h-full w-full items-end">
          <p className="h-fit text-[26px] leading-8 text-white">
            Следовать советам вашего врача по питанию и образу жизни
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative flex items-end justify-end px-[23px] pb-[200px]">
        <Image
          src={pregn3}
          alt="pregphoto3"
          className="absolute top-[164px] z-[-1] h-[240px] w-[240px]"
        />
        <div className="flex h-full w-full items-end">
          <p className="h-fit text-[26px] leading-8 text-white">
            Готовится к родам с чеклистами на каждый триместр
          </p>
        </div>
      </SwiperSlide>
      <div className="absolute bottom-0 z-[999] flex w-full items-center gap-2 px-[23px] pb-[20px]">
        <BackBtn onClick={() => router.back()}>
          <BackArrow />
        </BackBtn>
        <SwiperNextBtn onLastSlide={handleNextPageNavigation} />
      </div>
    </Swiper>
  );
}
