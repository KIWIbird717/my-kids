import React from "react";
import NextArrow from "../../public/NextArrow.svg";

export default function NextBtn() {
  return (
    <button className="relative flex w-[17.5rem] items-center justify-center rounded-[1.25rem] bg-btn bg-gradient-to-bl py-[0.9375rem] text-[1.125rem] font-bold leading-[1.625rem] text-white">
      Дальше
      <div className="absolute right-[1rem] mt-[0.25rem] items-center">
        <NextArrow />
      </div>
    </button>
  );
}
