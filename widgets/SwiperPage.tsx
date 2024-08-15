"use client";

import React from "react";
import { EffectFade, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import NextArrow from "../public/NextArrow.svg";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import pregn1 from "../public/pregn1.png";
import pregn2 from "../public/pregn2.png";
import pregn3 from "../public/pregn3.png";
import SwiperNextBtn from "@/shared/ui/swiper/SwiperNextBtn";

export default function SwiperPage() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <div className="">
      <Swiper
        pagination={pagination}
        draggable="false"
        effect="fade"
        modules={[Pagination, EffectFade]}
        className="relative h-[720px] w-screen"
      >
        <SwiperSlide className="relative flex items-center justify-center">
          <Image
            src={pregn1}
            alt="pregphoto1"
            className="ml-[24px] mt-[77.7px] h-[240px] w-[240px]"
          />
          <p className="ml-[21px] mt-[155px] h-[89px] w-[291px] text-[26px] leading-8 text-white">
            1. Контролировать прибавку веса
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            src={pregn2}
            alt="pregphoto2"
            className="ml-[24px] mt-[77.7px] h-[240px] w-[240px]"
          />
          <p className="ml-[21px] mt-[155px] h-[89px] w-[332px] text-[26px] leading-8 text-white">
            2. Следовать советам вашего врача по питанию и образу жизни
          </p>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Image
            src={pregn3}
            alt="pregphoto3"
            className="ml-[24px] mt-[77.7px] h-[240px] w-[240px]"
          />
          <p className="ml-[21px] mt-[155px] h-[89px] w-[332px] text-[26px] leading-8 text-white">
            3. Готовится к родам с чеклистами на каждый триместр
          </p>
        </SwiperSlide>
        <SwiperNextBtn />
      </Swiper>
    </div>
  );
}
