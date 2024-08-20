import { ApplePayBtn } from "@/shared/ui/calculate/payment/ApplePayBtn";
import { CardPayBtn } from "@/shared/ui/calculate/payment/CardPayBtn";
import { OtherPayBtn } from "@/shared/ui/calculate/payment/OtherPayBtn";
import React from "react";

export default function PaymentText() {
  return (
    <div className="mt-[35.7px] flex w-[319px] flex-col items-center text-white">
      <h3 className="h-[40px] text-center text-[24px] font-bold leading-10">Мы уже близки!</h3>
      <p className="mt-[8px] h-[106px] text-center text-[16px] font-normal leading-[26px]">
        Для того чтобы нам перейти к расчету и подготовке инструкции и плана действий для вашей
        пары, необходимо перейти к оплате.
      </p>
      <div className="mt-[325px] flex w-[291px] flex-col items-center gap-[16px]">
        <CardPayBtn />
        <ApplePayBtn />
        <OtherPayBtn />
      </div>
    </div>
  );
}
