import React from "react";
import { useTranslations } from "next-intl";
import NextArrow from "../../public/NextArrow.svg";

export default function ContinueBtn() {
  const t = useTranslations("UI.ContinueBtn");
  return (
    <button
      className={
        "relative flex w-[18.25rem] items-center justify-center rounded-[1.25rem] border-[2px] border-btn bg-transparent bg-gradient-to-bl py-[0.75rem] text-[1.125rem] font-normal leading-[1.625rem] text-white"
      }
    >
      {t("text")}
      <div className="absolute right-[1.5rem] mt-[0.25rem] items-center">
        <NextArrow />
      </div>
    </button>
  );
}
