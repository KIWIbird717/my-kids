import React from "react";
import ConSvg from "../../../public/Cond.svg";
import { useTranslations } from "next-intl";

export default function ConTip() {
  const t = useTranslations("entities.TipsContent.Tips.ConTip");
  return (
    <div className="relative flex w-[5.725rem] flex-col items-center gap-[0.375rem]">
      <div className="relative flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-[50%] bg-gradient-to-l from-circleGrad1 to-circleGrad2 shadow-smallCircle">
        <div className="absolute">
          <ConSvg />
        </div>
      </div>
      <span className="text-center text-[0.625rem] font-light leading-[0.7rem] text-white">
        {t("span")}
      </span>
    </div>
  );
}
