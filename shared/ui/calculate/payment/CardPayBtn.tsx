import { cn } from "@/shared/lib/utils/cn";
import Link from "next/link";
import React from "react";
import CardSvg from "@/public/cardicon.svg";

export const CardPayBtn = () => {
  return (
    <Link
      href={``}
      className={cn(
        "relative flex w-full items-center justify-center rounded-[1.25rem] bg-btn px-[3rem] py-[0.9375rem] text-[1.15rem] font-normal leading-[1.625rem] text-white",
        "btnGrad",
      )}
    >
      Оплатить картой
      <div className="absolute left-0 ml-[29px] pt-[5px]">
        <CardSvg />
      </div>
    </Link>
  );
};
