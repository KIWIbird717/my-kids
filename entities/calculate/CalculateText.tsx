import { NextToPayBtn, NextToPayBtnProps } from "@/shared/ui/calculate/NextToPayBtn";
import React from "react";

type CalculateTextProps = {} & Pick<NextToPayBtnProps, "onPaymentBtnClick">;

export default function CalculateText(props: CalculateTextProps) {
  return (
    <div className="mt-[270px] flex flex-col items-center justify-center">
      <p className="h-[57px] w-[319px] text-center text-[16px] font-normal leading-[26px] text-textSemiWhite">
        Если готовы, нажмите «Начать расчёт»!
      </p>
      <div className="mt-[17px] w-[291px]">
        <NextToPayBtn onPaymentBtnClick={props.onPaymentBtnClick} />
      </div>
    </div>
  );
}
